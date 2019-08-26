"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './flat.hbs' */
var flat = "{% component.components.forEach(function(tab, index) { %}\n  <div class=\"mb-2 card border\">\n    <div class=\"card-header bg-default\">\n      <h4 class=\"mb-0 card-title\">{{ t(tab.label) }}</h4>\n    </div>\n    <div class=\"card-body\">\n      {{ tabComponents[index] }}\n    </div>\n  </div>\n{% }) %}\n";

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"card\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs\">\n      {% component.components.forEach(function(tab, index) { %}\n      <li class=\"nav-item{{ currentTab === index ? ' active' : ''}}\" role=\"presentation\" ref=\"{{tabLikey}}\">\n        <a class=\"nav-link{{ currentTab === index ? ' active' : ''}}\" href=\"#{{tab.key}}\" ref=\"{{tabLinkKey}}\">{{t(tab.label)}}</a>\n      </li>\n      {% }) %}\n    </ul>\n  </div>\n  {% component.components.forEach(function(tab, index) { %}\n  <div\n    role=\"tabpanel\"\n    class=\"card-body tab-pane{{ currentTab === index ? ' active' : ''}}\"\n    style=\"display: {{currentTab === index ? 'block' : 'none'}}\"\n    ref=\"{{tabKey}}\"\n  >\n    {{tabComponents[index]}}\n  </div>\n  {% }) %}\n</div>\n";
var _default = {
  flat: flat,
  form: form
};
exports.default = _default;