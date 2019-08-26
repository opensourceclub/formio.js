"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"fields {{inline ? 'inline' : 'grouped'}}\">\n  {% values.forEach(function(item) { %}\n  <div class=\"field\">\n    <div class=\"ui {{input.attr.type==='radio' ? 'radio' : ''}} checkbox\" ref=\"wrapper\">\n      <{{input.type}} \n        ref=\"input\" \n        {% for (var attr in input.attr) { %}\n        {{attr}}=\"{{input.attr[attr]}}\"\n        {% } %}\n        value=\"{{item.value}}\"\n        {% if (value === item.value || (typeof value === 'object' && value.hasOwnProperty(item.value) && value[item.value])) { %}\n          checked=true\n        {% } %}\n        id=\"{{id}}{{row}}-{{item.value}}\" \n      >\n      <label class=\"\" for=\"{{id}}{{row}}-{{item.value}}\">\n        <span>{{t(item.label)}}</span>\n      </label>\n    </div>\n  </div>\n  {% }) %}\n</div>\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<div ref=\"value\">\n  {% var values = values.filter(function(item) {return value === item.value || (typeof value === 'object' && value.hasOwnProperty(item.value) && value[item.value])}).map(function(item) { return t(item.label)}).join(', ') %}\n  {{values}}\n  </div>\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;