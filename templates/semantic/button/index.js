"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<{{input.type}} \n  ref=\"button\" \n  class=\"ui button {{transform('theme', component.theme)}} {{component.customClass}}\" \n  {% for (var attr in input.attr) { %}\n  {{attr}}=\"{{input.attr[attr]}}\"\n  {% } %}\n>\n{% if (component.leftIcon) { %}<i class=\"{{component.leftIcon}}\"></i>&nbsp;{% } %}\n{{input.content}}\n{% if (component.rightIcon) { %}&nbsp;<i class=\"{{component.rightIcon}}\"></i>{% } %}\n</{{input.type}}>\n<div ref=\"buttonMessageContainer\">\n  <span class=\"help-block\" ref=\"buttonMessage\"></span>\n</div>\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;