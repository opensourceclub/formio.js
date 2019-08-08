"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './flat.hbs' */
var flat = "{% component.components.forEach(function(tab, index) { %}\r\n  <h4 class=\"ui top attached block header\">{{ t(tab.label) }}</h4>\r\n  <div class=\"ui bottom attached segment\">\r\n    {{ tabComponents[index] }}\r\n  </div>\r\n{% }) %}\r\n";

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui top attached tabular menu\">\r\n  {% component.components.forEach(function(tab, index) { %}\r\n  <a class=\"item{{ currentTab === index ? ' active' : ''}}\" role=\"presentation\" ref=\"{{tabLinkKey}}\">{{t(tab.label)}}</a>\r\n  {% }) %}\r\n</div>\r\n{% component.components.forEach(function(tab, index) { %}\r\n<div role=\"tabpanel\" class=\"ui bottom attached tab segment{{ currentTab === index ? ' active' : ''}}\" ref=\"{{tabKey}}\"\">{{tabComponents[index]}}</div>\r\n{% }) %}\r\n";
var _default = {
  flat: flat,
  form: form
};
exports.default = _default;