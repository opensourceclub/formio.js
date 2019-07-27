"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<tr ref=\"row\">\n  <td>\n    {{element}}\n  </td>\n  {% if (!disabled) { %}\n  <td>\n    <button type=\"button\" class=\"ui icon button secondary\" ref=\"removeRow\">\n      <i class=\"trash icon\"></i>\n    </button>\n  </td>\n  {% } %}\n</tr>\n";
var _default = {
  form: form
};
exports.default = _default;