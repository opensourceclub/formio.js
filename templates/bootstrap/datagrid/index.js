"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<table class=\"table datagrid-table table-bordered\n    {{ component.striped ? 'table-striped' : ''}}\n    {{ component.hover ? 'table-hover' : ''}}\n    {{ component.condensed ? 'table-sm' : ''}}\n    \" {% if (component.layoutFixed) { %}style=\"table-layout: fixed;\"{% } %}>\n  {% if (hasHeader) { %}\n  <thead>\n    <tr>\n      {% if (component.reorder) { %}<th></th>{% } %}\n      {% columns.forEach(function(col) { %}\n      {% if (visibleColumns[col.key]) { %}\n      <th class=\"{{col.validate && col.validate.required ? 'field-required' : ''}}\">\n        {{ col.hideLabel ? '' : t(col.label || col.title) }}\n        {% if (col.tooltip) { %} <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>{% } %}\n      </th>\n      {% } %}\n      {% }) %}\n      {% if (hasExtraColumn) { %}\n      <th>\n        {% if (!builder && hasAddButton && hasTopSubmit) { %}\n        <button class=\"btn btn-primary formio-button-add-row\" ref=\"{{datagridKey}}-addRow\">\n          <i class=\"{{iconClass('plus')}}\"></i> \u6DFB\u52A0\n        </button>\n        {% } %}\n      </th>\n      {% } %}\n    </tr>\n  </thead>\n  {% } %}\n  <tbody ref=\"{{datagridKey}}-tbody\">\n    {% rows.forEach(function(row) { %}\n    {% if (hasGroups && groups[index]) { %}\n    <tr ref=\"{{datagridKey}}-group-header\" class=\"datagrid-group-header{{hasToggle ? ' clickable' : ''}}\">\n      <td\n        ref=\"{{datagridKey}}-group-label\"\n        colspan=\"{{numColumns}}\"\n        class=\"datagrid-group-label\">{{groups[index].label}}</td>\n    </tr>\n    {% } %}\n    <tr ref=\"{{datagridKey}}-row\">\n      {% if (component.reorder) { %}\n        <td>\n          <button type=\"button\" class=\"formio-drag-button btn btn-default fa fa-bars\"></button>\n        </td>\n      {% } %}\n      {% columns.forEach(function(col) { %}\n      {% if (visibleColumns[col.key]) { %}\n      <td ref=\"{{datagridKey}}\">\n        {{row[col.key]}}\n      </td>\n      {% } %}\n      {% }) %}\n      {% if (hasExtraColumn) { %}\n        {% if (!builder && hasRemoveButtons) { %}\n        <td>\n          <button type=\"button\" class=\"btn btn-secondary formio-button-remove-row\" ref=\"{{datagridKey}}-removeRow\">\n            <i class=\"{{iconClass('remove-circle')}}\"></i>\n          </button>\n        </td>\n        {% } %}\n        {% if (builder) { %}\n        <td ref=\"{{key}}-container\">\n          {{placeholder}}\n        </td>\n        {% } %}\n      {% } %}\n    </tr>\n    {% }) %}\n  </tbody>\n  {% if (!builder && hasAddButton && hasBottomSubmit) { %}\n  <tfoot>\n    <tr>\n      <td colspan=\"{{numColumns + 1}}\">\n        <button class=\"btn btn-primary formio-button-add-row\" ref=\"{{datagridKey}}-addRow\">\n          <i class=\"{{iconClass('plus')}}\"></i> {{t(component.addAnother || '\u6DFB\u52A0')}}\n        </button>\n      </td>\n    </tr>\n  </tfoot>\n  {% } %}\n</table>\n";

/* babel-plugin-inline-import './html.hbs' */
var html = "<table class=\"table datagrid-table table-bordered\n    {{ component.striped ? 'table-striped' : ''}}\n    {{ component.hover ? 'table-hover' : ''}}\n    {{ component.condensed ? 'table-sm' : ''}}\n    \">\n  {% if (hasHeader) { %}\n  <thead>\n    <tr>\n      {% columns.forEach(function(col) { %}\n      {% if (visibleColumns[col.key]) { %}\n      <th class=\"{{col.validate && col.validate.required ? 'field-required' : ''}}\">\n        {{ col.hideLabel ? '' : t(col.label || col.title) }}\n        {% if (col.tooltip) { %} <i ref=\"tooltip\" class=\"{{iconClass('question-sign')}} text-muted\"></i>{% } %}\n      </th>\n      {% } %}\n      {% }) %}\n    </tr>\n  </thead>\n  {% } %}\n  <tbody>\n    {% rows.forEach(function(row) { %}\n    <tr>\n      {% columns.forEach(function(col) { %}\n      {% if (visibleColumns[col.key]) { %}\n      <td ref=\"{{datagridKey}}\">\n        {{row[col.key]}}\n      </td>\n      {% } %}\n      {% }) %}\n    </tr>\n    {% }) %}\n  </tbody>\n</table>\n";
var _default = {
  form: form,
  html: html
};
exports.default = _default;