"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<ul class=\"editgrid-listgroup list-group\r\n    {{ component.striped ? 'table-striped' : ''}}\r\n    {{ component.bordered ? 'table-bordered' : ''}}\r\n    {{ component.hover ? 'table-hover' : ''}}\r\n    {{ component.condensed ? 'table-sm' : ''}}\r\n    \">\r\n  {% if (header) { %}\r\n  <li class=\"list-group-item list-group-header\">\r\n    {{header}}\r\n  </li>\r\n  {% } %}\r\n  {% rows.forEach(function(row, rowIndex) { %}\r\n  <li class=\"list-group-item\" ref=\"{{editgridKey}}\">\r\n    {{row}}\r\n    {% if (openRows[rowIndex] && !readOnly) { %}\r\n    <div class=\"editgrid-actions\">\r\n      <button class=\"btn btn-primary\" ref=\"{{editgridKey}}-saveRow\">{{t(component.saveRow || 'Save')}}</button>\r\n      {% if (component.removeRow) { %}\r\n      <button class=\"btn btn-danger\" ref=\"{{editgridKey}}-cancelRow\">{{t(component.removeRow || 'Cancel')}}</button>\r\n      {% } %}\r\n    </div>\r\n    {% } %}\r\n    <div class=\"has-error\">\r\n      <div class=\"editgrid-row-error help-block\">\r\n        {{errors[rowIndex]}}\r\n      </div>\r\n    </div>\r\n  </li>\r\n  {% }) %}\r\n  {% if (footer) { %}\r\n  <li class=\"list-group-item list-group-footer\">\r\n    {{footer}}\r\n  </li>\r\n  {% } %}\r\n</ul>\r\n{% if (!readOnly) { %}\r\n<button class=\"btn btn-primary\" ref=\"{{editgridKey}}-addRow\">\r\n  <i class=\"{{iconClass('plus')}}\"></i> {{t(component.addAnother || '\u6DFB\u52A0')}}\r\n</button>\r\n{% } %}\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<ul class=\"editgrid-listgroup list-group\r\n    {{ component.striped ? 'table-striped' : ''}}\r\n    {{ component.bordered ? 'table-bordered' : ''}}\r\n    {{ component.hover ? 'table-hover' : ''}}\r\n    {{ component.condensed ? 'table-sm' : ''}}\r\n    \">\r\n  {% if (header) { %}\r\n  <li class=\"list-group-item list-group-header\">\r\n    {{header}}\r\n  </li>\r\n  {% } %}\r\n  {% rows.forEach(function(row, rowIndex) { %}\r\n  <li class=\"list-group-item\" ref=\"{{editgridKey}}\">\r\n    {{row}}\r\n    {% if (openRows[rowIndex] && !readOnly) { %}\r\n    <div class=\"editgrid-actions\">\r\n      <button class=\"btn btn-primary\" ref=\"{{editgridKey}}-saveRow\">{{t(component.saveRow || 'Save')}}</button>\r\n      {% if (component.removeRow) { %}\r\n      <button class=\"btn btn-danger\" ref=\"{{editgridKey}}-cancelRow\">{{t(component.removeRow || 'Cancel')}}</button>\r\n      {% } %}\r\n    </div>\r\n    {% } %}\r\n    <div class=\"has-error\">\r\n      <div class=\"editgrid-row-error help-block\">\r\n        {{errors[rowIndex]}}\r\n      </div>\r\n    </div>\r\n  </li>\r\n  {% }) %}\r\n  {% if (footer) { %}\r\n  <li class=\"list-group-item list-group-footer\">\r\n    {{footer}}\r\n  </li>\r\n  {% } %}\r\n</ul>\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;