"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"{{classes}}\" ref=\"webform\">\r\n\t<span ref=\"zoomIn\" style=\"position:absolute;right:10px;top:10px;cursor:pointer;\" class=\"btn btn-default btn-secondary no-disable\">\r\n\t\t<i class=\"glyphicon glyphicon-zoom-in\"></i>\r\n\t</span>\r\n\t<span ref=\"zoomOut\" style=\"position:absolute;right:10px;top:60px;cursor:pointer;\" class=\"btn btn-default btn-secondary no-disable\">\r\n\t\t<i class=\"glyphicon glyphicon-zoom-out\"></i>\r\n\t</span>\r\n  <div ref=\"iframeContainer\"></div>\r\n  <button type=\"button\" class=\"btn btn-primary\" ref=\"submitButton\">Submit</button>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;