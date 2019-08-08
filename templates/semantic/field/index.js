"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (!label.hidden && label.labelPosition !== 'bottom') { %}\r\n  <label class=\"{{label.className}}\">\r\n    {% if (!label.hidden) { %}\r\n      {{ t(component.label) }}\r\n      {% if (tooltip) { %}\r\n        <span data-tooltip=\"{{tooltip}}\" data-position=\"right center\">\r\n          <i class=\"{{iconClass('question-sign')}}\"></i>\r\n        </span>\r\n      {% } %}\r\n    {% } %}\r\n  </label>\r\n{% } %}\r\n{{element}}\r\n{% if (!label.hidden && label.labelPosition === 'bottom') { %}\r\n  <label class=\"{{label.className}}\">\r\n  {{t(component.label)}}\r\n  {% if (tooltip) { %}\r\n    <span data-tooltip=\"{{tooltip}}\" data-position=\"right center\">\r\n      <i class=\"{{iconClass('question-sign')}}\"></i>\r\n    </span>\r\n  {% } %}\r\n  </label>\r\n{% } %}\r\n{% if (component.description) { %}\r\n  <div class=\"help-block\">{{t(component.description)}}</div>\r\n{% } %}\r\n";
var _default = {
  form: form
};
exports.default = _default;