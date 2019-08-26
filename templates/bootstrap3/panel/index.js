"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"panel panel-{{component.theme}}\">\n  <div class=\"panel-heading\">\n    <h4 class=\"mb-0 panel-title\" ref=\"header\">\n      {% if (component.collapsible) { %}\n        <i class=\"formio-collapse-icon {{iconClass(collapsed ? 'plus' : 'minus')}} text-muted\" data-title=\"Collapse Panel\"></i>\n      {% } %}\n      {{t(component.title)}}\n      {% if (component.tooltip) { %}\n        <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\n      {% } %}\n    </h4>\n  </div>\n  {% if (!collapsed || builder) { %}\n  <div class=\"panel-body\" ref=\"{{nestedKey}}\">\n    {{children}}\n  </div>\n  {% } %}\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;