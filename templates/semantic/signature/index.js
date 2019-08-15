"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{{element}}\r\n<div \r\n  class=\"signature-pad-body\" \r\n  style=\"width: {{component.width}};height: {{component.height}};padding:0;margin:0;\"\r\n  tabindex=\"{{component.tabindex || 0}}\"\r\n  ref=\"padBody\"\r\n>\r\n  \r\n  <a class=\"ui basic button mini icon signature-pad-refresh\" ref=\"refresh\">\r\n    <i class=\"{{iconClass('refresh')}}\"></i>\r\n  </a>\r\n  <canvas class=\"signature-pad-canvas\" height=\"{{component.height}}\" ref=\"canvas\"></canvas>\r\n  {% if (required) { %}\r\n  <span class=\"form-control-feedback field-required-inline text-danger\">\r\n    <i class=\"{{iconClass('asterisk')}}\"></i>\r\n  </span>\r\n  {% } %}\r\n  <img style=\"width: 100%;display: none;\" ref=\"signatureImage\">\r\n</div>\r\n{% if (component.footer) { %}\r\n  <div class=\"signature-pad-footer\">\r\n    {{t(component.footer)}}\r\n  </div>\r\n{% } %}\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<img style=\"width: 100%;\" ref=\"signatureImage\">\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;