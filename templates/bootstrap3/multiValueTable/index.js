"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<table class=\"table table-bordered\">\r\n  <tbody>\r\n  {{rows}}\r\n  {% if (!disabled) { %}\r\n  <tr>\r\n    <td colspan=\"2\">\r\n      <button class=\"btn btn-primary formio-button-add-another\" ref=\"addButton\"><i class=\"{{iconClass('plus')}}\"></i> {{addAnother}}</button>\r\n    </td>\r\n  </tr>\r\n  {% } %}\r\n  </tbody>\r\n</table>\r\n";
var _default = {
  form: form
};
exports.default = _default;