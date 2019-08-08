"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (!label.hidden && label.labelPosition !== 'bottom') { %}\r\n  <label class=\"control-label {{label.className}}\">\r\n    {% if (!label.hidden) { %}\r\n      {{ t(component.label) }}\r\n      {% if (component.tooltip) { %}\r\n        <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\r\n      {% } %}\r\n    {% } %}\r\n  </label>\r\n{% } %}\r\n{{element}}\r\n{% if (!label.hidden && label.labelPosition === 'bottom') { %}\r\n  <label class=\"control-label {{label.className}}\">\r\n  {{t(component.label)}}\r\n  {% if (component.tooltip) { %}\r\n    <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\r\n  {% } %}\r\n  </label>\r\n{% } %}\r\n{% if (component.description) { %}\r\n  <div class=\"help-block\">{{t(component.description)}}</div>\r\n{% } %}\r\n";
var _default = {
  form: form
};
exports.default = _default;