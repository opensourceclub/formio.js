"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui checkbox\">\r\n  <{{input.type}}\r\n    ref=\"input\"\r\n    id=\"{{id}}\"\r\n    {% for (var attr in input.attr) { %}\r\n    {{attr}}=\"{{input.attr[attr]}}\"\r\n    {% } %}\r\n    {% if (checked) { %}checked=true{% } %}\r\n    >\r\n  </{{input.type}}>\r\n  <label class=\"{{input.labelClass}}\" for=\"{{id}}\">\r\n    {{input.content}}\r\n    {% if (!self.labelIsHidden()) { %}<span>{{input.label}}</span>{% } %}\r\n    {% if (tooltip) { %}\r\n      <span data-tooltip=\"{{tooltip}}\" data-position=\"right center\">\r\n          <i class=\"{{iconClass('question-sign')}}\"></i>\r\n      </span>\r\n    {% } %}\r\n  </label>\r\n</div>\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<label class=\"{{input.labelClass}}\">\r\n    {{input.content}}\r\n    {% if (!self.labelIsHidden()) { %}<span>{{input.label}}</span>{% } %}\r\n</label>\r\n<div ref=\"value\">{% if (checked) { %}True{% } else { %}False{% } %}</div>\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;