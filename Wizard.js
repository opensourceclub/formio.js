"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.reflect.set");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Webform2 = _interopRequireDefault(require("./Webform"));

var _Component = _interopRequireDefault(require("./components/_classes/component/Component"));

var _Formio = _interopRequireDefault(require("./Formio"));

var _utils = require("./utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var Wizard =
/*#__PURE__*/
function (_Webform) {
  _inherits(Wizard, _Webform);

  /**
   * Constructor for wizard based forms
   * @param element Dom element to place this wizard.
   * @param {Object} options Options object, supported options are:
   *    - breadcrumbSettings.clickable: true (default) determines if the breadcrumb bar is clickable or not
   *    - buttonSettings.show*(Previous, Next, Cancel): true (default) determines if the button is shown or not
   */
  function Wizard() {
    var _this;

    _classCallCheck(this, Wizard);

    var element, options;

    if (arguments[0] instanceof HTMLElement || arguments[1]) {
      element = arguments[0];
      options = arguments[1];
    } else {
      options = arguments[0];
    }

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wizard).call(this, element, options));
    _this.panels = [];
    _this.pages = [];
    _this.globalComponents = [];
    _this.components = [];
    _this.page = 0;
    _this.currentNextPage = 0;
    _this._seenPages = [0];
    return _this;
  }

  _createClass(Wizard, [{
    key: "isLastPage",
    value: function isLastPage() {
      var next = this.getNextPage();

      if (_lodash.default.isNumber(next)) {
        return 0 < next && next >= this.pages.length;
      }

      return _lodash.default.isNull(next);
    }
  }, {
    key: "getPages",
    value: function getPages() {
      var _this2 = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _args$all = args.all,
          all = _args$all === void 0 ? false : _args$all;

      var pageOptions = _lodash.default.clone(this.options);

      var components = _lodash.default.clone(this.components);

      var pages = this.pages.filter(all ? _lodash.default.identity : function (p, index) {
        return _this2._seenPages.includes(index);
      }).map(function (page, index) {
        return _this2.createComponent(page, _lodash.default.assign(pageOptions, {
          components: index === _this2.page ? components : null
        }));
      });
      this.components = components;
      return pages;
    }
  }, {
    key: "getComponents",
    value: function getComponents() {
      return this.submitting ? this.getPages({
        all: this.isLastPage()
      }) : _get(_getPrototypeOf(Wizard.prototype), "getComponents", this).call(this);
    }
  }, {
    key: "resetValue",
    value: function resetValue() {
      this.getPages({
        all: true
      }).forEach(function (page) {
        return page.resetValue();
      });
      this.setPristine(true);
    }
  }, {
    key: "init",
    value: function init() {
      // Check for and initlize button settings object
      this.options.buttonSettings = _lodash.default.defaults(this.options.buttonSettings, {
        showPrevious: true,
        showNext: true,
        showSubmit: true,
        showCancel: !this.options.readOnly
      });
      this.options.breadcrumbSettings = _lodash.default.defaults(this.options.breadcrumbSettings, {
        clickable: true
      });
      this.page = 0;
      return _get(_getPrototypeOf(Wizard.prototype), "init", this).call(this);
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderTemplate('wizard', {
        wizardKey: this.wizardKey,
        panels: this.panels,
        buttons: this.buttons,
        currentPage: this.page,
        components: this.renderComponents([].concat(_toConsumableArray(this.globalComponents), _toConsumableArray(this.pages[this.page])))
      }, this.builderMode ? 'builder' : 'form');
    }
  }, {
    key: "attach",
    value: function attach(element) {
      var _this$loadRefs,
          _this3 = this;

      this.element = element;
      this.loadRefs(element, (_this$loadRefs = {}, _defineProperty(_this$loadRefs, this.wizardKey, 'single'), _defineProperty(_this$loadRefs, "".concat(this.wizardKey, "-cancel"), 'single'), _defineProperty(_this$loadRefs, "".concat(this.wizardKey, "-previous"), 'single'), _defineProperty(_this$loadRefs, "".concat(this.wizardKey, "-next"), 'single'), _defineProperty(_this$loadRefs, "".concat(this.wizardKey, "-submit"), 'single'), _defineProperty(_this$loadRefs, "".concat(this.wizardKey, "-link"), 'multiple'), _this$loadRefs));
      var promises = this.attachComponents(this.refs[this.wizardKey], [].concat(_toConsumableArray(this.globalComponents), _toConsumableArray(this.pages[this.page])));
      [{
        name: 'cancel',
        method: 'cancel'
      }, {
        name: 'previous',
        method: 'prevPage'
      }, {
        name: 'next',
        method: 'nextPage'
      }, {
        name: 'submit',
        method: 'submit'
      }].forEach(function (button) {
        var buttonElement = _this3.refs["".concat(_this3.wizardKey, "-").concat(button.name)];

        if (!buttonElement) {
          return;
        }

        _this3.addEventListener(buttonElement, 'click', function (event) {
          event.preventDefault(); // Disable the button until done.

          buttonElement.setAttribute('disabled', 'disabled');

          _this3.setLoading(buttonElement, true); // Call the button method, then re-enable the button.


          _this3[button.method]().then(function () {
            buttonElement.removeAttribute('disabled');

            _this3.setLoading(buttonElement, false);
          }).catch(function () {
            buttonElement.removeAttribute('disabled');

            _this3.setLoading(buttonElement, false);
          });
        });
      });
      this.refs["".concat(this.wizardKey, "-link")].forEach(function (link, index) {
        _this3.addEventListener(link, 'click', function (event) {
          _this3.emit('wizardNavigationClicked', _this3.pages[index]);

          event.preventDefault();

          _this3.setPage(index);
        });
      });
      return promises;
    }
  }, {
    key: "addComponents",
    value: function addComponents() {
      var _this4 = this;

      this.pages = [];
      this.panels = [];

      _lodash.default.each(this.component.components, function (item) {
        var pageOptions = _lodash.default.clone(_this4.options);

        if (item.type === 'panel') {
          if ((0, _utils.checkCondition)(item, _this4.data, _this4.data, _this4.component, _this4)) {
            _this4.panels.push(item);

            var page = [];

            _lodash.default.each(item.components, function (comp) {
              var component = _this4.createComponent(comp, pageOptions);

              component.page = _this4.page;
              page.push(component);
            });

            _this4.pages.push(page);
          }
        } else if (item.type === 'hidden') {
          var component = _this4.createComponent(item, pageOptions);

          _this4.globalComponents.push(component);
        }
      });
    }
  }, {
    key: "setPage",
    value: function setPage(num) {
      if (num === this.page) {
        return _nativePromiseOnly.default.resolve();
      }

      if (!this.wizard.full && num >= 0 && num < this.pages.length) {
        this.page = num;

        if (!this._seenPages.includes(num)) {
          this._seenPages = this._seenPages.concat(num);
        }

        this.redraw();
        return _nativePromiseOnly.default.resolve();
      } else if (this.wizard.full || !this.pages.length) {
        this.redraw();
        return _nativePromiseOnly.default.resolve();
      }

      return _nativePromiseOnly.default.reject('Page not found');
    }
  }, {
    key: "getNextPage",
    value: function getNextPage() {
      var data = this.submission.data;
      var form = this.panels[this.page]; // Check conditional nextPage

      if (form) {
        var page = this.page + 1;

        if (form.nextPage) {
          var next = this.evaluate(form.nextPage, {
            next: page,
            data: data,
            page: page,
            form: form
          }, 'next');

          if (next === null) {
            this.currentNextPage = null;
            return null;
          }

          var pageNum = parseInt(next, 10);

          if (!isNaN(parseInt(pageNum, 10)) && isFinite(pageNum)) {
            this.currentNextPage = pageNum;
            return pageNum;
          }

          this.currentNextPage = this.getPageIndexByKey(next);
          return this.currentNextPage;
        }

        this.currentNextPage = page;
        return page;
      }

      this.currentNextPage = null;
      return null;
    }
  }, {
    key: "getPreviousPage",
    value: function getPreviousPage() {
      return Math.max(this.page - 1, 0);
    }
  }, {
    key: "beforeSubmit",
    value: function beforeSubmit() {
      return _nativePromiseOnly.default.all(this.getPages().map(function (page) {
        page.options.beforeSubmit = true;
        return page.beforeSubmit();
      }));
    }
  }, {
    key: "beforeNext",
    value: function beforeNext() {
      var _this5 = this;

      return new _nativePromiseOnly.default(function (resolve, reject) {
        _this5.hook('beforeNext', _this5.currentPage, _this5.submission, function (err) {
          if (err) {
            _this5.showErrors(err, true);

            reject(err);
          }

          var form = _this5.currentPage;

          if (form) {
            _nativePromiseOnly.default.all(form.map(function (comp) {
              return comp.beforeNext();
            })).then(resolve).catch(reject);
          } else {
            resolve();
          }
        });
      });
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      var _this6 = this;

      // Read-only forms should not worry about validation before going to next page, nor should they submit.
      if (this.options.readOnly) {
        return this.setPage(this.getNextPage()).then(function () {
          _this6.emit('nextPage', {
            page: _this6.page,
            submission: _this6.submission
          });
        });
      } // Validate the form builed, before go to the next page


      if (this.checkCurrentPageValidity(this.submission.data, true)) {
        this.checkData(this.submission.data);
        return this.beforeNext().then(function () {
          return _this6.setPage(_this6.getNextPage()).then(function () {
            _this6.emit('nextPage', {
              page: _this6.page,
              submission: _this6.submission
            });
          });
        });
      } else {
        return _nativePromiseOnly.default.reject(this.showErrors(null, true));
      }
    }
  }, {
    key: "prevPage",
    value: function prevPage() {
      var _this7 = this;

      var prevPage = this.getPreviousPage();
      return this.setPage(prevPage).then(function () {
        _this7.emit('prevPage', {
          page: _this7.page,
          submission: _this7.submission
        });
      });
    }
  }, {
    key: "cancel",
    value: function cancel(noconfirm) {
      if (_get(_getPrototypeOf(Wizard.prototype), "cancel", this).call(this, noconfirm)) {
        return this.setPage(0);
      } else {
        return this.setPage();
      }
    }
  }, {
    key: "getPageIndexByKey",
    value: function getPageIndexByKey(key) {
      var pageIndex = this.page;
      this.panels.forEach(function (page, index) {
        if (page.key === key) {
          pageIndex = index;
          return false;
        }
      });
      return pageIndex;
    }
  }, {
    key: "checkPageValidity",
    value: function checkPageValidity(data, dirty, page) {
      page = page || this.page;
      var check = true;
      this.pages[page].forEach(function (comp) {
        check &= comp.checkValidity(data, dirty);
      });
      return check;
    }
  }, {
    key: "setForm",
    value: function setForm(form) {
      if (!form) {
        return;
      }

      this.wizard = form;
      this.component.components = form.components || []; // Check if there are no panel components.

      if (this.component.components.filter(function (component) {
        return component.type === 'panel';
      }).length === 0) {
        this.component.components = [{
          type: 'panel',
          title: 'Page 1',
          label: 'Page 1',
          key: 'page1',
          components: this.component.components
        }];
      }

      return _get(_getPrototypeOf(Wizard.prototype), "setForm", this).call(this, form);
    }
  }, {
    key: "isClickable",
    value: function isClickable(page, index) {
      return this.page !== index && (0, _utils.firstNonNil)([_lodash.default.get(page, 'breadcrumbClickable'), this.options.breadcrumbSettings.clickable]);
    }
  }, {
    key: "hasButton",
    value: function hasButton(name, nextPage) {
      var currentPage = this.currentPage;

      if (name === 'previous') {
        var show = (0, _utils.firstNonNil)([_lodash.default.get(currentPage, 'buttonSettings.previous'), this.options.buttonSettings.showPrevious]);
        return this.page > 0 && show;
      }

      nextPage = nextPage === undefined ? this.getNextPage() : nextPage;

      if (name === 'next') {
        var _show = (0, _utils.firstNonNil)([_lodash.default.get(currentPage, 'buttonSettings.next'), this.options.buttonSettings.showNext]);

        return nextPage !== null && nextPage < this.pages.length && _show;
      }

      if (name === 'cancel') {
        return (0, _utils.firstNonNil)([_lodash.default.get(currentPage, 'buttonSettings.cancel'), this.options.buttonSettings.showCancel]);
      }

      if (name === 'submit') {
        var _show2 = (0, _utils.firstNonNil)([_lodash.default.get(currentPage, 'buttonSettings.submit'), this.options.buttonSettings.showSubmit]);

        return _show2 && !this.options.readOnly && (nextPage === null || this.page === this.pages.length - 1);
      }

      return true;
    }
  }, {
    key: "pageId",
    value: function pageId(page) {
      if (page.key) {
        // Some panels have the same key....
        return "".concat(page.key, "-").concat(page.title);
      } else if (page.components && page.components.length > 0) {
        return this.pageId(page.components[0]);
      } else {
        return page.title;
      }
    }
  }, {
    key: "calculateVisiblePanels",
    value: function calculateVisiblePanels() {
      var _this8 = this;

      var visible = [];

      _lodash.default.each(this.wizard.components, function (component) {
        if (component.type === 'panel') {
          // Ensure that this page can be seen.
          if ((0, _utils.checkCondition)(component, _this8.data, _this8.data, _this8.wizard, _this8)) {
            visible.push(component);
          }
        }
      });

      return visible;
    }
  }, {
    key: "onChange",
    value: function onChange(flags, changed) {
      _get(_getPrototypeOf(Wizard.prototype), "onChange", this).call(this, flags, changed); // Only rebuild if there is a page visibility change.


      var currentNextPage = this.currentNextPage;
      var nextPage = this.getNextPage();
      var panels = this.calculateVisiblePanels();

      if (nextPage !== currentNextPage || !_lodash.default.isEqual(panels.map(function (panel) {
        return panel.key;
      }), this.panels.map(function (panel) {
        return panel.key;
      }))) {
        // If visible panels changes we need to build this template again.
        this.rebuild();
      }
    }
  }, {
    key: "rebuild",
    value: function rebuild() {
      this.destroyComponents();
      this.addComponents();
      this.redraw();
    }
  }, {
    key: "checkCurrentPageValidity",
    value: function checkCurrentPageValidity() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = _get(_getPrototypeOf(Wizard.prototype), "checkValidity", this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: "checkPagesValidity",
    value: function checkPagesValidity(pages) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var isValid = _Component.default.prototype.checkValidity.apply(this, args);

      return pages.reduce(function (check, pageComp) {
        return pageComp.checkValidity.apply(pageComp, args) && check;
      }, isValid);
    }
  }, {
    key: "checkValidity",
    value: function checkValidity(data, dirty) {
      if (this.submitting) {
        return this.checkPagesValidity(this.getPages(), data, dirty);
      } else {
        return this.checkCurrentPageValidity(data, dirty);
      }
    }
  }, {
    key: "wizardKey",
    get: function get() {
      return "wizard-".concat(this.key);
    }
  }, {
    key: "form",
    get: function get() {
      return this.wizard;
    },
    set: function set(value) {
      _set(_getPrototypeOf(Wizard.prototype), "form", value, this, true);
    }
  }, {
    key: "buttons",
    get: function get() {
      var _this9 = this;

      var buttons = {};
      ['cancel', 'previous', 'next', 'submit'].forEach(function (button) {
        if (_this9.hasButton(button)) {
          buttons[button] = true;
        }
      });
      return buttons;
    }
  }, {
    key: "currentPage",
    get: function get() {
      return this.pages && this.pages.length >= this.page ? this.pages[this.page] : null;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.wizard;
    }
  }, {
    key: "errors",
    get: function get() {
      if (this.isLastPage()) {
        var pages = this.getPages({
          all: true
        });
        this.checkPagesValidity(pages, this.submission.data, true);
        return pages.reduce(function (errors, pageComp) {
          return errors.concat(pageComp.errors || []);
        }, []);
      }

      return _get(_getPrototypeOf(Wizard.prototype), "errors", this);
    }
  }]);

  return Wizard;
}(_Webform2.default);

exports.default = Wizard;
Wizard.setBaseUrl = _Formio.default.setBaseUrl;
Wizard.setApiUrl = _Formio.default.setApiUrl;
Wizard.setAppUrl = _Formio.default.setAppUrl;