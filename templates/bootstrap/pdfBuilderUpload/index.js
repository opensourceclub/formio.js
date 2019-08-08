"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"pdf-upload formio-component-file\">\r\n  <h3 class=\"label\">Upload a PDF File</h3>\r\n  <input type=\"file\" style=\"opacity: 0; position: absolute;\" tabindex=\"-1\" accept=\".pdf\" ref=\"hiddenFileInputElement\">\r\n  <div class=\"fileSelector\" ref=\"fileDrop\">\r\n    <i class=\"{{iconClass('cloud-upload')}}\"></i> Drop pdf to start,\r\n    or <a href=\"#\" ref=\"fileBrowse\" class=\"browse\">browse</a>\r\n  </div>\r\n  <div class=\"alert alert-danger\" ref=\"uploadError\">\r\n\r\n  </div>\r\n</div>\r\n\r\n";
var _default = {
  form: form
};
exports.default = _default;