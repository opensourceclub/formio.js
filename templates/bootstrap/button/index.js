"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<{{input.type}}\n  ref=\"button\"\n  {% for (var attr in input.attr) { %}\n  {{attr}}=\"{{input.attr[attr]}}\"\n  {% } %}\n>\n{% if (component.leftIcon) { %}<span class=\"{{component.leftIcon}}\"></span>&nbsp;{% } %}\n{{input.content}}\n{% if (component.tooltip) { %}\n  <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\n{% } %}\n{% if (component.rightIcon) { %}&nbsp;<span class=\"{{component.rightIcon}}\"></span>{% } %}\n</{{input.type}}>\n<div ref=\"buttonMessageContainer\">\n  <span class=\"help-block\" ref=\"buttonMessage\"></span>\n</div>\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;