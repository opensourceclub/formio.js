"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './edit.hbs' */
var edit = "<div class=\"node-edit\">\n  <div ref=\"nodeEdit\">{{ children }}</div>\n  {% if (!readOnly) { %}\n    <div class=\"node-actions\">\n      <button ref=\"saveNode\" class=\"ui mini primary button saveNode\">{{ t('Save') }}</button>\n      <button ref=\"cancelNode\" class=\"ui mini negative button cancelNode\">{{ t('Cancel') }}\n    </div>\n  {% } %}\n</div>\n";

/* babel-plugin-inline-import './view.hbs' */
var view = "<div class=\"ui grid\">\n  <div class=\"row\">\n    {% values.forEach(function(value) { %}\n    <div class=\"two wide column\">\n      {{ value }}\n    </div>\n    {% }) %}\n    <div class=\"five wide column\">\n      <div class=\"ui mini right floated buttons\">\n        {% if (node.hasChildren) { %}\n        <button ref=\"toggleNode\" class=\"ui button toggleNode\">{{ t(node.collapsed ? 'Expand' : 'Collapse') }}</button>\n        <div class=\"or\"></div>\n        {% } %}\n        {% if (!readOnly) { %}\n        <button ref=\"addChild\" class=\"ui button primary addChild\">{{ t('Add') }}</button>\n        <div class=\"or\"></div>\n        <button ref=\"editNode\" class=\"ui button editNode\">{{ t('Edit') }}</button>\n        <div class=\"or\"></div>\n        <button ref=\"removeNode\" class=\"ui button negative removeNode\">{{ t('Delete') }}</button>\n        {% if (node.revertAvailable) { %}\n        <div class=\"or\"></div>\n        <button ref=\"revertNode\" class=\"ui button negative revertNode\">{{ t('Revert') }}</button>\n        {% } %}\n        {% } %}\n      </div>\n    </div>\n  </div>\n</div>\n";
var _default = {
  treeView: {
    form: view
  },
  treeEdit: {
    form: edit
  }
};
exports.default = _default;