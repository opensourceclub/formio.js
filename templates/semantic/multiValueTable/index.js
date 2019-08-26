"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<table class=\"ui celled table\">\n  <tbody>\n  {{rows}}\n  {% if (!disabled) { %}\n  <tr>\n    <td colspan=\"2\">\n      <button class=\"ui button primary\" ref=\"addButton\"><i class=\"{{iconClass('plus')}}\"></i> {{addAnother}}</button>\n    </td>\n  </tr>\n  {% } %}\n  </tbody>\n</table>\n";
var _default = {
  form: form
};
exports.default = _default;