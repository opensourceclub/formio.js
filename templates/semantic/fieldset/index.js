"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<fieldset>\n  <legend ref=\"header\" class=\"{{component.collapsible ? 'formio-clickable' : ''}}\">\n    {{t(component.legend)}}\n    {% if (component.tooltip) { %}\n      <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}}\"></i>\n    {% } %}\n  </legend>  {% if (!collapsed) { %}\n  <div class=\"card-body\" ref=\"{{nestedKey}}\">\n    {{children}}\n  </div>\n  {% } %}\n</fieldset>\n";
var _default = {
  form: form
};
exports.default = _default;