"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div id=\"builder-sidebar-{{id}}\" class=\"ui segments\" ref=\"sidebar\">\r\n  {% groups.forEach(function(group) { %}\r\n    {{ group }}\r\n  {% }) %}\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;