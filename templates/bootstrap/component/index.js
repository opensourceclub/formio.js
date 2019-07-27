"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div id=\"{{id}}\" class=\"{{classes}} form-group\"{% if (styles) { %} styles=\"{{styles}}\"{% } %} ref=\"component\">\n  {% if (visible) { %}\n  {{children}}\n  <div ref=\"messageContainer\" class=\"formio-errors invalid-feedback\"></div>\n  {% } %}\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;