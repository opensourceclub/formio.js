"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<option {{ selected ? 'selected=\"selected\"' : '' }}\n  value=\"{{option.value}}\"\n  {% for (var attr in attrs) { %}\n  {{attr}}=\"{{attrs[attr]}}\"\n  {% } %}\n  >\n  {{t(option.label)}}\n</option>\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "{% if (selected) { %}{{t(option.label)}}{% } %}\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;