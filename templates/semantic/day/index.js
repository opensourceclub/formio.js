"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui grid\">\r\n  {% if (dayFirst && showDay) { %}\r\n  <div class=\"four wide column\">\r\n    <label for=\"{{component.key}}-day\" class=\"\">{{t('Day')}}</label>\r\n    {{day}}\r\n  </div>\r\n  {% } %}\r\n  {% if (showMonth) { %}\r\n  <div class=\"five wide column\">\r\n    <label for=\"{{component.key}}-month\" class=\"\">{{t('Month')}}</label>\r\n    {{month}}\r\n  </div>\r\n  {% } %}\r\n  {% if (!dayFirst && showDay) { %}\r\n  <div class=\"four wide column\">\r\n    <label for=\"{{component.key}}-day\" class=\"\">{{t('Day')}}</label>\r\n    {{day}}\r\n  </div>\r\n  {% } %}\r\n  {% if (showYear) { %}\r\n  <div class=\"seven wide column\">\r\n    <label for=\"{{component.key}}-year\" class=\"\">{{t('Year')}}</label>\r\n    {{year}}\r\n  </div>\r\n  {% } %}\r\n</div>\r\n<input name=\"data[day]\" type=\"hidden\" class=\"form-control\" lang=\"en\" value=\"\" ref=\"input\">\r\n";
var _default = {
  form: form
};
exports.default = _default;