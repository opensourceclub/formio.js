"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<fieldset>\r\n  {% if (component.legend) { %}\r\n  <legend ref=\"header\" class=\"{{component.collapsible ? 'formio-clickable' : ''}}\">\r\n    {{t(component.legend)}}\r\n    {% if (component.tooltip) { %}\r\n      <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>\r\n    {% } %}\r\n  </legend>\r\n  {% } %}\r\n  {% if (!collapsed) { %}\r\n  <div class=\"fieldset-body\" ref=\"{{nestedKey}}\">\r\n    {{children}}\r\n  </div>\r\n  {% } %}\r\n</fieldset>\r\n";
var _default = {
  form: form
};
exports.default = _default;