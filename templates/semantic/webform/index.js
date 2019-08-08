"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"{{classes}} ui form\" ref=\"webform\" novalidate>{{children}}</div>\r\n";

/* babel-plugin-inline-import './builder.hbs' */
var builder = "<div class=\"ui visible message\"><p>{{ component.title }}</p></div>\r\n";
var _default = {
  form: form,
  builder: builder
};
exports.default = _default;