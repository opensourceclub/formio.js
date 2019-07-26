"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui {{component.editor ? '' : 'input'}} fluid {{ component.suffix ? ' right' : '' }}{{ (component.prefix || component.suffix) ? ' labeled' : '' }}\">\n{% if (component.prefix) { %}\n<label class=\"ui label\" ref=\"prefix\">{{component.prefix}}</label>\n{% } %}\n<{{input.type}}\n  ref=\"{{input.ref ? input.ref : 'input'}}\"\n  {% for (var attr in input.attr) { %}\n  {{attr}}=\"{{input.attr[attr]}}\"\n  {% } %}\n>{{input.content}}</{{input.type}}>\n{% if (component.showCharCount) { %}\n<span class=\"ui right floated\" ref=\"charcount\"></span>\n{% } %}\n{% if (component.showWordCount) { %}\n<span class=\"ui right floated\" ref=\"wordcount\"></span>\n{% } %}\n{% if (component.suffix) { %}\n<div class=\"ui label\" ref=\"suffix\">{{component.suffix}}</div>\n{% } %}\n</div>\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<div ref=\"value\">{% if (value) { %}{{value}}{% } else { %}-{% } %}</div>\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;