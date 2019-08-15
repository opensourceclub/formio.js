"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"mb-2 card border\">\r\n  <div class=\"card-header {{transform('class', 'bg-' + component.theme)}}\">\r\n    <span class=\"mb-0 card-title\" ref=\"header\">\r\n      {% if (component.collapsible) { %}\r\n        <i class=\"formio-collapse-icon {{iconClass(collapsed ? 'plus-square-o' : 'minus-square-o')}} text-muted\" data-title=\"Collapse Panel\"></i>\r\n      {% } %}\r\n      {{t(component.title)}}\r\n      {% if (component.tooltip) { %}\r\n        <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\r\n      {% } %}\r\n    </span>\r\n  </div>\r\n  {% if (!collapsed || builder) { %}\r\n  <div class=\"card-body\" ref=\"{{nestedKey}}\">\r\n    {{children}}\r\n  </div>\r\n  {% } %}\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;