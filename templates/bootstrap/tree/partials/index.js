"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './edit.hbs' */
var edit = "<div class=\"node-edit\">\r\n  <div ref=\"nodeEdit\">{{ children }}</div>\r\n  {% if (!readOnly) { %}\r\n    <div class=\"node-actions\">\r\n      <button ref=\"saveNode\" class=\"btn btn-primary saveNode\">{{ t('Save') }}</button>\r\n      <button ref=\"cancelNode\" class=\"btn btn-danger cancelNode\">{{ t('Cancel') }}</button>\r\n    </div>\r\n  {% } %}\r\n</div>\r\n";

/* babel-plugin-inline-import './view.hbs' */
var view = "<div class=\"row\">\r\n  {% values.forEach(function(value) { %}\r\n    <div class=\"col-sm-2\">\r\n      {{ value }}\r\n    </div>\r\n  {% }) %}\r\n  <div class=\"col-sm-3\">\r\n    <div class=\"btn-group pull-right\">\r\n      {% if (node.hasChildren) { %}\r\n        <button ref=\"toggleNode\" class=\"btn btn-default btn-sm toggleNode\">{{ t(node.collapsed ? 'Expand' : 'Collapse') }}</button>\r\n      {% } %}\r\n      {% if (!readOnly) { %}\r\n        <button ref=\"addChild\" class=\"btn btn-default btn-sm addChild\">{{ t('Add') }}</button>\r\n        <button ref=\"editNode\" class=\"btn btn-default btn-sm editNode\">{{ t('Edit') }}</button>\r\n        <button ref=\"removeNode\" class=\"btn btn-danger btn-sm removeNode\">{{ t('Delete') }}</button>\r\n        {% if (node.revertAvailable) { %}\r\n          <button ref=\"revertNode\" class=\"btn btn-danger btn-sm revertNode\">{{ t('Revert') }}</button>\r\n        {% } %}\r\n      {% } %}\r\n    </div>\r\n  </div>\r\n</div>\r\n";
var _default = {
  treeView: {
    form: view
  },
  treeEdit: {
    form: edit
  }
};
exports.default = _default;