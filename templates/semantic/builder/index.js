"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"formio builder ui grid formbuilder\">\n  <div class=\"four wide column formcomponents\">\n    {{sidebar}}\n  </div>\n  <div class=\"twelve wide column formarea\" ref=\"form\">\n    {{form}}\n  </div>\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;