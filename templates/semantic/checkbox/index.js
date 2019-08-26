"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui checkbox\">\n  <{{input.type}}\n    ref=\"input\"\n    id=\"{{id}}\"\n    {% for (var attr in input.attr) { %}\n    {{attr}}=\"{{input.attr[attr]}}\"\n    {% } %}\n    {% if (checked) { %}checked=true{% } %}\n    >\n  </{{input.type}}>\n  <label class=\"{{input.labelClass}}\" for=\"{{id}}\">\n    {{input.content}}\n    {% if (!self.labelIsHidden()) { %}<span>{{input.label}}</span>{% } %}\n    {% if (tooltip) { %}\n      <span data-tooltip=\"{{tooltip}}\" data-position=\"right center\">\n          <i class=\"{{iconClass('question-sign')}}\"></i>\n      </span>\n    {% } %}\n  </label>\n</div>\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<label class=\"{{input.labelClass}}\">\n    {{input.content}}\n    {% if (!self.labelIsHidden()) { %}<span>{{input.label}}</span>{% } %}\n</label>\n<div ref=\"value\">{% if (checked) { %}True{% } else { %}False{% } %}</div>\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;