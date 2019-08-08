"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './flat.hbs' */
var flat = "{% component.components.forEach(function(tab, index) { %}\r\n  <div class=\"mb-2 card border\">\r\n    <div class=\"card-header bg-default\">\r\n      <h4 class=\"mb-0 card-title\">{{ t(tab.label) }}</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      {{ tabComponents[index] }}\r\n    </div>\r\n  </div>\r\n{% }) %}\r\n";

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <ul class=\"nav nav-tabs card-header-tabs\">\r\n      {% component.components.forEach(function(tab, index) { %}\r\n      <li class=\"nav-item{{ currentTab === index ? ' active' : ''}}\" role=\"presentation\" ref=\"{{tabLikey}}\">\r\n        <a class=\"nav-link{{ currentTab === index ? ' active' : ''}}\" href=\"#{{tab.key}}\" ref=\"{{tabLinkKey}}\">{{t(tab.label)}}</a>\r\n      </li>\r\n      {% }) %}\r\n    </ul>\r\n  </div>\r\n  {% component.components.forEach(function(tab, index) { %}\r\n  <div\r\n    role=\"tabpanel\"\r\n    class=\"card-body tab-pane{{ currentTab === index ? ' active' : ''}}\"\r\n    style=\"display: {{currentTab === index ? 'block' : 'none'}}\"\r\n    ref=\"{{tabKey}}\"\r\n  >\r\n    {{tabComponents[index]}}\r\n  </div>\r\n  {% }) %}\r\n</div>\r\n";
var _default = {
  flat: flat,
  form: form
};
exports.default = _default;