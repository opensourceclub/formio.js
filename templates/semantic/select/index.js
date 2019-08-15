"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<select\r\n  ref=\"{{input.ref ? input.ref : 'selectContainer'}}\"\r\n  class=\"ui search dropdown\"\r\n  {{ input.multiple ? 'multiple' : '' }}\r\n  {% for (var attr in input.attr) { %}\r\n  {{attr}}=\"{{input.attr[attr]}}\"\r\n  {% } %}\r\n>{{selectOptions}}</select>\r\n<input type=\"text\"\r\n       class=\"formio-select-autocomplete-input\"\r\n       ref=\"autocompleteInput\"\r\n       {% if (input.attr.autocomplete) { %}\r\n       autocomplete=\"{{input.attr.autocomplete}}\"\r\n       {% } %}\r\n/>\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<div ref=\"value\">{% if (value) { %}{{ self.itemValue(value) }}{% } else { %}-{% } %}</div>\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;