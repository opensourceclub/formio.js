"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"pdf-upload formio-component-file\">\n  <h3 class=\"label\">Upload a PDF File</h3>\n  <input type=\"file\" style=\"opacity: 0; position: absolute;\" tabindex=\"-1\" accept=\".pdf\" ref=\"hiddenFileInputElement\">\n  <div class=\"fileSelector\" ref=\"fileDrop\">\n    <i class=\"{{iconClass('cloud-upload')}}\"></i> Drop pdf to start,\n    or <a href=\"#\" ref=\"fileBrowse\" class=\"browse\">browse</a>\n  </div>\n  <div class=\"alert alert-danger\" ref=\"uploadError\">\n\n  </div>\n</div>\n\n";
var _default = {
  form: form
};
exports.default = _default;