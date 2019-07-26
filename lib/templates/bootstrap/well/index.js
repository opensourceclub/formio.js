"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"card card-body bg-light\">\n  <div ref=\"{{nestedKey}}\">\n    {{children}}\n  </div>\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;