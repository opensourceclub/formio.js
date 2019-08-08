"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (node.isRoot) { %}\r\n  <div ref=\"root\" class=\"list-group-item\">\r\n{% } else { %}\r\n  <li ref=\"node\" class=\"list-group-item col-sm-12 tree__level tree__level_{{ odd ? 'odd' : 'even' }}\">\r\n{% } %}\r\n  {% if (content) { %}\r\n    <div ref=\"content\" class=\"tree__node-content\">\r\n      {{ content }}\r\n    </div>\r\n  {% } %}\r\n  {% if (childNodes && childNodes.length) { %}\r\n    <ul ref=\"childNodes\" class=\"tree__node-children list-group row\">\r\n      {{ childNodes.join('') }}\r\n    </ul>\r\n  {% } %}\r\n{% if (node.isRoot) { %}\r\n  </div>\r\n{% } else { %}\r\n  </li>\r\n{% } %}\r\n";
var _default = {
  form: form
};
exports.default = _default;