"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"row\">\r\n  {% if (dayFirst && showDay) { %}\r\n  <div class=\"col col-xs-3\">\r\n    {% if (!component.hideInputLabels) { %}\r\n    <label for=\"{{component.key}}-day\" class=\"{% if(component.fields.day.required) { %}field-required{% } %}\">{{t('\u65E5\u671F')}}</label>\r\n    {% } %}\r\n    <div>{{day}}</div>\r\n  </div>\r\n  {% } %}\r\n  {% if (showYear) { %}\r\n  <div class=\"col col-xs-5\">\r\n    {% if (!component.hideInputLabels) { %}\r\n    <label for=\"{{component.key}}-year\" class=\"{% if(component.fields.year.required) { %}field-required{% } %}\">{{t('\u5E74')}}</label>\r\n    {% } %}\r\n    <div>{{year}}</div>\r\n  </div>\r\n  {% } %}\r\n  {% if (showMonth) { %}\r\n  <div class=\"col col-xs-4\">\r\n    {% if (!component.hideInputLabels) { %}\r\n    <label for=\"{{component.key}}-month\" class=\"{% if(component.fields.month.required) { %}field-required{% } %}\">{{t('\u6708')}}</label>\r\n    {% } %}\r\n    <div>{{month}}</div>\r\n  </div>\r\n  {% } %}\r\n  {% if (!dayFirst && showDay) { %}\r\n  <div class=\"col col-xs-3\">\r\n    {% if (!component.hideInputLabels) { %}\r\n    <label for=\"{{component.key}}-day\" class=\"{% if(component.fields.day.required) { %}field-required{% } %}\">{{t('\u65E5')}}</label>\r\n    {% } %}\r\n    <div>{{day}}</div>\r\n  </div>\r\n  {% } %}\r\n</div>\r\n<input name=\"data[day]\" type=\"hidden\" class=\"form-control\" lang=\"en\" value=\"\" ref=\"input\">\r\n";
var _default = {
  form: form
};
exports.default = _default;