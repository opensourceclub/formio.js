"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './flat.hbs' */
var flat = "{% component.components.forEach(function(tab, index) { %}\n  <h4 class=\"ui top attached block header\">{{ t(tab.label) }}</h4>\n  <div class=\"ui bottom attached segment\">\n    {{ tabComponents[index] }}\n  </div>\n{% }) %}\n";

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui top attached tabular menu\">\n  {% component.components.forEach(function(tab, index) { %}\n  <a class=\"item{{ currentTab === index ? ' active' : ''}}\" role=\"presentation\" ref=\"{{tabLinkKey}}\">{{t(tab.label)}}</a>\n  {% }) %}\n</div>\n{% component.components.forEach(function(tab, index) { %}\n<div role=\"tabpanel\" class=\"ui bottom attached tab segment{{ currentTab === index ? ' active' : ''}}\" ref=\"{{tabKey}}\"\">{{tabComponents[index]}}</div>\n{% }) %}\n";
var _default = {
  flat: flat,
  form: form
};
exports.default = _default;