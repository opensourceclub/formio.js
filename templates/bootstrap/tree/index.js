"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (node.isRoot) { %}\n  <div ref=\"root\" class=\"list-group-item\">\n{% } else { %}\n  <li ref=\"node\" class=\"list-group-item col-sm-12 tree__level tree__level_{{ odd ? 'odd' : 'even' }}\">\n{% } %}\n  {% if (content) { %}\n    <div ref=\"content\" class=\"tree__node-content\">\n      {{ content }}\n    </div>\n  {% } %}\n  {% if (childNodes && childNodes.length) { %}\n    <ul ref=\"childNodes\" class=\"tree__node-children list-group row\">\n      {{ childNodes.join('') }}\n    </ul>\n  {% } %}\n{% if (node.isRoot) { %}\n  </div>\n{% } else { %}\n  </li>\n{% } %}\n";
var _default = {
  form: form
};
exports.default = _default;