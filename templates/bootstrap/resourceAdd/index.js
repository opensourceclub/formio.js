"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<table class=\"table table-bordered\">\r\n  <tbody>\r\n    <tr>\r\n      <td>\r\n        {{element}}\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"2\">\r\n        <button class=\"btn btn-primary formio-button-add-resource\" ref=\"addResource\">\r\n          <i class=\"{{iconClass('plus')}}\"></i>\r\n          {{t(component.addResourceLabel || 'Add Resource')}}\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
var _default = {
  form: form
};
exports.default = _default;