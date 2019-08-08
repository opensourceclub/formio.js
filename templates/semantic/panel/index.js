"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<h4 class=\"ui top attached block header {{component.className}}\" ref=\"header\">\r\n  {% if (component.collapsible) { %}\r\n    <i class=\"formio-collapse-icon {{iconClass(collapsed ? 'plus-square-o' : 'minus-square-o')}} text-muted\" data-title=\"Collapse Panel\"></i>\r\n  {% } %}\r\n  {{t(component.title)}}\r\n  {% if (component.tooltip) { %}\r\n    <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\r\n  {% } %}\r\n</h4>\r\n{% if (!collapsed || builder) { %}\r\n<div class=\"ui bottom attached segment\" ref=\"{{nestedKey}}\">\r\n  {{children}}\r\n</div>\r\n{% } %}\r\n";
var _default = {
  form: form
};
exports.default = _default;