"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<ul class=\"editgrid-listgroup list-group\n    {{ component.striped ? 'table-striped' : ''}}\n    {{ component.bordered ? 'table-bordered' : ''}}\n    {{ component.hover ? 'table-hover' : ''}}\n    {{ component.condensed ? 'table-sm' : ''}}\n    \">\n  {% if (header) { %}\n  <li class=\"list-group-item list-group-header\">\n    {{header}}\n  </li>\n  {% } %}\n  {% rows.forEach(function(row, rowIndex) { %}\n  <li class=\"list-group-item\" ref=\"{{editgridKey}}\">\n    {{row}}\n    {% if (openRows[rowIndex] && !readOnly) { %}\n    <div class=\"editgrid-actions\">\n      <button class=\"btn btn-primary\" ref=\"{{editgridKey}}-saveRow\">{{t(component.saveRow || 'Save')}}</button>\n      {% if (component.removeRow) { %}\n      <button class=\"btn btn-danger\" ref=\"{{editgridKey}}-cancelRow\">{{t(component.removeRow || 'Cancel')}}</button>\n      {% } %}\n    </div>\n    {% } %}\n    <div class=\"has-error\">\n      <div class=\"editgrid-row-error help-block\">\n        {{errors[rowIndex]}}\n      </div>\n    </div>\n  </li>\n  {% }) %}\n  {% if (footer) { %}\n  <li class=\"list-group-item list-group-footer\">\n    {{footer}}\n  </li>\n  {% } %}\n</ul>\n{% if (!readOnly) { %}\n<button class=\"btn btn-primary\" ref=\"{{editgridKey}}-addRow\">\n  <i class=\"{{iconClass('plus')}}\"></i> {{t(component.addAnother || 'Add Another')}}\n</button>\n{% } %}\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<ul class=\"editgrid-listgroup list-group\n    {{ component.striped ? 'table-striped' : ''}}\n    {{ component.bordered ? 'table-bordered' : ''}}\n    {{ component.hover ? 'table-hover' : ''}}\n    {{ component.condensed ? 'table-sm' : ''}}\n    \">\n  {% if (header) { %}\n  <li class=\"list-group-item list-group-header\">\n    {{header}}\n  </li>\n  {% } %}\n  {% rows.forEach(function(row, rowIndex) { %}\n  <li class=\"list-group-item\" ref=\"{{editgridKey}}\">\n    {{row}}\n    {% if (openRows[rowIndex] && !readOnly) { %}\n    <div class=\"editgrid-actions\">\n      <button class=\"btn btn-primary\" ref=\"{{editgridKey}}-saveRow\">{{t(component.saveRow || 'Save')}}</button>\n      {% if (component.removeRow) { %}\n      <button class=\"btn btn-danger\" ref=\"{{editgridKey}}-cancelRow\">{{t(component.removeRow || 'Cancel')}}</button>\n      {% } %}\n    </div>\n    {% } %}\n    <div class=\"has-error\">\n      <div class=\"editgrid-row-error help-block\">\n        {{errors[rowIndex]}}\n      </div>\n    </div>\n  </li>\n  {% }) %}\n  {% if (footer) { %}\n  <li class=\"list-group-item list-group-footer\">\n    {{footer}}\n  </li>\n  {% } %}\n</ul>\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;