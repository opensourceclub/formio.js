"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"formio builder ui grid formbuilder\">\r\n  <div class=\"four wide column formcomponents\">\r\n    {{sidebar}}\r\n  </div>\r\n  <div class=\"twelve wide column formarea\" ref=\"form\">\r\n    {{form}}\r\n  </div>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;