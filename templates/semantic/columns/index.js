"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui grid\" style=\"width: 100%\">\r\n    {% component.columns.forEach(function(column, index) { %}\r\n    <div class=\"{{transform('columns', column.width)}} wide column\" ref=\"{{columnKey}}\">\r\n      {{columnComponents[index]}}\r\n    </div>\r\n    {% }) %}\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;