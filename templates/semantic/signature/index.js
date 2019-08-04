"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{{element}}\n<div \n  class=\"signature-pad-body\" \n  style=\"width: {{component.width}};height: {{component.height}};padding:0;margin:0;\"\n  tabindex=\"{{component.tabindex || 0}}\"\n  ref=\"padBody\"\n>\n  \n  <a class=\"ui basic button mini icon signature-pad-refresh\" ref=\"refresh\">\n    <i class=\"{{iconClass('refresh')}}\"></i>\n  </a>\n  <canvas class=\"signature-pad-canvas\" height=\"{{component.height}}\" ref=\"canvas\"></canvas>\n  {% if (required) { %}\n  <span class=\"form-control-feedback field-required-inline text-danger\">\n    <i class=\"{{iconClass('asterisk')}}\"></i>\n  </span>\n  {% } %}\n  <img style=\"width: 100%;display: none;\" ref=\"signatureImage\">\n</div>\n{% if (component.footer) { %}\n  <div class=\"signature-pad-footer\">\n    {{t(component.footer)}}\n  </div>\n{% } %}\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<img style=\"width: 100%;\" ref=\"signatureImage\">\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;