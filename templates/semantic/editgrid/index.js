"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"editgrid-listgroup ui celled list\">\n  {% if (header) { %}\n  <div class=\"item list-group-header\">\n    {{header}}\n  </div>\n  {% } %}\n  {% rows.forEach(function(row, rowIndex) { %}\n  <div class=\"item\" ref=\"{{editgridKey}}\">\n    {{row}}\n    {% if (openRows[rowIndex] && !readOnly) { %}\n    <div class=\"editgrid-actions\">\n      <button class=\"ui button primary\" ref=\"{{editgridKey}}-saveRow\">{{t(component.saveRow || 'Save')}}</button>\n      {% if (component.removeRow) { %}\n      <button class=\"ui button secondary\" ref=\"{{editgridKey}}-cancelRow\">{{t(component.removeRow || 'Cancel')}}</button>\n      {% } %}\n    </div>\n    {% } %}\n    <div class=\"has-error\">\n      <div class=\"editgrid-row-error help-block\">\n        {{errors[rowIndex]}}\n      </div>\n    </div>\n  </div>\n  {% }) %}\n  {% if (footer) { %}\n  <div class=\"item list-group-footer\">\n    {{footer}}\n  </div>\n  {% } %}\n</div>\n{% if (!readOnly) { %}\n<button class=\"ui button primary\" ref=\"{{editgridKey}}-addRow\">\n  <i class=\"{{iconClass('plus')}}\"></i> {{t(component.addAnother || 'Add Another')}}\n</button>\n{% } %}\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<div class=\"editgrid-listgroup ui celled list\">\n  {% if (header) { %}\n  <div class=\"item list-group-header\">\n    {{header}}\n  </div>\n  {% } %}\n  {% rows.forEach(function(row, rowIndex) { %}\n  <div class=\"item\" ref=\"{{editgridKey}}\">\n    {{row}}\n    {% if (openRows[rowIndex] && !readOnly) { %}\n    <div class=\"editgrid-actions\">\n      <button class=\"ui button primary\" ref=\"{{editgridKey}}-saveRow\">{{t(component.saveRow || 'Save')}}</button>\n      {% if (component.removeRow) { %}\n      <button class=\"ui button secondary\" ref=\"{{editgridKey}}-cancelRow\">{{t(component.removeRow || 'Cancel')}}</button>\n      {% } %}\n    </div>\n    {% } %}\n    <div class=\"has-error\">\n      <div class=\"editgrid-row-error help-block\">\n        {{errors[rowIndex]}}\n      </div>\n    </div>\n  </div>\n  {% }) %}\n  {% if (footer) { %}\n  <div class=\"item list-group-footer\">\n    {{footer}}\n  </div>\n  {% } %}\n</div>\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;