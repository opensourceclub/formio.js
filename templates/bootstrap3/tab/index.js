"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './flat.hbs' */
var flat = "{% component.components.forEach(function(tab, index) { %}\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">{{ t(tab.label) }}</h4>\n    </div>\n    <div class=\"panel-body\">\n      {{ tabComponents[index] }}\n    </div>\n  </div>\n{% }) %}\n";

/* babel-plugin-inline-import './form.hbs' */
var form = "<ul class=\"nav nav-tabs\">\n  {% component.components.forEach(function(tab, index) { %}\n  <li class=\"nav-item{{ currentTab === index ? ' active' : ''}}\" role=\"presentation\" ref=\"{{tabLikey}}\">\n    <a class=\"nav-link{{ currentTab === index ? ' active' : ''}}\" href=\"#{{tab.key}}\" ref=\"{{tabLinkKey}}\">{{t(tab.label)}}</a>\n  </li>\n  {% }) %}\n</ul>\n<div class=\"tab-content\">\n  {% component.components.forEach(function(tab, index) { %}\n  <div role=\"tabpanel\" class=\"tab-pane{{ currentTab === index ? ' active' : ''}}\" ref=\"{{tabKey}}\"\">{{tabComponents[index]}}</div>\n  {% }) %}\n</div>\n";
var _default = {
  flat: flat,
  form: form
};
exports.default = _default;