"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"form-check checkbox\">\n  <label class=\"{{input.labelClass}} form-check-label\">\n    <{{input.type}}\n      ref=\"input\"\n      {% for (var attr in input.attr) { %}\n      {{attr}}=\"{{input.attr[attr]}}\"\n      {% } %}\n      {% if (checked) { %}checked=true{% } %}\n      >\n    {% if (!self.labelIsHidden()) { %}<span>{{input.label}}</span>{% } %}\n    {% if (component.tooltip) { %}\n      <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\n    {% } %}\n    {{input.content}}\n    </{{input.type}}>\n  </label>\n</div>\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<label class=\"{{input.labelClass}}\">\n    {{input.content}}\n    {% if (!self.labelIsHidden()) { %}<span>{{input.label}}</span>{% } %}\n</label>\n<div ref=\"value\">{% if (checked) { %}True{% } else { %}False{% } %}</div>\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;