"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<table class=\"ui table\r\n    {{ component.striped ? 'striped' : ''}}\r\n    {{ component.bordered ? 'celled' : ''}}\r\n    {{ component.hover ? 'selectable' : ''}}\r\n    {{ component.condensed ? 'compact' : 'padded'}}\r\n  \">\r\n  {% if (component.header && component.header.length > 0) { %}\r\n  <thead>\r\n    <tr>\r\n      {% component.header.forEach(function(header) { %}\r\n      <th>{{t(header)}}</th>\r\n      {% }) %}\r\n    </tr>\r\n  </thead>\r\n  {% } %}\r\n  <tbody>\r\n    {% tableComponents.forEach(function(row, rowIndex) { %}\r\n    <tr ref=\"row-{{id}}\">\r\n      {% row.forEach(function(column, colIndex) { %}\r\n      <td ref=\"{{tableKey}}-{{rowIndex}}\">{{column}}</td>\r\n      {% }) %}\r\n    </tr>\r\n    {% }) %}\r\n  </tbody>\r\n</table>\r\n";
var _default = {
  form: form
};
exports.default = _default;