"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (node.isRoot) { %}\r\n  <div class=\"ui relaxed list\">\r\n  <div class=\"item\" ref=\"root\" role=\"listitem\">\r\n  {% } else { %}\r\n  <div ref=\"node\" class=\"item tree__level\" role=\"listitem\">\r\n    {% } %}\r\n    {% if (content) { %}\r\n    <div ref=\"content\" class=\"tree__node-content content\">\r\n      {{ content }}\r\n    </div>\r\n    {% } %}\r\n    {% if (childNodes && childNodes.length) { %}\r\n    <div ref=\"childNodes\" class=\"tree__node-children list\" role=\"list\">\r\n      {{ childNodes.join('') }}\r\n    </div>\r\n    {% } %}\r\n    {% if (node.isRoot) { %}\r\n    </div>\r\n  </div>\r\n  {% } else { %}\r\n  </div>\r\n{% } %}\r\n";
var _default = {
  form: form
};
exports.default = _default;