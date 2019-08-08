"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './edit.hbs' */
var edit = "<div class=\"node-edit\">\r\n  <div ref=\"nodeEdit\">{{ children }}</div>\r\n  {% if (!readOnly) { %}\r\n    <div class=\"node-actions\">\r\n      <button ref=\"saveNode\" class=\"ui mini primary button saveNode\">{{ t('Save') }}</button>\r\n      <button ref=\"cancelNode\" class=\"ui mini negative button cancelNode\">{{ t('Cancel') }}\r\n    </div>\r\n  {% } %}\r\n</div>\r\n";

/* babel-plugin-inline-import './view.hbs' */
var view = "<div class=\"ui grid\">\r\n  <div class=\"row\">\r\n    {% values.forEach(function(value) { %}\r\n    <div class=\"two wide column\">\r\n      {{ value }}\r\n    </div>\r\n    {% }) %}\r\n    <div class=\"five wide column\">\r\n      <div class=\"ui mini right floated buttons\">\r\n        {% if (node.hasChildren) { %}\r\n        <button ref=\"toggleNode\" class=\"ui button toggleNode\">{{ t(node.collapsed ? 'Expand' : 'Collapse') }}</button>\r\n        <div class=\"or\"></div>\r\n        {% } %}\r\n        {% if (!readOnly) { %}\r\n        <button ref=\"addChild\" class=\"ui button primary addChild\">{{ t('Add') }}</button>\r\n        <div class=\"or\"></div>\r\n        <button ref=\"editNode\" class=\"ui button editNode\">{{ t('Edit') }}</button>\r\n        <div class=\"or\"></div>\r\n        <button ref=\"removeNode\" class=\"ui button negative removeNode\">{{ t('Delete') }}</button>\r\n        {% if (node.revertAvailable) { %}\r\n        <div class=\"or\"></div>\r\n        <button ref=\"revertNode\" class=\"ui button negative revertNode\">{{ t('Revert') }}</button>\r\n        {% } %}\r\n        {% } %}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
var _default = {
  treeView: {
    form: view
  },
  treeEdit: {
    form: edit
  }
};
exports.default = _default;