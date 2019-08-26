"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (!label.hidden && label.labelPosition !== 'bottom') { %}\n  <label class=\"col-form-label {{label.className}}\">\n    {{ t(component.label) }}\n    {% if (component.tooltip) { %}\n      <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\n    {% } %}\n  </label>\n{% } %}\n{{element}}\n{% if (!label.hidden && label.labelPosition === 'bottom') { %}\n  <label class=\"{{label.className}}\">{{t(component.label)}}\n  {% if (component.tooltip) { %}\n    <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\n  {% } %}\n  </label>\n{% } %}\n{% if (component.description) { %}\n  <div class=\"form-text text-muted\">{{t(component.description)}}</div>\n{% } %}\n";
var _default = {
  form: form
};
exports.default = _default;