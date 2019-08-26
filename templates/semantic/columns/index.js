"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui grid\" style=\"width: 100%\">\n    {% component.columns.forEach(function(column, index) { %}\n    <div class=\"{{transform('columns', column.width)}} wide column\" ref=\"{{columnKey}}\">\n      {{columnComponents[index]}}\n    </div>\n    {% }) %}\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;