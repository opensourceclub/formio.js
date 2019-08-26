"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<h4 class=\"ui top attached block header {{component.className}}\" ref=\"header\">\n  {% if (component.collapsible) { %}\n    <i class=\"formio-collapse-icon {{iconClass(collapsed ? 'plus-square-o' : 'minus-square-o')}} text-muted\" data-title=\"Collapse Panel\"></i>\n  {% } %}\n  {{t(component.title)}}\n  {% if (component.tooltip) { %}\n    <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\n  {% } %}\n</h4>\n{% if (!collapsed || builder) { %}\n<div class=\"ui bottom attached segment\" ref=\"{{nestedKey}}\">\n  {{children}}\n</div>\n{% } %}\n";
var _default = {
  form: form
};
exports.default = _default;