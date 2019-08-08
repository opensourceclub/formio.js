"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div ref=\"container\" class=\"formio-modaledit-view-container\">\r\n  <button\r\n    ref=\"edit\"\r\n    type=\"button\"\r\n    role=\"button\"\r\n    class=\"btn btn-xxs btn-warning formio-modaledit-edit\">\r\n    <i class=\"{{iconClass('edit')}}\"></i>\r\n  </button>\r\n  <div ref=\"input\" class=\"modaledit-view-inner reset-margins\">{{content}}</div>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;