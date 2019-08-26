"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<{{tag}} class=\"{{ component.className }}\" ref=\"html\"\n  {% attrs.forEach(function(attr) { %}\n    {{attr.attr}}=\"{{attr.value}}\"\n  {% }) %}\n>{{content}}</{{tag}}>\n";
var _default = {
  form: form
};
exports.default = _default;