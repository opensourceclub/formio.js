"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"form-check checkbox\">\r\n  <label class=\"{{input.labelClass}} form-check-label\">\r\n    <{{input.type}}\r\n      ref=\"input\"\r\n      {% for (var attr in input.attr) { %}\r\n      {{attr}}=\"{{input.attr[attr]}}\"\r\n      {% } %}\r\n      {% if (checked) { %}checked=true{% } %}\r\n      >\r\n    {% if (!self.labelIsHidden()) { %}<span>{{input.label}}</span>{% } %}\r\n    {% if (component.tooltip) { %}\r\n      <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\r\n    {% } %}\r\n    {{input.content}}\r\n    </{{input.type}}>\r\n  </label>\r\n</div>\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<label class=\"{{input.labelClass}}\">\r\n    {{input.content}}\r\n    {% if (!self.labelIsHidden()) { %}<span>{{input.label}}</span>{% } %}\r\n</label>\r\n<div ref=\"value\">{% if (checked) { %}True{% } else { %}False{% } %}</div>\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;