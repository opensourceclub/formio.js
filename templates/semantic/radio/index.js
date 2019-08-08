"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"fields {{inline ? 'inline' : 'grouped'}}\">\r\n  {% values.forEach(function(item) { %}\r\n  <div class=\"field\">\r\n    <div class=\"ui {{input.attr.type==='radio' ? 'radio' : ''}} checkbox\" ref=\"wrapper\">\r\n      <{{input.type}} \r\n        ref=\"input\" \r\n        {% for (var attr in input.attr) { %}\r\n        {{attr}}=\"{{input.attr[attr]}}\"\r\n        {% } %}\r\n        value=\"{{item.value}}\"\r\n        {% if (value === item.value || (typeof value === 'object' && value.hasOwnProperty(item.value) && value[item.value])) { %}\r\n          checked=true\r\n        {% } %}\r\n        id=\"{{id}}{{row}}-{{item.value}}\" \r\n      >\r\n      <label class=\"\" for=\"{{id}}{{row}}-{{item.value}}\">\r\n        <span>{{t(item.label)}}</span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  {% }) %}\r\n</div>\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<div ref=\"value\">\r\n  {% var values = values.filter(function(item) {return value === item.value || (typeof value === 'object' && value.hasOwnProperty(item.value) && value[item.value])}).map(function(item) { return t(item.label)}).join(', ') %}\r\n  {{values}}\r\n  </div>\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;