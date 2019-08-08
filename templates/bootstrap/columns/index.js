"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% component.columns.forEach(function(column, index) { %}\r\n<div class=\"col \r\n    col-sm-{{column.width}}\r\n    col-sm-offset-{{column.offset}}\r\n    col-sm-push-{{column.push}}\r\n    col-sm-pull-{{column.pull}}\r\n  \" ref=\"{{columnKey}}\">\r\n  {{columnComponents[index]}}\r\n</div>\r\n{% }) %}\r\n";
var _default = {
  form: form
};
exports.default = _default;