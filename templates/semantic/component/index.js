"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div id=\"{{id}}\" class=\"field {{classes}}\"{% if (styles) { %} styles=\"{{styles}}\"{% } %} ref=\"component\">\r\n  {% if (visible) { %}\r\n  {{children}}\r\n  <div ref=\"messageContainer\"></div>\r\n  {% } %}\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;