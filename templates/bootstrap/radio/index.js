"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"form-radio radio\">\r\n  {% values.forEach(function(item) { %}\r\n  <div class=\"form-check{{inline ? '-inline' : ''}}\" ref=\"wrapper\">\r\n    <label class=\"form-check-label\" for=\"{{id}}{{row}}-{{item.value}}\">\r\n      {% if (component.optionsLabelPosition === 'left' || component.optionsLabelPosition === 'top') { %}\r\n      <span>{{t(item.label)}}</span>\r\n      {% } %}\r\n      <{{input.type}}\r\n        ref=\"input\"\r\n        {% for (var attr in input.attr) { %}\r\n        {{attr}}=\"{{input.attr[attr]}}\"\r\n        {% } %}\r\n        value=\"{{item.value}}\"\r\n        {% if (value && (value === item.value || (typeof value === 'object' && value.hasOwnProperty(item.value) && value[item.value]))) { %}\r\n          checked=true\r\n        {% } %}\r\n        id=\"{{id}}{{row}}-{{item.value}}\"\r\n      >\r\n      {% if (!component.optionsLabelPosition || component.optionsLabelPosition === 'right' || component.optionsLabelPosition === 'bottom') { %}\r\n      <span>{{t(item.label)}}</span>\r\n      {% } %}\r\n    </label>\r\n  </div>\r\n  {% }) %}\r\n</div>\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<div ref=\"value\">\r\n  {% var values = values.filter(function(item) {return value === item.value || (typeof value === 'object' && value.hasOwnProperty(item.value) && value[item.value])}).map(function(item) { return t(item.label)}).join(', ') %}\r\n  {{values}}\r\n  </div>\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;