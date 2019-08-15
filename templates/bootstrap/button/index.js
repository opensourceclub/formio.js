"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<{{input.type}}\r\n  ref=\"button\"\r\n  {% for (var attr in input.attr) { %}\r\n  {{attr}}=\"{{input.attr[attr]}}\"\r\n  {% } %}\r\n>\r\n{% if (component.leftIcon) { %}<span class=\"{{component.leftIcon}}\"></span>&nbsp;{% } %}\r\n{{input.content}}\r\n{% if (component.tooltip) { %}\r\n  <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\r\n{% } %}\r\n{% if (component.rightIcon) { %}&nbsp;<span class=\"{{component.rightIcon}}\"></span>{% } %}\r\n</{{input.type}}>\r\n<div ref=\"buttonMessageContainer\">\r\n  <span class=\"help-block\" ref=\"buttonMessage\"></span>\r\n</div>\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;