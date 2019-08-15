"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<tr ref=\"row\">\r\n  <td>\r\n    {{element}}\r\n  </td>\r\n  {% if (!disabled) { %}\r\n  <td>\r\n    <button type=\"button\" class=\"btn btn-default\" ref=\"removeRow\">\r\n      <i class=\"{{iconClass('remove-circle')}}\"></i>\r\n    </button>\r\n  </td>\r\n  {% } %}\r\n</tr>\r\n";
var _default = {
  form: form
};
exports.default = _default;