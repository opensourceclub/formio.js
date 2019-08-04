"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<table class=\"ui table\n    {{ component.striped ? 'striped' : ''}}\n    {{ component.bordered ? 'celled' : ''}}\n    {{ component.hover ? 'selectable' : ''}}\n    {{ component.condensed ? 'compact' : 'padded'}}\n  \">\n  {% if (component.header && component.header.length > 0) { %}\n  <thead>\n    <tr>\n      {% component.header.forEach(function(header) { %}\n      <th>{{t(header)}}</th>\n      {% }) %}\n    </tr>\n  </thead>\n  {% } %}\n  <tbody>\n    {% tableComponents.forEach(function(row, rowIndex) { %}\n    <tr ref=\"row-{{id}}\">\n      {% row.forEach(function(column, colIndex) { %}\n      <td ref=\"{{tableKey}}-{{rowIndex}}\">{{column}}</td>\n      {% }) %}\n    </tr>\n    {% }) %}\n  </tbody>\n</table>\n";
var _default = {
  form: form
};
exports.default = _default;