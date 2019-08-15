"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui {{component.editor ? '' : 'input'}} fluid {{ component.suffix ? ' right' : '' }}{{ (component.prefix || component.suffix) ? ' labeled' : '' }}\">\r\n{% if (component.prefix) { %}\r\n<label class=\"ui label\" ref=\"prefix\">{{component.prefix}}</label>\r\n{% } %}\r\n<{{input.type}}\r\n  ref=\"{{input.ref ? input.ref : 'input'}}\"\r\n  {% for (var attr in input.attr) { %}\r\n  {{attr}}=\"{{input.attr[attr]}}\"\r\n  {% } %}\r\n>{{input.content}}</{{input.type}}>\r\n{% if (component.showCharCount) { %}\r\n<span class=\"ui right floated\" ref=\"charcount\"></span>\r\n{% } %}\r\n{% if (component.showWordCount) { %}\r\n<span class=\"ui right floated\" ref=\"wordcount\"></span>\r\n{% } %}\r\n{% if (component.suffix) { %}\r\n<div class=\"ui label\" ref=\"suffix\">{{component.suffix}}</div>\r\n{% } %}\r\n</div>\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<div ref=\"value\">{% if (value) { %}{{value}}{% } else { %}-{% } %}</div>\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;