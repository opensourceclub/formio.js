"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<option {{ selected ? 'selected=\"selected\"' : '' }}\r\n  value=\"{{option.value}}\"\r\n  {% for (var attr in attrs) { %}\r\n  {{attr}}=\"{{attrs[attr]}}\"\r\n  {% } %}\r\n  >\r\n  {{t(option.label)}}\r\n</option>\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "{% if (selected) { %}{{t(option.label)}}{% } %}\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;