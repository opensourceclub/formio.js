"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<table class=\"ui table celled\">\n  <tbody>\n    <tr>\n      <td>\n        {{element}}\n      </td>\n    </tr>\n    <tr>\n      <td colspan=\"2\">\n        <button class=\"ui button primary\" ref=\"addResource\">\n          <i class=\"{{iconClass('plus')}}\"></i>\n          {{t(component.addResourceLabel || 'Add Resource')}}\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n";
var _default = {
  form: form
};
exports.default = _default;