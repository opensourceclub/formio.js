"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div id=\"{{groupId}}\" class=\"accordion builder-sidebar{{scrollEnabled ? ' builder-sidebar_scroll' : ''}}\" ref=\"sidebar\">\r\n  {% groups.forEach(function(group) { %}\r\n  {{ group }}\r\n  {% }) %}\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;