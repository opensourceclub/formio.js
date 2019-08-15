"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"editgrid-listgroup ui celled list\">\r\n  {% if (header) { %}\r\n  <div class=\"item list-group-header\">\r\n    {{header}}\r\n  </div>\r\n  {% } %}\r\n  {% rows.forEach(function(row, rowIndex) { %}\r\n  <div class=\"item\" ref=\"{{editgridKey}}\">\r\n    {{row}}\r\n    {% if (openRows[rowIndex] && !readOnly) { %}\r\n    <div class=\"editgrid-actions\">\r\n      <button class=\"ui button primary\" ref=\"{{editgridKey}}-saveRow\">{{t(component.saveRow || 'Save')}}</button>\r\n      {% if (component.removeRow) { %}\r\n      <button class=\"ui button secondary\" ref=\"{{editgridKey}}-cancelRow\">{{t(component.removeRow || 'Cancel')}}</button>\r\n      {% } %}\r\n    </div>\r\n    {% } %}\r\n    <div class=\"has-error\">\r\n      <div class=\"editgrid-row-error help-block\">\r\n        {{errors[rowIndex]}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  {% }) %}\r\n  {% if (footer) { %}\r\n  <div class=\"item list-group-footer\">\r\n    {{footer}}\r\n  </div>\r\n  {% } %}\r\n</div>\r\n{% if (!readOnly) { %}\r\n<button class=\"ui button primary\" ref=\"{{editgridKey}}-addRow\">\r\n  <i class=\"{{iconClass('plus')}}\"></i> {{t(component.addAnother || '\u6DFB\u52A0')}}\r\n</button>\r\n{% } %}\r\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<div class=\"editgrid-listgroup ui celled list\">\r\n  {% if (header) { %}\r\n  <div class=\"item list-group-header\">\r\n    {{header}}\r\n  </div>\r\n  {% } %}\r\n  {% rows.forEach(function(row, rowIndex) { %}\r\n  <div class=\"item\" ref=\"{{editgridKey}}\">\r\n    {{row}}\r\n    {% if (openRows[rowIndex] && !readOnly) { %}\r\n    <div class=\"editgrid-actions\">\r\n      <button class=\"ui button primary\" ref=\"{{editgridKey}}-saveRow\">{{t(component.saveRow || 'Save')}}</button>\r\n      {% if (component.removeRow) { %}\r\n      <button class=\"ui button secondary\" ref=\"{{editgridKey}}-cancelRow\">{{t(component.removeRow || 'Cancel')}}</button>\r\n      {% } %}\r\n    </div>\r\n    {% } %}\r\n    <div class=\"has-error\">\r\n      <div class=\"editgrid-row-error help-block\">\r\n        {{errors[rowIndex]}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  {% }) %}\r\n  {% if (footer) { %}\r\n  <div class=\"item list-group-footer\">\r\n    {{footer}}\r\n  </div>\r\n  {% } %}\r\n</div>\r\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;