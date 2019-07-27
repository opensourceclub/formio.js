"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<select\n  ref=\"{{input.ref ? input.ref : 'selectContainer'}}\"\n  class=\"ui search dropdown\"\n  {{ input.multiple ? 'multiple' : '' }}\n  {% for (var attr in input.attr) { %}\n  {{attr}}=\"{{input.attr[attr]}}\"\n  {% } %}\n>{{selectOptions}}</select>\n<input type=\"text\"\n       class=\"formio-select-autocomplete-input\"\n       ref=\"autocompleteInput\"\n       {% if (input.attr.autocomplete) { %}\n       autocomplete=\"{{input.attr.autocomplete}}\"\n       {% } %}\n/>\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<div ref=\"value\">{% if (value) { %}{{ self.itemValue(value) }}{% } else { %}-{% } %}</div>\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;