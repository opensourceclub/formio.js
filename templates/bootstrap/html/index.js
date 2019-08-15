"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<{{tag}} class=\"{{ component.className }}\" ref=\"html\"\r\n  {% attrs.forEach(function(attr) { %}\r\n    {{attr.attr}}=\"{{attr.value}}\"\r\n  {% }) %}\r\n>{{content}}</{{tag}}>\r\n";
var _default = {
  form: form
};
exports.default = _default;