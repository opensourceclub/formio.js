import Webform from './Webform';
import Component from './components/_classes/component/Component';
import dragula from 'dragula';
import Tooltip from 'tooltip.js';
import Components from './components/Components';
import { bootstrapVersion } from './utils/utils';
import { eachComponent, getComponent } from './utils/formUtils';
import BuilderUtils from './utils/builder';
import _ from 'lodash';
import Templates from './templates/Templates';
require('./components/builder');

export default class WebformBuilder extends Component {
// eslint-disable-next-line max-statements
  constructor() {
    let element, options;
    if (arguments[0] instanceof HTMLElement || arguments[1]) {
      element = arguments[0];
      options = arguments[1];
    }
    else {
      options = arguments[0];
    }
    // Reset skipInit in case PDFBuilder has set it.
    options.skipInit = false;

    super(null, options);

    this.element = element;

    this.builderHeight = 0;
    this.schemas = {};

    this.sideBarScroll = _.get(this.options, 'sideBarScroll', true);
    this.sideBarScrollOffset = _.get(this.options, 'sideBarScrollOffset', 0);

    const componentInfo = {};
    for (const type in Components.components) {
      const component = Components.components[type];
      if (component.builderInfo) {
        component.type = type;
        componentInfo[type] = component.builderInfo;
      }
    }

    this.dragDropEnabled = true;

    // Setup the builder options.
    this.builder = _.defaultsDeep({}, this.options.builder, this.defaultGroups);

    // Turn off if explicitely said to do so...
    _.each(this.defaultGroups, (config, key) => {
      if (config === false) {
        this.builder[key] = false;
      }
    });

    // Add the groups.
    this.groups = {};
    this.groupOrder = [];
    for (const group in this.builder) {
      if (this.builder[group]) {
        this.builder[group].key = group;
        this.groups[group] = this.builder[group];
        this.groups[group].components = this.groups[group].components || {};
        this.groups[group].componentOrder = this.groups[group].componentOrder || [];
        this.groups[group].subgroups = Object.keys(this.groups[group].groups || {}).map((groupKey) => {
          this.groups[group].groups[groupKey].componentOrder = Object.keys(this.groups[group].groups[groupKey].components).map((key) => key);
          return this.groups[group].groups[groupKey];
        });
        this.groupOrder.push(this.groups[group]);
      }
    }

    this.groupOrder = this.groupOrder
      .filter(group => group && !group.ignore)
      .sort((a, b) => a.weight - b.weight)
      .map(group => group.key);

    for (const type in Components.components) {
      const component = Components.components[type];
      if (component.builderInfo) {
        this.schemas[type] = component.builderInfo.schema;
        component.type = type;
        const builderInfo = component.builderInfo;
        builderInfo.key = component.type;
        this.addBuilderComponentInfo(builderInfo);
      }
    }
    // Filter out any extra components.
    // Add the components in each group.
    for (const group in this.groups) {
      const info = this.groups[group];
      for (const key in info.components) {
        const comp = info.components[key];
        if (comp) {
          if (comp.schema) {
            this.schemas[key] = comp.schema;
          }
          info.components[key] = comp === true ? componentInfo[key] : comp;
          info.components[key].key = key;
        }
      }
    }

    // Need to create a component order for each group.
    for (const group in this.groups) {
      if (this.groups[group] && this.groups[group].components) {
        this.groups[group].componentOrder = Object.keys(this.groups[group].components)
          .map(key => this.groups[group].components[key])
          .filter(component => component && !component.ignore)
          .sort((a, b) => a.weight - b.weight)
          .map(component => component.key);
      }
    }

    this.options.hooks = this.options.hooks || {};

    this.options.hooks.renderComponent = (html, { self }) => {
      if (self.type === 'form' && !self.key) {
        // The main webform shouldn't have this class as it adds extra styles.
        return html.replace('formio-component-form', '');
      }

      if (this.options.disabled && this.options.disabled.includes(self.key)) {
        return html;
      }

      return this.renderTemplate('builderComponent', {
        html,
      });
    };

    this.options.hooks.renderComponents = (html, { components, self }) => {
      // if Datagrid and already has a component, don't make it droppable.
      if (self.type === 'datagrid' && components.length > 0) {
        return html;
      }

      if (!components ||
        (!components.length && !components.nodrop) ||
        (self.type === 'form' && components.length <= 1 && (components.length === 0 || components[0].type === 'button'))
      ) {
        html = this.renderTemplate('builderPlaceholder', {
          position: 0
        }) + html;
      }
      return this.renderTemplate('builderComponents', {
        key: self.key,
        type: self.type,
        html,
      });
    };

    this.options.hooks.renderInput = (html, { self }) => {
      if (self.type === 'hidden') {
        return html + self.name;
      }
      return html;
    };

    this.options.hooks.renderLoading = (html, { self }) => {
      if (self.type === 'form' && self.key) {
        return self.name;
      }
      return html;
    };

    this.options.hooks.attachComponents = (element, components, container, component) => {
      // Don't attach if no element was found.
      if (!element) {
        return;
      }
      // Attach container and component to element for later reference.
      const containerElement = element.querySelector(`[ref="${component.component.key}-container"]`) || element;
      containerElement.formioContainer = container;
      containerElement.formioComponent = component;

      // Add container to draggable list.
      if (this.dragula) {
        this.dragula.containers.push(containerElement);
      }

      // If this is an existing datagrid element, don't make it draggable.
      if (component.type === 'datagrid' && components.length > 0) {
        return element;
      }

      // Since we added a wrapper, need to return the original element so that we can find the components inside it.
      return element.children[0];
    };

    this.options.hooks.attachDatagrid = (element, component) => {
      component.loadRefs(element, {
        [`${component.key}-container`]: 'single',
      });
      component.attachComponents(component.refs[`${component.key}-container`].parentNode, [], component.component.components);

      // Need to set up horizontal rearrangement of fields.
    };

    this.options.hooks.attachComponent = (element, component) => {
      // Add component to element for later reference.
      element.formioComponent = component;

      component.loadRefs(element, {
        removeComponent: 'single',
        editComponent: 'single',
        moveComponent: 'single',
        copyComponent: 'single',
        pasteComponent: 'single'
      });

      if (component.refs.copyComponent) {
        new Tooltip(component.refs.copyComponent, {
          trigger: 'hover',
          placement: 'top',
          title: this.t('复制')
        });

        component.addEventListener(component.refs.copyComponent, 'click', () =>
          this.copyComponent(component));
      }

      if (component.refs.pasteComponent) {
        const pasteToolTip = new Tooltip(component.refs.pasteComponent, {
          trigger: 'hover',
          placement: 'top',
          title: this.t('粘贴')
        });

        component.addEventListener(component.refs.pasteComponent, 'click', () => {
          pasteToolTip.hide();
          this.pasteComponent(component);
        });
      }

      if (component.refs.moveComponent) {
        new Tooltip(component.refs.moveComponent, {
          trigger: 'hover',
          placement: 'top',
          title: this.t('移动')
        });
      }

      const parent = this.getParentElement(element);

      if (component.refs.editComponent) {
        new Tooltip(component.refs.editComponent, {
          trigger: 'hover',
          placement: 'top',
          title: this.t('编辑')
        });

        component.addEventListener(component.refs.editComponent, 'click', () =>
          this.editComponent(component.component, parent));
      }

      if (component.refs.removeComponent) {
        new Tooltip(component.refs.removeComponent, {
          trigger: 'hover',
          placement: 'top',
          title: this.t('删除')
        });

        component.addEventListener(component.refs.removeComponent, 'click', () =>
          this.removeComponent(component.component, parent));
      }

      return element;
    };

    // Notify components if they need to modify their render.
    this.options.attachMode = 'builder';
    this.webform = this.webform || this.createForm(this.options);
  }

  createForm(options) {
    this.webform = new Webform(this.element, options);
    if (this.element) {
      this.loadRefs(this.element, {
        form: 'single'
      });
      if (this.refs.form) {
        this.webform.element = this.refs.form;
      }
    }
    return this.webform;
  }

  /**
   * Called when everything is ready.
   *
   * @returns {Promise} - Wait for webform to be ready.
   */
  get ready() {
    return this.webform.ready;
  }

  get defaultGroups() {
    return {
      basic: {
        title: '基础控件',
        weight: 0,
        default: true,
      },
      advanced: {
        title: '特殊控件',
        weight: 10
      },
      layout: {
        title: 'UI布局',
        weight: 20
      },
      data: {
        title: '数据展示',
        weight: 30
      },
      premium: {
        title: '高级控件',
        weight: 40
      }
    };
  }

  get form() {
    return this.webform.form;
  }

  get schema() {
    return this.webform.schema;
  }

  set form(value) {
    if (!value.components) {
      value.components = [];
    }

    // Ensure there is at least a submit button.
    if (!value.components.length) {
      value.components.push({
        type: 'button',
        label: '保存',
        key: 'submit',
        size: 'md',
        block: false,
        action: 'submit',
        disableOnInvalid: true,
        theme: 'primary'
      });
    }

    this.webform.form = value;
    this.rebuild();
  }

  get container() {
    return this.webform.form.components;
  }

  /**
   * When a component sets its api key, we need to check if it is unique within its namespace. Find the namespace root
   * so we can calculate this correctly.
   * @param component
   */
  findNamespaceRoot(component) {
    // First get the component with nested parents.
    const comp = getComponent(this.webform.form.components, component.key, true);
    const namespaceKey = this.recurseNamespace(comp);

    // If there is no key, it is the root form.
    if (!namespaceKey || this.form.key === namespaceKey) {
      return this.form.components;
    }

    // If the current component is the namespace, we don't need to find it again.
    if (namespaceKey === component.key) {
      return component.components;
    }

    // Get the namespace component so we have the original object.
    const namespaceComponent = getComponent(this.form.components, namespaceKey, true);
    return namespaceComponent.components;
  }

  recurseNamespace(component) {
    // If there is no parent, we are at the root level.
    if (!component) {
      return null;
    }

    // Some components are their own namespace.
    if (['container', 'datagrid', 'editgrid', 'tree'].includes(component.type) || component.tree || component.arrayTree) {
      return component.key;
    }

    // Anything else, keep going up.
    return this.recurseNamespace(component.parent);
  }

  render() {
    return this.renderTemplate('builder', {
      sidebar: this.renderTemplate('builderSidebar', {
        scrollEnabled: this.sideBarScroll,
        groupOrder: this.groupOrder,
        groupId: `builder-sidebar-${this.id}`,
        groups: this.groupOrder.map((groupKey) => this.renderTemplate('builderSidebarGroup', {
          group: this.groups[groupKey],
          groupKey,
          groupId: `builder-sidebar-${this.id}`,
          subgroups: this.groups[groupKey].subgroups.map((group) => this.renderTemplate('builderSidebarGroup', {
            group,
            groupKey: group.key,
            groupId: `builder-sidebar-${groupKey}`,
            subgroups: []
          })),
        })),
      }),
      form: this.webform.render(),
    });
  }

  attach(element) {
    return super.attach(element).then(() => {
      this.loadRefs(element, {
        form: 'single',
        sidebar: 'single',
        'container': 'multiple',
        'sidebar-anchor': 'multiple',
        'sidebar-group': 'multiple',
        'sidebar-container': 'multiple',
      });

      if (this.sideBarScroll && Templates.current.handleBuilderSidebarScroll) {
        Templates.current.handleBuilderSidebarScroll.call(this, this);
      }

      // Add the paste status in form
      if (window.sessionStorage) {
        const data = window.sessionStorage.getItem('formio.clipboard');
        if (data) {
          this.addClass(this.refs.form, 'builder-paste-mode');
        }
      }

      if (!bootstrapVersion(this.options)) {
        // Initialize
        this.refs['sidebar-group'].forEach((group) => {
          group.style.display = (group.getAttribute('data-default') === 'true') ? 'inherit' : 'none';
        });

        // Click event
        this.refs['sidebar-anchor'].forEach((anchor, index) => {
          this.addEventListener(anchor, 'click', () => {
            this.refs['sidebar-group'].forEach((group, groupIndex) => {
              group.style.display = (groupIndex === index) ? 'inherit' : 'none';
            });
          }, true);
        });
      }

      if (this.dragDropEnabled) {
        this.initDragula();
      }

      if (this.refs.form) {
        return this.webform.attach(this.refs.form);
      }
    });
  }

  initDragula() {
    const options = this.options;

    if (this.dragula) {
      this.dragula.destroy();
    }

    this.dragula = dragula(Array.prototype.slice.call(this.refs['sidebar-container']), {
      moves(el) {
        let moves = true;

        const list = Array.from(el.classList).filter(item => item.indexOf('formio-component-') === 0);
        list.forEach(item => {
          const key = item.slice('formio-component-'.length);
          if (options.disabled && options.disabled.includes(key)) {
            moves = false;
          }
        });

        if (el.classList.contains('no-drag')) {
          moves = false;
        }
        return moves;
      },
      copy(el) {
        return el.classList.contains('drag-copy');
      },
      accepts(el, target) {
        return !el.contains(target) && !target.classList.contains('no-drop');
      }
    }).on('drop', (element, target, source, sibling) => this.onDrop(element, target, source, sibling));
  }

  detach() {
    if (this.dragula) {
      this.dragula.destroy();
    }
    this.dragula = null;
    if (this.sideBarScroll && Templates.current.clearBuilderSidebarScroll) {
      Templates.current.clearBuilderSidebarScroll.call(this, this);
    }

    super.detach();
  }

  /* eslint-disable max-statements */
  onDrop(element, target, source, sibling) {
    if (!target) {
      return;
    }

    // If you try to drop within itself.
    if (element.contains(target)) {
      return;
    }

    const type = element.getAttribute('data-type');
    let info, isNew;

    if (type) {
      // This is a new component
      if (this.schemas.hasOwnProperty(type)) {
        info = _.cloneDeep(this.schemas[type]);
        info.key = _.camelCase(
          info.key ||
          info.type
        );
      }
      else {
        // This is an existing resource field.
        const [resource, key] = type.split('_');
        const resourceGroups = this.groups.resource.subgroups;
        const resourceGroup = _.find(resourceGroups, { key: resource });
        if (resourceGroup && resourceGroup.components.hasOwnProperty(key)) {
          info = resourceGroup.components[key].schema;
        }
      }

      isNew = true;
    }
    else {
      const index = _.findIndex(source.formioContainer, { key: element.formioComponent.component.key });
      if (index !== -1) {
        // Grab and remove the component from the source container.
        info = source.formioContainer.splice(
          _.findIndex(source.formioContainer, { key: element.formioComponent.component.key }), 1
        );

        // Since splice returns an array of one object, we need to destructure it.
        info = info[0];
      }
    }

    // If we haven't found the component, stop.
    if (!info) {
      return;
    }

    if (target !== source) {
      // Ensure the key remains unique in its new container.
      BuilderUtils.uniquify(this.findNamespaceRoot(target.formioComponent.component), info);
    }

    // Insert in the new container.
    if (sibling) {
      let index = 0;
      if (!sibling.getAttribute('data-noattach')) {
        index = _.findIndex(target.formioContainer, { key: sibling.formioComponent.component.key }) || 0;
      }
      else {
        index = sibling.getAttribute('data-position');
      }
      target.formioContainer.splice(index, 0, info);
    }
    else {
      target.formioContainer.push(info);
    }

    const parent = target.formioComponent;
    // Get path to the component in the parent component.
    let path = 'components';
    switch (parent.type) {
      case 'table':
        path = `rows[${info.tableRow}][${info.tableColumn}].components`;
        break;
      case 'columns':
        path = `columns[${info.column}].components`;
        break;
      case 'tabs':
        path = `components[${info.tab}].components`;
        break;
    }
    // Index within container
    const index = _.findIndex(_.get(parent.schema, path), { key: info.key }) || 0;
    this.emit('addComponent', info, parent, path, index);

    if (isNew && !this.options.noNewEdit) {
      this.editComponent(info, target, isNew);
    }

    // Only rebuild the parts needing to be rebuilt.
    if (target !== source) {
      if (source.formioContainer && source.contains(target)) {
        source.formioComponent.rebuild();
      }
      else if (target.contains(source)) {
        target.formioComponent.rebuild();
      }
      else {
        if (source.formioContainer) {
          source.formioComponent.rebuild();
        }
        target.formioComponent.rebuild();
      }
    }
    else {
      // If they are the same, only rebuild one.
      target.formioComponent.rebuild();
    }
  }

  setForm(form) {
    //populate isEnabled for recaptcha form settings
    var isRecaptchaEnabled = false;
    if (form.components) {
      eachComponent(form.components, component => {
        if (isRecaptchaEnabled) {
          return;
        }
        if (component.type === 'recaptcha') {
          isRecaptchaEnabled = true;
          return false;
        }
      });
      if (isRecaptchaEnabled) {
        _.set(form, 'settings.recaptcha.isEnabled', true);
      }
      else if (_.get(form, 'settings.recaptcha.isEnabled')) {
        _.set(form, 'settings.recaptcha.isEnabled', false);
      }
    }
    this.emit('change', form);
    return super.setForm(form).then(retVal => {
      setTimeout(() => (this.builderHeight = this.refs.form.offsetHeight), 200);
      return retVal;
    });
  }

  removeComponent(component, parent) {
    if (!parent) {
      return;
    }
    let remove = true;
    if (
      (Array.isArray(component.components) && component.components.length) ||
      (Array.isArray(component.rows) && component.rows.length) ||
      (Array.isArray(component.columns) && component.columns.length)
    ) {
      const message = 'Removing this component will also remove all of its children. Are you sure you want to do this?';
      remove = window.confirm(this.t(message));
    }
    const index = parent.formioContainer.indexOf(component);
    if (remove && index !== -1) {
      this.emit('removeComponent', component);
      parent.formioContainer.splice(index, 1);
      parent.formioComponent.rebuild();
    }
    return remove;
  }

  updateComponent(component) {
    // Update the preview.
    if (this.preview) {
      this.preview.form = { components: [_.omit(component, [
        'hidden',
        'calculatedValue'
      ])] };
      this.setContent(this.componentEdit.querySelector('[ref="preview"]'), this.preview.render());
    }

    // Change the "default value" field to be reflective of this component.
    if (this.defaultValueComponent) {
      _.assign(this.defaultValueComponent.component, _.omit(component, [
        'key',
        'label',
        'placeholder',
        'tooltip',
        'validate',
        'disabled',
        'calculatedValue'
      ]));
    }

    // Called when we update a component.
    this.emit('updateComponent', component);
  }

  editComponent(component, parent, isNew) {
    if (!component.key) {
      return;
    }
    let saved = false;
    const componentCopy = _.cloneDeep(component);
    let componentClass = Components.components[componentCopy.type];
    const isCustom = componentClass === undefined;
    componentClass = isCustom ? Components.components.unknown : componentClass;
    // Make sure we only have one dialog open at a time.
    if (this.dialog) {
      this.dialog.close();
    }

    // This is the render step.
    const editFormOptions = _.get(this, 'options.editForm', {});
    this.editForm = new Webform(
      {
        ..._.omit(this.options, ['hooks', 'builder', 'events', 'attachMode', 'skipInit']),
        language: this.options.language,
        ...editFormOptions
      }
    );

    // Allow editForm overrides per component.
    const overrides = _.get(this.options, `editForm.${componentCopy.type}`, {});

    // Get the editform for this component.
    this.editForm.form = componentClass.editForm(_.cloneDeep(overrides));

    // Pass along the form being edited.
    this.editForm.editForm = this.form;
    this.editForm.editComponent = component;

    if (isCustom) {
      this.editForm.submission = {
        data: {
          componentJson: componentCopy
        },
      };
    }
    else {
      this.editForm.submission = {
        data: componentCopy,
      };
    }

    if (this.preview) {
      this.preview.destroy();
    }
    this.preview = new Webform(_.omit(this.options, [
      'hooks',
      'builder',
      'events',
      'attachMode',
      'calculatedValue'
    ]));

    this.componentEdit = this.ce('div');
    this.setContent(this.componentEdit, this.renderTemplate('builderEditForm', {
      componentInfo: componentClass.builderInfo,
      editForm: this.editForm.render(),
      preview: this.preview.render(),
    }));

    this.dialog = this.createModal(this.componentEdit);

    // This is the attach step.
    const editForm = this.componentEdit.querySelector('[ref="editForm"]');
    this.editForm.attach(editForm);

    this.defaultValueComponent = getComponent(this.editForm.components, 'defaultValue');

    this.updateComponent(componentCopy);

    this.editForm.on('change', (event) => {
      if (event.changed) {
        // Set the component to the componentJson if this is a custom component.
        if (isCustom && event.data.componentJson) {
          const componentJson = event.data.componentJson;
          // First empty the existing data object.
          for (const prop in event.data) {
            if (event.data.hasOwnProperty(prop)) {
              delete event.data[prop];
            }
          }
          _.merge(event.data, componentJson);
        }

        // See if this is a manually modified key. Treat custom component keys as manually modified
        if ((event.changed.component && (event.changed.component.key === 'key')) || isCustom) {
          componentCopy.keyModified = true;
        }

        if (event.changed.component && (['label', 'title'].includes(event.changed.component.key))) {
          // Ensure this component has a key.
          if (isNew) {
            if (!event.data.keyModified) {
              this.editForm.everyComponent(component => {
                if (component.key === 'key' && component.parent.component.key === 'tabs') {
                  component.setValue(_.camelCase(
                    event.data.title ||
                    event.data.label ||
                    event.data.placeholder ||
                    event.data.type
                  ));
                  return false;
                }
              });
            }

            if (this.form) {
              // Set a unique key for this component.
              BuilderUtils.uniquify(this.findNamespaceRoot(parent.formioComponent.component), event.data);
            }
          }
        }

        // Update the component.
        this.updateComponent(event.data);
      }
    });
    this.addEventListener(this.componentEdit.querySelector('[ref="cancelButton"]'), 'click', (event) => {
      event.preventDefault();
      this.editForm.detach();
      this.emit('cancelComponent', component);
      this.dialog.close();
    });

    this.addEventListener(this.componentEdit.querySelector('[ref="removeButton"]'), 'click', (event) => {
      event.preventDefault();
      // Since we are already removing the component, don't trigger another remove.
      saved = true;
      this.editForm.detach();
      this.removeComponent(component, parent);
      this.dialog.close();
    });

    this.addEventListener(this.componentEdit.querySelector('[ref="saveButton"]'), 'click', (event) => {
      if (!this.editForm.checkValidity(this.editForm.data, true)) {
        return;
      }
      event.preventDefault();
      saved = true;
      this.editForm.detach();
      const parentContainer = parent ? parent.formioContainer : this.container;
      const parentComponent = parent ? parent.formioComponent : this;
      const index = parentContainer.indexOf(component);
      this.dialog.close();
      if (index !== -1) {
        const originalComponent = parentContainer[index];
        parentContainer[index] = this.editForm.submission.data;
        parentComponent.rebuild();
        // Should we be passing the instance or the definition here as the component? See WizardBuilder.
        this.emit('saveComponent', parentContainer[index], originalComponent);
      }
    });

    this.addEventListener(this.dialog, 'close', () => {
      this.editForm.detach();
      this.preview.destroy();
      if (isNew && !saved) {
        this.removeComponent(component, parent);
      }
      // Clean up.
      this.removeEventListener(this.dialog, 'close');
      this.dialog = null;
    });

    // Called when we edit a component.
    this.emit('editComponent', component);
  }

  /**
   * Creates copy of component schema and stores it under sessionStorage.
   * @param {Component} component
   * @return {*}
   */
  copyComponent(component) {
    if (!window.sessionStorage) {
      return console.warn('Session storage is not supported in this browser.');
    }
    this.addClass(this.refs.form, 'builder-paste-mode');
    const copy = _.cloneDeep(component.schema);
    window.sessionStorage.setItem('formio.clipboard', JSON.stringify(copy));
  }

  /**
   * Paste copied component after the current component.
   * @param {Component} component
   * @return {*}
   */
  pasteComponent(component) {
    if (!window.sessionStorage) {
      return console.warn('Session storage is not supported in this browser.');
    }
    this.removeClass(this.refs.form, 'builder-paste-mode');
    if (window.sessionStorage) {
      const data = window.sessionStorage.getItem('formio.clipboard');
      if (data) {
        const schema = JSON.parse(data);
        const parent = this.getParentElement(component.element);
        BuilderUtils.uniquify(this.findNamespaceRoot(parent.formioComponent.component), schema);
        const index = parent.formioContainer.indexOf(component.component);
        parent.formioContainer.splice(index + 1, 0, schema);
        parent.formioComponent.rebuild();
        this.emit('saveComponent');
      }
    }
  }

  getParentElement(element) {
    let container = element;
    do {
      container = container.parentNode;
    } while (container && !container.formioContainer);
    return container;
  }

  addBuilderComponentInfo(component) {
    if (!component || !component.group || !this.groups[component.group]) {
      return;
    }

    component = _.clone(component);
    const groupInfo = this.groups[component.group];
    if (!groupInfo.components.hasOwnProperty(component.key)) {
      groupInfo.components[component.key] = component;
    }
    return component;
  }
}
