"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (!label.hidden && label.labelPosition !== 'bottom') { %}\n  <label class=\"{{label.className}}\">\n    {% if (!label.hidden) { %}\n      {{ t(component.label) }}\n      {% if (tooltip) { %}\n        <span data-tooltip=\"{{tooltip}}\" data-position=\"right center\">\n          <i class=\"{{iconClass('question-sign')}}\"></i>\n        </span>\n      {% } %}\n    {% } %}\n  </label>\n{% } %}\n{{element}}\n{% if (!label.hidden && label.labelPosition === 'bottom') { %}\n  <label class=\"{{label.className}}\">\n  {{t(component.label)}}\n  {% if (tooltip) { %}\n    <span data-tooltip=\"{{tooltip}}\" data-position=\"right center\">\n      <i class=\"{{iconClass('question-sign')}}\"></i>\n    </span>\n  {% } %}\n  </label>\n{% } %}\n{% if (component.description) { %}\n  <div class=\"help-block\">{{t(component.description)}}</div>\n{% } %}\n";
var _default = {
  form: form
};
exports.default = _default;