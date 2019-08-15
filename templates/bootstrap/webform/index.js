"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"{{classes}}\" ref=\"webform\" novalidate>{{children}}</div>\r\n";

/* babel-plugin-inline-import './builder.hbs' */
var builder = "<div class=\"text-muted text-center p-2\">{{ t(component.title) }}</div>\r\n";
var _default = {
  form: form,
  builder: builder
};
exports.default = _default;