"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<table class=\"ui celled table\">\r\n  <tbody>\r\n  {{rows}}\r\n  {% if (!disabled) { %}\r\n  <tr>\r\n    <td colspan=\"2\">\r\n      <button class=\"ui button primary\" ref=\"addButton\"><i class=\"{{iconClass('plus')}}\"></i> {{addAnother}}</button>\r\n    </td>\r\n  </tr>\r\n  {% } %}\r\n  </tbody>\r\n</table>\r\n";
var _default = {
  form: form
};
exports.default = _default;