"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"formio-dialog formio-dialog-theme-default formio-modaledit-dialog\">\r\n  <div ref=\"overlay\" class=\"formio-dialog-overlay\"></div>\r\n  <div ref=\"content\" class=\"formio-modaledit-content\">\r\n    <button\r\n      ref=\"close\"\r\n      type=\"button\"\r\n      role=\"button\"\r\n      class=\"btn btn-primary btn-xs formio-modaledit-close\">\r\n      {{t('Close')}}\r\n    </button>\r\n    <div ref=\"inner\" class=\"reset-margins\"></div>\r\n  </div>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;