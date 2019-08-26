"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (component.prefix || component.suffix) { %}\n<div class=\"input-group\">\n{% } %}\n{% if (component.prefix) { %}\n<div class=\"input-group-prepend\" ref=\"prefix\">\n  <span class=\"input-group-text\">\n    {{component.prefix}}\n  </span>\n</div>\n{% } %}\n<{{input.type}}\n  ref=\"{{input.ref ? input.ref : 'input'}}\"\n  {% for (var attr in input.attr) { %}\n  {{attr}}=\"{{input.attr[attr]}}\"\n  {% } %}\n>{{input.content}}</{{input.type}}>\n{% if (component.showCharCount) { %}\n<span class=\"text-muted pull-right\" ref=\"charcount\"></span>\n{% } %}\n{% if (component.showWordCount) { %}\n<span class=\"text-muted pull-right\" ref=\"wordcount\"></span>\n{% } %}\n{% if (component.suffix) { %}\n<div class=\"input-group-append\" ref=\"suffix\">\n  <span class=\"input-group-text\">\n    {{component.suffix}}\n  </span>\n</div>\n{% } %}\n{% if (component.prefix || component.suffix) { %}\n</div>\n{% } %}\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<div ref=\"value\">{% if (value) { %}{{value}}{% } else { %}-{% } %}</div>\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;