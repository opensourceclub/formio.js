"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% component.columns.forEach(function(column, index) { %}\n<div class=\"col \n    col-sm-{{column.width}}\n    col-sm-offset-{{column.offset}}\n    col-sm-push-{{column.push}}\n    col-sm-pull-{{column.pull}}\n  \" ref=\"{{columnKey}}\">\n  {{columnComponents[index]}}\n</div>\n{% }) %}\n";
var _default = {
  form: form
};
exports.default = _default;