"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"row\">\n  {% if (dayFirst && showDay) { %}\n  <div class=\"col col-xs-3\">\n    {% if (!component.hideInputLabels) { %}\n    <label for=\"{{component.key}}-day\" class=\"{% if(component.fields.day.required) { %}field-required{% } %}\">{{t('\u65E5\u671F')}}</label>\n    {% } %}\n    <div>{{day}}</div>\n  </div>\n  {% } %}\n  {% if (showYear) { %}\n  <div class=\"col col-xs-5\">\n    {% if (!component.hideInputLabels) { %}\n    <label for=\"{{component.key}}-year\" class=\"{% if(component.fields.year.required) { %}field-required{% } %}\">{{t('\u5E74')}}</label>\n    {% } %}\n    <div>{{year}}</div>\n  </div>\n  {% } %}\n  {% if (showMonth) { %}\n  <div class=\"col col-xs-4\">\n    {% if (!component.hideInputLabels) { %}\n    <label for=\"{{component.key}}-month\" class=\"{% if(component.fields.month.required) { %}field-required{% } %}\">{{t('\u6708')}}</label>\n    {% } %}\n    <div>{{month}}</div>\n  </div>\n  {% } %}\n  {% if (!dayFirst && showDay) { %}\n  <div class=\"col col-xs-3\">\n    {% if (!component.hideInputLabels) { %}\n    <label for=\"{{component.key}}-day\" class=\"{% if(component.fields.day.required) { %}field-required{% } %}\">{{t('\u65E5')}}</label>\n    {% } %}\n    <div>{{day}}</div>\n  </div>\n  {% } %}\n</div>\n<input name=\"data[day]\" type=\"hidden\" class=\"form-control\" lang=\"en\" value=\"\" ref=\"input\">\n";
var _default = {
  form: form
};
exports.default = _default;