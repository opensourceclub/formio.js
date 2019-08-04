"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (node.isRoot) { %}\n  <div class=\"ui relaxed list\">\n  <div class=\"item\" ref=\"root\" role=\"listitem\">\n  {% } else { %}\n  <div ref=\"node\" class=\"item tree__level\" role=\"listitem\">\n    {% } %}\n    {% if (content) { %}\n    <div ref=\"content\" class=\"tree__node-content content\">\n      {{ content }}\n    </div>\n    {% } %}\n    {% if (childNodes && childNodes.length) { %}\n    <div ref=\"childNodes\" class=\"tree__node-children list\" role=\"list\">\n      {{ childNodes.join('') }}\n    </div>\n    {% } %}\n    {% if (node.isRoot) { %}\n    </div>\n  </div>\n  {% } else { %}\n  </div>\n{% } %}\n";
var _default = {
  form: form
};
exports.default = _default;