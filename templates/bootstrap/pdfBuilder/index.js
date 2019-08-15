"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"formio builder row formbuilder\">\r\n  <div class=\"col-xs-4 col-sm-3 col-md-2 formcomponents\">\r\n    {{sidebar}}\r\n  </div>\r\n  <div class=\"col-xs-8 col-sm-9 col-md-10 formarea\" ref=\"form\">\r\n\t  <div class=\"formio-drop-zone\" ref=\"iframeDropzone\"></div>\r\n    {{form}}\r\n  </div>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;