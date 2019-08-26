"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './edit.hbs' */
var edit = "<div class=\"node-edit\">\n  <div ref=\"nodeEdit\">{{ children }}</div>\n  {% if (!readOnly) { %}\n    <div class=\"node-actions\">\n      <button ref=\"saveNode\" class=\"btn btn-primary saveNode\">{{ t('Save') }}</button>\n      <button ref=\"cancelNode\" class=\"btn btn-danger cancelNode\">{{ t('Cancel') }}</button>\n    </div>\n  {% } %}\n</div>\n";

/* babel-plugin-inline-import './view.hbs' */
var view = "<div class=\"row\">\n  {% values.forEach(function(value) { %}\n    <div class=\"col-sm-2\">\n      {{ value }}\n    </div>\n  {% }) %}\n  <div class=\"col-sm-3\">\n    <div class=\"btn-group pull-right\">\n      {% if (node.hasChildren) { %}\n        <button ref=\"toggleNode\" class=\"btn btn-default btn-sm toggleNode\">{{ t(node.collapsed ? 'Expand' : 'Collapse') }}</button>\n      {% } %}\n      {% if (!readOnly) { %}\n        <button ref=\"addChild\" class=\"btn btn-default btn-sm addChild\">{{ t('Add') }}</button>\n        <button ref=\"editNode\" class=\"btn btn-default btn-sm editNode\">{{ t('Edit') }}</button>\n        <button ref=\"removeNode\" class=\"btn btn-danger btn-sm removeNode\">{{ t('Delete') }}</button>\n        {% if (node.revertAvailable) { %}\n          <button ref=\"revertNode\" class=\"btn btn-danger btn-sm revertNode\">{{ t('Revert') }}</button>\n        {% } %}\n      {% } %}\n    </div>\n  </div>\n</div>\n";
var _default = {
  treeView: {
    form: view
  },
  treeEdit: {
    form: edit
  }
};
exports.default = _default;