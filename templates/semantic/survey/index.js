"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<table class=\"ui table striped celled\">\n  <thead>\n    <tr>\n      <th></th>\n      {% component.values.forEach(function(value) { %}\n      <th style=\"text-align: center;\">{{t(value.label)}}</th>\n      {% }) %}\n    </tr>\n  </thead>\n  <tbody>\n    {% component.questions.forEach(function(question) { %}\n    <tr>\n      <td>{{t(question.label)}}</td>\n      {% component.values.forEach(function(value) { %}\n      <td style=\"text-align: center;\">\n        <input type=\"radio\" name=\"{{ self.getInputName(question) }}\" value=\"{{value.value}}\" id=\"{{key}}-{{question.value}}-{{value.value}}\" ref=\"input\">\n      </td>\n      {% }) %}\n    </tr>\n    {% }) %}\n  </tbody>\n</table>\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<table class=\"ui table striped celled\">\n  <tbody>\n    {% component.questions.forEach(function(question) { %}\n    <tr>\n      <th>{{t(question.label)}}</th>\n      <td>\n      {% component.values.forEach(function(item) { %}\n        {% if (value && value.hasOwnProperty(question.value) && value[question.value] === item.value) { %}\n          {{t(item.label)}}\n        {% } %}\n      {% }) %}\n      </td>\n    </tr>\n    {% }) %}\n  </tbody>\n</table>\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;