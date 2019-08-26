"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"mb-2 card border\">\n  <div class=\"card-header {{transform('class', 'bg-' + component.theme)}}\">\n    <span class=\"mb-0 card-title\" ref=\"header\">\n      {% if (component.collapsible) { %}\n        <i class=\"formio-collapse-icon {{iconClass(collapsed ? 'plus-square-o' : 'minus-square-o')}} text-muted\" data-title=\"Collapse Panel\"></i>\n      {% } %}\n      {{t(component.title)}}\n      {% if (component.tooltip) { %}\n        <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\n      {% } %}\n    </span>\n  </div>\n  {% if (!collapsed || builder) { %}\n  <div class=\"card-body\" ref=\"{{nestedKey}}\">\n    {{children}}\n  </div>\n  {% } %}\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;