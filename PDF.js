"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Formio = _interopRequireDefault(require("./Formio"));

var _Webform2 = _interopRequireDefault(require("./Webform"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PDF =
/*#__PURE__*/
function (_Webform) {
  _inherits(PDF, _Webform);

  function PDF(element, options) {
    var _this;

    _classCallCheck(this, PDF);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PDF).call(this, element, options));

    _this.refreshIframeReadyPromise();

    _this.components = [];
    return _this;
  }

  _createClass(PDF, [{
    key: "refreshIframeReadyPromise",
    value: function refreshIframeReadyPromise() {
      var _this2 = this;

      if (this.iframeReadyReject) {
        this.iframeReady = this.iframeReady.catch(function () {
          return;
        });
        this.iframeReadyReject();
      } // Resolve when the iframe is ready.


      this.iframeReady = new _nativePromiseOnly.default(function (resolve, reject) {
        _this2.iframeReadyResolve = resolve;
        _this2.iframeReadyReject = reject;
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      _get(_getPrototypeOf(PDF.prototype), "init", this).call(this); // Handle an iframe submission.


      this.on('iframe-submission', function (submission) {
        _this3.setSubmission(submission).then(function () {
          return _this3.submit();
        });
      }, true); // Trigger when this form is ready.

      this.on('iframe-ready', function () {
        return _this3.iframeReadyResolve();
      }, true);
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderTemplate('pdf', {
        classes: 'formio-form-pdf',
        children: this.renderComponents()
      });
    }
  }, {
    key: "redraw",
    value: function redraw() {
      return _get(_getPrototypeOf(PDF.prototype), "redraw", this).call(this);
    }
  }, {
    key: "attach",
    value: function attach(element) {
      var _this4 = this;

      return _get(_getPrototypeOf(PDF.prototype), "attach", this).call(this, element).then(function () {
        _this4.loadRefs(element, {
          submitButton: 'single',
          iframeContainer: 'single'
        }); // iframes cannot be in the template so manually create it


        _this4.iframeElement = _this4.iframeElement || _this4.ce('iframe', {
          src: _this4.getSrc(),
          id: "iframe-".concat(_this4.id),
          seamless: true,
          class: 'formio-iframe'
        });

        _this4.refreshIframeReadyPromise();

        _this4.iframeElement.formioContainer = _this4.component.components;
        _this4.iframeElement.formioComponent = _this4; // Append the iframe to the iframeContainer in the template

        _this4.appendChild(_this4.refs.iframeContainer, _this4.iframeElement); // Post the form to the iframe


        _this4.postMessage({
          name: 'form',
          data: _this4.form
        });

        _this4.addEventListener(_this4.refs.submitButton, 'click', function () {
          _this4.postMessage({
            name: 'getSubmission'
          });
        });

        var form = _lodash.default.cloneDeep(_this4.form);

        if (_this4.formio) {
          form.projectUrl = _this4.formio.projectUrl;
          form.url = _this4.formio.formUrl;
          form.base = _this4.formio.base;

          _this4.postMessage({
            name: 'token',
            data: _this4.formio.getToken()
          });
        }

        _this4.emit('attach');
      });
    }
  }, {
    key: "detach",
    value: function detach() {
      this.removeEventListener(this.refs.submitButton, 'click');

      var result = _get(_getPrototypeOf(PDF.prototype), "detach", this).call(this);

      return result;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.off('iframe-submission');
      this.off('iframe-ready');

      var result = _get(_getPrototypeOf(PDF.prototype), "destroy", this).call(this);

      return result;
    }
  }, {
    key: "getSrc",
    value: function getSrc() {
      if (!this._form || !this._form.settings || !this._form.settings.pdf) {
        return '';
      }

      var iframeSrc = "".concat(this._form.settings.pdf.src, ".html");
      var params = ["id=".concat(this.id)];

      if (this.options.readOnly) {
        params.push('readonly=1');
      }

      if (this.options.zoom) {
        params.push("zoom=".concat(this.options.zoom));
      }

      if (this.builderMode) {
        params.push('builder=1');
      }

      if (params.length) {
        iframeSrc += "?".concat(params.join('&'));
      }

      return iframeSrc;
    }
  }, {
    key: "setForm",
    value: function setForm(form) {
      var _this5 = this;

      return _get(_getPrototypeOf(PDF.prototype), "setForm", this).call(this, form).then(function () {
        if (_this5.formio) {
          form.projectUrl = _this5.formio.projectUrl;
          form.url = _this5.formio.formUrl;
          form.base = _this5.formio.base;

          _this5.postMessage({
            name: 'token',
            data: _this5.formio.getToken()
          });
        }

        _this5.postMessage({
          name: 'form',
          data: form
        });
      });
    }
  }, {
    key: "setSubmission",
    value: function setSubmission(submission) {
      var _this6 = this;

      submission.readOnly = !!this.options.readOnly;
      return _get(_getPrototypeOf(PDF.prototype), "setSubmission", this).call(this, submission).then(function () {
        if (_this6.formio) {
          _this6.formio.getDownloadUrl().then(function (url) {
            // Add a download button if it has a download url.
            if (!url) {
              return;
            }

            if (!_this6.downloadButton) {
              if (_this6.options.primaryProject) {
                url += "&project=".concat(_this6.options.primaryProject);
              }

              _this6.downloadButton = _this6.ce('a', {
                href: url,
                target: '_blank',
                style: 'position:absolute;right:10px;top:110px;cursor:pointer;'
              }, _this6.ce('img', {
                src: require('./pdf.image'),
                style: 'width:3em;'
              }));

              _this6.element.insertBefore(_this6.downloadButton, _this6.iframe);
            }
          });
        }

        _this6.postMessage({
          name: 'submission',
          data: submission
        });
      });
    }
  }, {
    key: "postMessage",
    value: function postMessage(message) {
      var _this7 = this;

      // If we get here before the iframeReady promise is set up, it's via the superclass constructor
      if (!this.iframeReady) {
        return;
      }

      if (!message.type) {
        message.type = 'iframe-data';
      }

      this.iframeReady = this.iframeReady.then(function () {
        if (_this7.iframeElement && _this7.iframeElement.contentWindow) {
          _this7.iframeElement.contentWindow.postMessage(JSON.stringify(message), '*');
        }
      });
    } // Do not clear the iframe.

  }, {
    key: "clear",
    value: function clear() {}
  }]);

  return PDF;
}(_Webform2.default);
/**
 * Listen for window messages.
 */


exports.default = PDF;
window.addEventListener('message', function (event) {
  var eventData = null;

  try {
    eventData = JSON.parse(event.data);
  } catch (err) {
    eventData = null;
  } // If this form exists, then emit the event within this form.


  if (eventData && eventData.name && eventData.formId && _Formio.default.forms.hasOwnProperty(eventData.formId)) {
    _Formio.default.forms[eventData.formId].emit("iframe-".concat(eventData.name), eventData.data);
  }
});