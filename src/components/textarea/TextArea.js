/* global Quill */
import TextFieldComponent from '../textfield/TextField';
import Formio from '../../Formio';
import _ from 'lodash';
import NativePromise from 'native-promise-only';
import { uniqueName } from '../../utils/utils';

export default class TextAreaComponent extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema({
      type: 'textarea',
      label: '文本域',
      key: 'textArea',
      rows: 3,
      // wysiwyg: false,
      editor: '',
      inputFormat: 'html',
      validate: {
        minWords: '',
        maxWords: ''
      }
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: '文本域',
      group: 'basic',
      icon: 'font',
      documentation: 'http://help.form.io/userguide/#textarea',
      weight: 20,
      schema: TextAreaComponent.schema()
    };
  }

  init() {
    super.init();
    this.editorReady = new NativePromise((resolve) => {
      this.editorReadyResolve = resolve;
    });

    // Never submit on enter for text areas.
    this.options.submitOnEnter = false;
  }

  get defaultSchema() {
    return TextAreaComponent.schema();
  }

  get inputInfo() {
    const info = super.inputInfo;
    info.type = this.component.wysiwyg ? 'div' : 'textarea';
    if (this.component.rows) {
      info.attr.rows = this.component.rows;
    }
    return info;
  }

  setupValueElement(element) {
    let value = this.getValue();
    value = this.isEmpty(value) ? this.defaultViewOnlyValue : this.getView(value);
    if (this.component.wysiwyg) {
      value = this.interpolate(value);
    }
    if (element) {
      this.setContent(element, value);
    }
  }

  acePlaceholder() {
    if (!this.component.placeholder || !this.editor) {
      return;
    }
    const shouldShow = !this.editor.session.getValue().length;
    let node = this.editor.renderer.emptyMessageNode;
    if (!shouldShow && node) {
      this.editor.renderer.scroller.removeChild(this.editor.renderer.emptyMessageNode);
      this.editor.renderer.emptyMessageNode = null;
    }
    else if (shouldShow && !node) {
      node = this.editor.renderer.emptyMessageNode = this.ce('div');
      node.textContent = this.t(this.component.placeholder);
      node.className = 'ace_invisible ace_emptyMessage';
      node.style.padding = '0 9px';
      this.editor.renderer.scroller.appendChild(node);
    }
  }

  renderElement(value, index) {
    const info = this.inputInfo;
    info.attr = info.attr || {};
    info.content = value;
    if (this.options.readOnly || this.disabled) {
      return this.renderTemplate('well', {
        children: value,
        nestedKey: this.key,
        value
      });
    }
    // Editors work better on divs.
    if (this.component.editor || this.component.wysiwyg) {
      return '<div ref="input"></div>';
    }

    return this.renderTemplate('input', {
      input: info,
      value,
      index
    });
  }

  get autoExpand() {
    return this.component.autoExpand;
  }

  /**
   * Updates the editor value.
   *
   * @param newValue
   */
  updateEditorValue(newValue) {
    newValue = this.getConvertedValue(this.removeBlanks(newValue));
    if ((newValue !== this.dataValue) && (!_.isEmpty(newValue) || !_.isEmpty(this.dataValue))) {
      this.updateValue(newValue, {
        modified: !this.autoModified
      });
    }
    this.autoModified = false;
  }

  attachElement(element, index) {
    if (this.autoExpand && (this.isPlain || this.options.readOnly || this.options.htmlView)) {
      element.childNodes.forEach((element) => {
        if (element.nodeName === 'TEXTAREA') {
          this.addAutoExpanding(element);
        }
      });
    }

    if (this.options.readOnly) {
      return element;
    }

    if (this.component.wysiwyg && !this.component.editor) {
      this.component.editor = 'ckeditor';
    }

    let settings = _.isEmpty(this.component.wysiwyg) ? this.wysiwygDefault : this.component.wysiwyg;
    const mode = this.component.as || 'javascript';

    // Attempt to add a wysiwyg editor. In order to add one, it must be included on the global scope.
    switch (this.component.editor) {
      case 'ace':
        Formio.requireLibrary('ace', 'ace', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.1/ace.js', true)
          .then((editor) => {
            this.editor = editor.edit(element);
            this.editor.setOptions({
              maxLines: 12,
              minLines: 12
            });
            this.editor.on('change', () => this.updateEditorValue(this.editor.getValue()));
            this.editor.getSession().setTabSize(2);
            this.editor.getSession().setMode(`ace/mode/${mode}`);
            this.editor.on('input', () => this.acePlaceholder());
            setTimeout(() => this.acePlaceholder(), 100);
            this.editor.setValue(this.setConvertedValue(this.dataValue));
            this.editorReadyResolve(this.editor);
            return this.editor;
          });
        break;
      case 'quill':
        // Normalize the configurations for quill.
        if (settings.hasOwnProperty('toolbarGroups') || settings.hasOwnProperty('toolbar')) {
          console.warn('The WYSIWYG settings are configured for CKEditor. For this renderer, you will need to use configurations for the Quill Editor. See https://quilljs.com/docs/configuration for more information.');
          settings = this.wysiwygDefault;
        }

        // Add the quill editor.
        this.addQuill(
          element,
          settings, () => this.updateEditorValue(this.editor.root.innerHTML)
        ).then((quill) => {
          this.editor = quill;
          if (this.component.isUploadEnabled) {
            const _this = this;
            quill.getModule('toolbar').addHandler('image', function() {
              //we need initial 'this' because quill calls this method with its own context and we need some inner quill methods exposed in it
              //we also need current component instance as we use some fields and methods from it as well
              _this.imageHandler.call(_this, this);
            } );
          }
          quill.root.spellcheck = this.component.spellcheck;
          if (this.options.readOnly || this.component.disabled) {
            this.editor.disable();
          }

          this.editor.setContents(this.editor.clipboard.convert(this.setConvertedValue(this.dataValue)));
          this.editorReadyResolve(this.editor);
          return quill;
        }).catch(err => console.warn(err));
        break;
      case 'ckeditor':
        settings = settings || {};
        settings.rows = this.component.rows;
        this.addCKE(element, settings, (newValue) => this.updateEditorValue(newValue))
          .then((editor) => {
            this.editor = editor;
            if (this.options.readOnly || this.component.disabled) {
              this.editor.isReadOnly = true;
            }
            const numRows = parseInt(this.component.rows, 10);
            if (_.isFinite(numRows) && _.has(editor, 'ui.view.editable.editableElement')) {
              // Default height is 21px with 10px margin + a 14px top margin.
              const editorHeight = (numRows * 31) + 14;
              editor.ui.view.editable.editableElement.style.height = `${(editorHeight)}px`;
            }
            editor.data.set(this.setConvertedValue(this.dataValue));
            this.editorReadyResolve(this.editor);
            return editor;
          });
        break;
      default:
        this.addEventListener(element, this.inputInfo.changeEvent, () => {
          this.updateValue(null, {
            modified: true
          }, index);
        });
    }

    return element;
  }

  imageHandler(quillInstance) {
    let fileInput = quillInstance.container.querySelector('input.ql-image[type=file]');
    if (fileInput == null) {
      fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute('accept', 'image/*');
      fileInput.classList.add('ql-image');
      fileInput.addEventListener('change', () => {
        const files = fileInput.files;
        const range = quillInstance.quill.getSelection(true);

        if (!files || !files.length) {
          console.warn('No files selected');
          return;
        }

        quillInstance.quill.enable(false);
        const { uploadStorage, uploadUrl, uploadOptions, uploadDir } = this.component;
        let requestData;
        this.root.formio
          .uploadFile(
            uploadStorage,
            files[0],
            uniqueName(files[0].name),
            uploadDir || '', //should pass empty string if undefined
            null,
            uploadUrl,
            uploadOptions
          )
          .then(result => {
            requestData = result;
            return this.root.formio.downloadFile(result);
          })
          .then(result => {
            quillInstance.quill.enable(true);
            const Delta = Quill.import('delta');
            quillInstance.quill.updateContents(new Delta()
                .retain(range.index)
                .delete(range.length)
                .insert(
                  {
                    image: result.url
                  },
                  {
                    alt: JSON.stringify(requestData),
                  })
              , Quill.sources.USER);
            fileInput.value = '';
          }).catch(error => {
          console.warn('Quill image upload failed');
          console.warn(error);
          quillInstance.quill.enable(true);
        });
      });
      quillInstance.container.appendChild(fileInput);
    }
    fileInput.click();
  }

  get isPlain() {
    return (!this.component.wysiwyg && !this.component.editor);
  }

  get htmlView() {
    return this.options.readOnly && this.component.wysiwyg;
  }
  /* eslint-enable max-statements */

  setWysiwygValue(value, skipSetting) {
    if (this.htmlView) {
      // For HTML view, just view the contents.
      if (this.input) {
        this.setContent(this.input, this.interpolate(value));
      }
    }
    else if (this.editorReady) {
      return this.editorReady.then((editor) => {
        this.autoModified = true;
        if (!skipSetting) {
          switch (this.component.editor) {
            case 'ace':
              editor.setValue(this.setConvertedValue(value));
              break;
            case 'quill':
              if (this.component.isUploadEnabled) {
                this.setAsyncConvertedValue(value)
                  .then(result => {
                    editor.setContents(editor.clipboard.convert(result));
                  });
              }
              else {
                editor.setContents(editor.clipboard.convert(this.setConvertedValue(value)));
              }
              break;
            case 'ckeditor':
              editor.data.set(this.setConvertedValue(value));
              break;
          }
        }
      });
    }

    return NativePromise.resolve();
  }

  setConvertedValue(value) {
    if (this.component.as && this.component.as === 'json' && !_.isNil(value)) {
      try {
        value = JSON.stringify(value, null, 2);
      }
      catch (err) {
        console.warn(err);
      }
    }

    if (!_.isString(value)) {
      value = '';
    }

    return value;
  }

  setAsyncConvertedValue(value) {
    if (this.component.as && this.component.as === 'json' && value) {
      try {
        value = JSON.stringify(value, null, 2);
      }
      catch (err) {
        console.warn(err);
      }
    }

    if (!_.isString(value)) {
      value = '';
    }

    const htmlDoc = new DOMParser().parseFromString(value,'text/html');
    const images = htmlDoc.getElementsByTagName('img');
    if (images.length) {
      return this.setImagesUrl(images)
        .then( () => {
          value = htmlDoc.getElementsByTagName('body')[0].firstElementChild;
          return new XMLSerializer().serializeToString(value);
        });
    }
    else {
      return NativePromise.resolve(value);
    }
  }

  setImagesUrl(images) {
    return NativePromise.all(_.map(images, image => {
      let requestData;
      try {
        requestData = JSON.parse(image.getAttribute('alt'));
      }
      catch (error) {
        console.warn(error);
      }

      return this.root.formio.downloadFile(requestData)
        .then((result) => {
          image.setAttribute('src', result.url);
        });
    }));
  }

  addAutoExpanding(textarea) {
    let heightOffset = null;
    let previousHeight = null;

    const changeOverflow = (value) => {
      const width = textarea.style.width;

      textarea.style.width = '0px';
      textarea.offsetWidth;
      textarea.style.width = width;

      textarea.style.overflowY = value;
    };

    const preventParentScroll = (element, changeSize) => {
      const nodeScrolls = [];

      while (element && element.parentNode && element.parentNode instanceof Element) {
        if (element.parentNode.scrollTop) {
          nodeScrolls.push({
            node: element.parentNode,
            scrollTop: element.parentNode.scrollTop,
          });
        }
        element = element.parentNode;
      }

      changeSize();

      nodeScrolls.forEach((nodeScroll) => {
        nodeScroll.node.scrollTop = nodeScroll.scrollTop;
      });
    };

    const resize = () => {
      if (textarea.scrollHeight === 0) {
        return;
      }

      preventParentScroll(textarea, () => {
        textarea.style.height = '';
        textarea.style.height = `${textarea.scrollHeight + heightOffset}px`;
      });
    };

    const update = () => {
      resize();

      const styleHeight = Math.round(parseFloat(textarea.style.height));
      const computed = window.getComputedStyle(textarea, null);

      let currentHeight = textarea.offsetHeight;

      if (currentHeight < styleHeight && computed.overflowY === 'hidden') {
        changeOverflow('scroll');
      }
      else if (computed.overflowY !== 'hidden') {
        changeOverflow('hidden');
      }

      resize();
      currentHeight = textarea.offsetHeight;

      if (previousHeight !== currentHeight) {
        previousHeight = currentHeight;
        update();
      }
    };

    const computedStyle = window.getComputedStyle(textarea, null);

    textarea.style.resize = 'none';
    heightOffset = parseFloat(computedStyle.borderTopWidth) + parseFloat(computedStyle.borderBottomWidth) || 0;

    if (window) {
      this.addEventListener(window, 'resize', update);
    }

    this.addEventListener(textarea, 'input', update);

    this.updateSize = update;

    update();
  }

  removeBlanks(value) {
    if (!value) {
      return value;
    }
    const removeBlanks = function(input) {
      if (typeof input !== 'string') {
        return input;
      }
      return input.replace(/<p>&nbsp;<\/p>|<p><br><\/p>|<p><br>&nbsp;<\/p>/g, '').trim();
    };

    if (Array.isArray(value)) {
      value.forEach((input, index) => {
        value[index] = removeBlanks(input);
      });
    }
    else {
      value = removeBlanks(value);
    }
    return value;
  }

  onChange(flags, fromRoot) {
    const changed = super.onChange(flags, fromRoot);
    if (this.updateSize) {
      this.updateSize();
    }
    return changed;
  }

  hasChanged(newValue, oldValue) {
    return super.hasChanged(this.removeBlanks(newValue), this.removeBlanks(oldValue));
  }

  isEmpty(value) {
    return super.isEmpty(this.removeBlanks(value));
  }

  get defaultValue() {
    let defaultValue = super.defaultValue;
    if (this.component.editor === 'quill' && !defaultValue) {
      defaultValue = '<p><br></p>';
    }
    return defaultValue;
  }

  setValue(value, flags) {
    const skipSetting = _.isEqual(value, this.getValue());
    value = value || '';
    if (this.isPlain) {
      value = Array.isArray(value) ? value.map((val) => this.setConvertedValue(val)) : this.setConvertedValue(value);
      return super.setValue(value, flags);
    }

    // Set the value when the editor is ready.
    const newValue = (value === undefined || value === null) ? this.getValue() : value;
    const changed = (newValue !== undefined) ? this.hasChanged(newValue, this.dataValue) : false;
    this.dataValue = newValue;
    this.setWysiwygValue(newValue, skipSetting, () => this.updateOnChange(flags, changed));
    return changed;
  }

  getConvertedValue(value) {
    if (this.component.as && this.component.as === 'json' && value) {
      try {
        value = JSON.parse(value);
      }
      catch (err) {
        // console.warn(err);
      }
    }
    return value;
  }

  destroy() {
    if (this.editorReady) {
      this.editorReady.then((editor) => editor.destroy());
    }

    if (this.updateSize) {
      this.removeEventListener(window, 'resize', this.updateSize);
    }

    return super.destroy();
  }

  getValue() {
    if (this.isPlain) {
      return this.getConvertedValue(super.getValue());
    }

    return this.dataValue;
  }
}
