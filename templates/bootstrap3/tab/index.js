"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './flat.hbs' */
var flat = "{% component.components.forEach(function(tab, index) { %}\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h4 class=\"panel-title\">{{ t(tab.label) }}</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      {{ tabComponents[index] }}\r\n    </div>\r\n  </div>\r\n{% }) %}\r\n";

/* babel-plugin-inline-import './form.hbs' */
var form = "<ul class=\"nav nav-tabs\">\r\n  {% component.components.forEach(function(tab, index) { %}\r\n  <li class=\"nav-item{{ currentTab === index ? ' active' : ''}}\" role=\"presentation\" ref=\"{{tabLikey}}\">\r\n    <a class=\"nav-link{{ currentTab === index ? ' active' : ''}}\" href=\"#{{tab.key}}\" ref=\"{{tabLinkKey}}\">{{t(tab.label)}}</a>\r\n  </li>\r\n  {% }) %}\r\n</ul>\r\n<div class=\"tab-content\">\r\n  {% component.components.forEach(function(tab, index) { %}\r\n  <div role=\"tabpanel\" class=\"tab-pane{{ currentTab === index ? ' active' : ''}}\" ref=\"{{tabKey}}\"\">{{tabComponents[index]}}</div>\r\n  {% }) %}\r\n</div>\r\n";
var _default = {
  flat: flat,
  form: form
};
exports.default = _default;