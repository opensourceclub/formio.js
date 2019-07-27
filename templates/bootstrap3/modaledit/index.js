"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div ref=\"container\" class=\"formio-modaledit-view-container\">\n  <button\n    ref=\"edit\"\n    type=\"button\"\n    role=\"button\"\n    class=\"btn btn-xxs btn-warning formio-modaledit-edit\">\n    <i class=\"{{iconClass('edit')}}\"></i>\n  </button>\n  <div ref=\"input\" class=\"modaledit-view-inner reset-margins\">{{content}}</div>\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;