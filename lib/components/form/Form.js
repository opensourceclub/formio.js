"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.reflect.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _Component2 = _interopRequireDefault(require("../_classes/component/Component"));

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

var _utils = require("../../utils/utils");

var _Formio = _interopRequireDefault(require("../../Formio"));

var _Form = _interopRequireDefault(require("../../Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FormComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(FormComponent, _Component);

  function FormComponent() {
    _classCallCheck(this, FormComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormComponent).apply(this, arguments));
  }

  _createClass(FormComponent, [{
    key: "init",

    /* eslint-disable max-statements */
    value: function init() {
      var _this = this;

      _get(_getPrototypeOf(FormComponent.prototype), "init", this).call(this);

      this.subForm = null;
      this.formSrc = '';
      this.subFormReady = new _nativePromiseOnly.default(function (resolve, reject) {
        _this.subFormReadyResolve = resolve;
        _this.subFormReadyReject = reject;
      });
      this.subFormLoaded = false;
      this.subscribe();
      var srcOptions = this.getSubOptions(); // Make sure that if reference is provided, the form must submit.

      if (this.component.reference) {
        this.component.submit = true;
      }

      if (this.component.src) {
        this.formSrc = this.component.src;
      }

      if (!this.component.src && !this.options.formio && (this.component.form || this.component.path)) {
        if (this.component.project) {
          this.formSrc = _Formio.default.getBaseUrl(); // Check to see if it is a MongoID.

          if ((0, _utils.isMongoId)(this.component.project)) {
            this.formSrc += '/project';
          }

          this.formSrc += "/".concat(this.component.project);
          srcOptions.project = this.formSrc;
        } else {
          this.formSrc = _Formio.default.getProjectUrl();
          srcOptions.project = this.formSrc;
        }

        if (this.component.form) {
          this.formSrc += "/form/".concat(this.component.form);
        } else if (this.component.path) {
          this.formSrc += "/".concat(this.component.path);
        }
      } // Build the source based on the root src path.


      if (!this.formSrc && this.options.formio) {
        var rootSrc = this.options.formio.formsUrl;

        if (this.component.path) {
          var parts = rootSrc.split('/');
          parts.pop();
          this.formSrc = "".concat(parts.join('/'), "/").concat(this.component.path);
        }

        if (this.component.form) {
          this.formSrc = "".concat(rootSrc, "/").concat(this.component.form);
        }
      } // Ensure components is set.


      this.component.components = this.component.components || [];
      this.subForm = new _Form.default(this.component, srcOptions).instance;
      this.subForm.root = this.root;
      this.subForm.currentForm = this;
      this.subForm.on('change', function () {
        _this.dataValue = _this.subForm.getValue();

        _this.triggerChange();
      });
      this.loadSubForm().then(this.redraw.bind(this));
      this.subForm.url = this.formSrc;
      this.subForm.nosubmit = this.nosubmit;
      this.subForm.nosubmit = false;
      this.restoreValue();
    }
    /* eslint-enable max-statements */

  }, {
    key: "getSubOptions",
    value: function getSubOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.options) {
        return options;
      }

      if (this.options.base) {
        options.base = this.options.base;
      }

      if (this.options.project) {
        options.project = this.options.project;
      }

      if (this.options.readOnly) {
        options.readOnly = this.options.readOnly;
      }

      if (this.options.breadcrumbSettings) {
        options.breadcrumbSettings = this.options.breadcrumbSettings;
      }

      if (this.options.buttonSettings) {
        options.buttonSettings = this.options.buttonSettings;
      }

      if (this.options.viewAsHtml) {
        options.viewAsHtml = this.options.viewAsHtml;
      }

      if (this.options.language) {
        options.language = this.options.language;
      }

      if (this.options.template) {
        options.template = this.options.template;
      }

      if (this.options.templates) {
        options.templates = this.options.templates;
      }

      if (this.options.renderMode) {
        options.renderMode = this.options.renderMode;
      }

      if (this.options.attachMode) {
        options.attachMode = this.options.attachMode;
      }

      if (this.options.iconset) {
        options.iconset = this.options.iconset;
      }

      return options;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.builderMode) {
        return _get(_getPrototypeOf(FormComponent.prototype), "render", this).call(this, this.component.label || 'Nested form');
      }

      var subform = this.subForm ? this.subForm.render() : this.renderTemplate('loading');
      return _get(_getPrototypeOf(FormComponent.prototype), "render", this).call(this, subform);
    }
  }, {
    key: "attach",
    value: function attach(element) {
      _get(_getPrototypeOf(FormComponent.prototype), "attach", this).call(this, element); // Don't attach in builder.


      if (this.builderMode) {
        return _nativePromiseOnly.default.resolve();
      }

      if (this.subForm) {
        return this.subForm.attach(element);
      }
    }
  }, {
    key: "detach",
    value: function detach() {
      if (this.subForm) {
        this.subForm.detach();
      }

      _get(_getPrototypeOf(FormComponent.prototype), "detach", this).call(this);
    }
  }, {
    key: "subscribe",
    value: function subscribe() {
      var _this2 = this;

      this.on('nosubmit', function (value) {
        _this2.nosubmit = value;
      }, true);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.subForm) {
        this.subForm.destroy();
      }

      _get(_getPrototypeOf(FormComponent.prototype), "destroy", this).call(this);
    }
  }, {
    key: "redraw",
    value: function redraw() {
      if (this.subForm) {
        this.subForm.form = this.component;
      }

      _get(_getPrototypeOf(FormComponent.prototype), "redraw", this).call(this);
    }
    /**
     * Pass everyComponent to subform.
     * @param args
     * @returns {*|void}
     */

  }, {
    key: "everyComponent",
    value: function everyComponent() {
      var _this$subForm;

      return (_this$subForm = this.subForm).everyComponent.apply(_this$subForm, arguments);
    }
    /**
     * Filter a subform to ensure all submit button components are hidden.
     *
     * @param form
     * @param options
     */

  }, {
    key: "filterSubForm",
    value: function filterSubForm() {
      // Iterate through every component and hide the submit button.
      (0, _utils.eachComponent)(this.component.components, function (component) {
        if (component.type === 'button' && (component.action === 'submit' || !component.action)) {
          component.hidden = true;
        }
      });
    }
  }, {
    key: "show",
    value: function show() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var state = (_get2 = _get(_getPrototypeOf(FormComponent.prototype), "show", this)).call.apply(_get2, [this].concat(args));

      if (state && !this.subFormLoaded) {
        this.loadSubForm();
      }

      return state;
    }
    /**
     * Load the subform.
     */

    /* eslint-disable max-statements */

  }, {
    key: "loadSubForm",
    value: function loadSubForm() {
      var _this3 = this;

      // Don't load form in builder mode.
      if (this.builderMode) {
        return this.subFormReady;
      }

      if (this.subFormLoaded) {
        return this.subFormReady;
      } // Add revision version if set.


      if (this.component.formRevision || this.component.formRevision === 0) {
        this.formSrc += "/v/".concat(this.component.formRevision);
      } // Determine if we already have a loaded form object.


      if (this.component && this.component.components && Array.isArray(this.component.components) && this.component.components.length) {
        this.filterSubForm();
        this.subFormReadyResolve(this.subForm);
        return this.subFormReady;
      } else if (this.formSrc) {
        new _Formio.default(this.formSrc).loadForm({
          params: {
            live: 1
          }
        }).then(function (formObj) {
          _this3.component.components = formObj.components;

          _this3.filterSubForm();

          return _this3.subFormReadyResolve(_this3.subForm);
        }).catch(function (err) {
          return _this3.subFormReadyReject(err);
        });
      }

      return this.subFormReady;
    }
    /* eslint-enable max-statements */

  }, {
    key: "checkValidity",
    value: function checkValidity(data, dirty) {
      if (this.subForm) {
        return this.subForm.checkValidity(this.dataValue.data, dirty);
      }

      return _get(_getPrototypeOf(FormComponent.prototype), "checkValidity", this).call(this, data, dirty);
    }
  }, {
    key: "checkConditions",
    value: function checkConditions(data) {
      var visible = _get(_getPrototypeOf(FormComponent.prototype), "checkConditions", this).call(this, data);

      var subForm = this.subForm; // Return if already hidden

      if (!visible) {
        return visible;
      }

      if (subForm && subForm.hasCondition()) {
        return this.subForm.checkConditions(this.dataValue.data);
      }

      return visible;
    }
  }, {
    key: "calculateValue",
    value: function calculateValue(data, flags) {
      if (this.subForm) {
        return this.subForm.calculateValue(this.dataValue.data, flags);
      }

      return _get(_getPrototypeOf(FormComponent.prototype), "calculateValue", this).call(this, data, flags);
    }
  }, {
    key: "setPristine",
    value: function setPristine(pristine) {
      _get(_getPrototypeOf(FormComponent.prototype), "setPristine", this).call(this, pristine);

      if (this.subForm) {
        this.subForm.setPristine(pristine);
      }
    }
    /**
     * Submit the form before the next page is triggered.
     */

  }, {
    key: "beforeNext",
    value: function beforeNext() {
      var _this4 = this;

      // If we wish to submit the form on next page, then do that here.
      if (this.component.submit) {
        return this.loadSubForm().then(function () {
          return _this4.subForm.submitForm().then(function (result) {
            _this4.dataValue = result.submission;
            return _this4.dataValue;
          }).catch(function (err) {
            _this4.subForm.onSubmissionError(err);

            return _nativePromiseOnly.default.reject(err);
          });
        });
      } else {
        return _get(_getPrototypeOf(FormComponent.prototype), "beforeNext", this).call(this);
      }
    }
    /**
     * Submit the form before the whole form is triggered.
     */

  }, {
    key: "beforeSubmit",
    value: function beforeSubmit() {
      var _this5 = this;

      var submission = this.dataValue; // This submission has already been submitted, so just return the reference data.

      if (submission && submission._id && submission.form) {
        this.dataValue = this.component.reference ? {
          _id: submission._id,
          form: submission.form
        } : submission;
        return _nativePromiseOnly.default.resolve(this.dataValue);
      } // This submission has not been submitted yet.


      if (this.component.submit) {
        return this.loadSubForm().then(function () {
          return _this5.subForm.submitForm().then(function (result) {
            _this5.subForm.loading = false;
            _this5.dataValue = _this5.component.reference ? {
              _id: result.submission._id,
              form: result.submission.form
            } : result.submission;
            return _this5.dataValue;
          }).catch(function () {});
        });
      } else {
        return _get(_getPrototypeOf(FormComponent.prototype), "beforeSubmit", this).call(this);
      }
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      if (!this.visible) {
        return true;
      }

      return !_get(_getPrototypeOf(FormComponent.prototype), "checkConditions", this).call(this, this.rootValue);
    }
  }, {
    key: "setValue",
    value: function setValue(submission, flags) {
      var _this6 = this;

      var changed = _get(_getPrototypeOf(FormComponent.prototype), "setValue", this).call(this, submission, flags);

      var hidden = this.isHidden();
      var subForm;

      if (hidden) {
        subForm = this.subFormReady;
      } else {
        subForm = this.loadSubForm();
      }

      subForm.then(function (form) {
        if (submission && submission._id && form.formio && !flags.noload && _lodash.default.isEmpty(submission.data)) {
          var submissionUrl = "".concat(form.formio.formsUrl, "/").concat(submission.form, "/submission/").concat(submission._id);
          form.setUrl(submissionUrl, _this6.options);
          form.nosubmit = false;
          form.loadSubmission();
        } else {
          form.setValue(submission, flags);
        }
      });
      return changed;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (this.subForm) {
        return this.subForm.getValue();
      }

      return this.dataValue;
    }
  }, {
    key: "getAllComponents",
    value: function getAllComponents() {
      if (!this.subForm) {
        return [];
      }

      return this.subForm.getAllComponents();
    }
  }, {
    key: "updateSubFormVisibility",
    value: function updateSubFormVisibility() {
      if (this.subForm) {
        this.subForm.parentVisible = this.visible;
      }
    }
  }, {
    key: "deleteValue",
    value: function deleteValue() {
      _get(_getPrototypeOf(FormComponent.prototype), "setValue", this).call(this, null, {
        noUpdateEvent: true,
        noDefault: true
      });

      _lodash.default.unset(this.data, this.key);
    }
  }, {
    key: "dataReady",
    get: function get() {
      return this.subFormReady;
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return FormComponent.schema();
    }
  }, {
    key: "emptyValue",
    get: function get() {
      return {
        data: {}
      };
    }
  }, {
    key: "ready",
    get: function get() {
      return this.subFormReady;
    }
  }, {
    key: "root",
    set: function set(inst) {
      if (!inst) {
        return;
      }

      this._root = inst;
      this.nosubmit = inst.nosubmit;
    },
    get: function get() {
      return this._root;
    }
  }, {
    key: "nosubmit",
    set: function set(value) {
      this._nosubmit = !!value;

      if (this.subForm) {
        this.subForm.nosubmit = this._nosubmit;
      }
    },
    get: function get() {
      return this._nosubmit || false;
    }
  }, {
    key: "currentForm",
    get: function get() {
      return this._currentForm;
    },
    set: function set(instance) {
      var _this7 = this;

      this._currentForm = instance;

      if (!this.subForm) {
        return;
      }

      this.subForm.getComponents().forEach(function (component) {
        component.currentForm = _this7;
      });
    }
  }, {
    key: "visible",
    get: function get() {
      return _get(_getPrototypeOf(FormComponent.prototype), "visible", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(FormComponent.prototype), "visible", value, this, true);

      this.updateSubFormVisibility();
    }
  }, {
    key: "parentVisible",
    get: function get() {
      return _get(_getPrototypeOf(FormComponent.prototype), "parentVisible", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(FormComponent.prototype), "parentVisible", value, this, true);

      this.updateSubFormVisibility();
    }
  }], [{
    key: "schema",
    value: function schema() {
      for (var _len2 = arguments.length, extend = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        extend[_key2] = arguments[_key2];
      }

      return _Component2.default.schema.apply(_Component2.default, [{
        type: 'form',
        key: 'form',
        src: '',
        reference: true,
        form: '',
        path: ''
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Nested Form',
        icon: 'wpforms',
        group: 'premium',
        documentation: 'http://help.form.io/userguide/#form',
        weight: 110,
        schema: FormComponent.schema()
      };
    }
  }]);

  return FormComponent;
}(_Component2.default);

exports.default = FormComponent;