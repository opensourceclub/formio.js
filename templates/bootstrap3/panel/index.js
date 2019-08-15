"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"panel panel-{{component.theme}}\">\r\n  <div class=\"panel-heading\">\r\n    <h4 class=\"mb-0 panel-title\" ref=\"header\">\r\n      {% if (component.collapsible) { %}\r\n        <i class=\"formio-collapse-icon {{iconClass(collapsed ? 'plus' : 'minus')}} text-muted\" data-title=\"Collapse Panel\"></i>\r\n      {% } %}\r\n      {{t(component.title)}}\r\n      {% if (component.tooltip) { %}\r\n        <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\r\n      {% } %}\r\n    </h4>\r\n  </div>\r\n  {% if (!collapsed || builder) { %}\r\n  <div class=\"panel-body\" ref=\"{{nestedKey}}\">\r\n    {{children}}\r\n  </div>\r\n  {% } %}\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;