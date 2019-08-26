"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"{{classes}}\" ref=\"webform\">\n\t<span ref=\"zoomIn\" style=\"position:absolute;right:10px;top:10px;cursor:pointer;\" class=\"btn btn-default btn-secondary no-disable\">\n\t\t<i class=\"glyphicon glyphicon-zoom-in\"></i>\n\t</span>\n\t<span ref=\"zoomOut\" style=\"position:absolute;right:10px;top:60px;cursor:pointer;\" class=\"btn btn-default btn-secondary no-disable\">\n\t\t<i class=\"glyphicon glyphicon-zoom-out\"></i>\n\t</span>\n  <div ref=\"iframeContainer\"></div>\n  <button type=\"button\" class=\"btn btn-primary\" ref=\"submitButton\">\u4FDD\u5B58</button>\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;