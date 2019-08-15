"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<table class=\"ui table striped celled\">\r\n  <thead>\r\n    <tr>\r\n      <th></th>\r\n      {% component.values.forEach(function(value) { %}\r\n      <th style=\"text-align: center;\">{{t(value.label)}}</th>\r\n      {% }) %}\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    {% component.questions.forEach(function(question) { %}\r\n    <tr>\r\n      <td>{{t(question.label)}}</td>\r\n      {% component.values.forEach(function(value) { %}\r\n      <td style=\"text-align: center;\">\r\n        <input type=\"radio\" name=\"{{ self.getInputName(question) }}\" value=\"{{value.value}}\" id=\"{{key}}-{{question.value}}-{{value.value}}\" ref=\"input\">\r\n      </td>\r\n      {% }) %}\r\n    </tr>\r\n    {% }) %}\r\n  </tbody>\r\n</table>\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<table class=\"ui table striped celled\">\r\n  <tbody>\r\n    {% component.questions.forEach(function(question) { %}\r\n    <tr>\r\n      <th>{{t(question.label)}}</th>\r\n      <td>\r\n      {% component.values.forEach(function(item) { %}\r\n        {% if (value && value.hasOwnProperty(question.value) && value[question.value] === item.value) { %}\r\n          {{t(item.label)}}\r\n        {% } %}\r\n      {% }) %}\r\n      </td>\r\n    </tr>\r\n    {% }) %}\r\n  </tbody>\r\n</table>\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;