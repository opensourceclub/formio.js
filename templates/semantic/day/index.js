"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui grid\">\n  {% if (dayFirst && showDay) { %}\n  <div class=\"four wide column\">\n    <label for=\"{{component.key}}-day\" class=\"\">{{t('Day')}}</label>\n    {{day}}\n  </div>\n  {% } %}\n  {% if (showMonth) { %}\n  <div class=\"five wide column\">\n    <label for=\"{{component.key}}-month\" class=\"\">{{t('Month')}}</label>\n    {{month}}\n  </div>\n  {% } %}\n  {% if (!dayFirst && showDay) { %}\n  <div class=\"four wide column\">\n    <label for=\"{{component.key}}-day\" class=\"\">{{t('Day')}}</label>\n    {{day}}\n  </div>\n  {% } %}\n  {% if (showYear) { %}\n  <div class=\"seven wide column\">\n    <label for=\"{{component.key}}-year\" class=\"\">{{t('Year')}}</label>\n    {{year}}\n  </div>\n  {% } %}\n</div>\n<input name=\"data[day]\" type=\"hidden\" class=\"form-control\" lang=\"en\" value=\"\" ref=\"input\">\n";
var _default = {
  form: form
};
exports.default = _default;