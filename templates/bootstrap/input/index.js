"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (component.prefix || component.suffix) { %}\r\n<div class=\"input-group\">\r\n{% } %}\r\n{% if (component.prefix) { %}\r\n<div class=\"input-group-prepend\" ref=\"prefix\">\r\n  <span class=\"input-group-text\">\r\n    {{component.prefix}}\r\n  </span>\r\n</div>\r\n{% } %}\r\n<{{input.type}}\r\n  ref=\"{{input.ref ? input.ref : 'input'}}\"\r\n  {% for (var attr in input.attr) { %}\r\n  {{attr}}=\"{{input.attr[attr]}}\"\r\n  {% } %}\r\n>{{input.content}}</{{input.type}}>\r\n{% if (component.showCharCount) { %}\r\n<span class=\"text-muted pull-right\" ref=\"charcount\"></span>\r\n{% } %}\r\n{% if (component.showWordCount) { %}\r\n<span class=\"text-muted pull-right\" ref=\"wordcount\"></span>\r\n{% } %}\r\n{% if (component.suffix) { %}\r\n<div class=\"input-group-append\" ref=\"suffix\">\r\n  <span class=\"input-group-text\">\r\n    {{component.suffix}}\r\n  </span>\r\n</div>\r\n{% } %}\r\n{% if (component.prefix || component.suffix) { %}\r\n</div>\r\n{% } %}\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<div ref=\"value\">{% if (value) { %}{{value}}{% } else { %}-{% } %}</div>\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;