"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (!component.image) { %}\r\n<ul class=\"list-group list-group-striped\">\r\n  <li class=\"list-group-item list-group-header hidden-xs hidden-sm\">\r\n    <div class=\"row\">\r\n      {% if (!disabled) { %}\r\n      <div class=\"col-md-1\"></div>\r\n      {% } %}\r\n      <div class=\"col-md-{% if (self.hasTypes) { %}7{% } else { %}9{% } %}\"><strong>File Name</strong></div>\r\n      <div class=\"col-md-2\"><strong>Size</strong></div>\r\n      {% if (self.hasTypes) { %}\r\n        <div class=\"col-md-2\"><strong>Type</strong></div>\r\n      {% } %}\r\n    </div>\r\n  </li>\r\n  {% files.forEach(function(file) { %}\r\n  <li class=\"list-group-item\">\r\n    <div class=\"row\">\r\n      {% if (!disabled) { %}\r\n      <div class=\"col-md-1\"><i class=\"{{iconClass('remove')}}\" ref=\"removeLink\"></i></div>\r\n      {% } %}\r\n      <div class=\"col-md-{% if (self.hasTypes) { %}7{% } else { %}9{% } %}\">\r\n        {% if (component.uploadOnly) { %}\r\n          {{file.originalName || file.name}}\r\n        {% } else { %}\r\n          <a href=\"{{file.url}}\" target=\"_blank\" ref=\"fileLink\">{{file.originalName || file.name}}</a>\r\n        {% } %}\r\n      </div>\r\n      <div class=\"col-md-2\">{{fileSize(file.size)}}</div>\r\n      {% if (self.hasTypes) { %}\r\n        <div class=\"col-md-2\">\r\n          <select class=\"file-type\">\r\n            {% component.fileTypes.map(function(type) { %}\r\n              <option class=\"test\" value=\"{{ type.value }}\" {% if (type.value === file.fileType) { %}selected=\"selected\"{% } %}>{{ type.label }}</option>\r\n            {% }); %}\r\n          </select>\r\n        </div>\r\n      {% } %}\r\n    </div>\r\n  </li>\r\n  {% }) %}\r\n</ul>\r\n{% } else { %}\r\n<div>\r\n  {% files.forEach(function(file) { %}\r\n  <div>\r\n    <span>\r\n      <img ref=\"fileImage\" src=\"\" alt=\"{{file.originalName || file.name}}\" style=\"width:{{component.imageSize}}px\" />\r\n      {% if (!disabled) { %}\r\n      <i class=\"{{iconClass('remove')}}\" ref=\"removeLink\"></i>\r\n      {% } %}\r\n    </span>\r\n  </div>\r\n  {% }) %}\r\n</div>\r\n{% } %}\r\n{% if (!disabled && (component.multiple || !files.length)) { %}\r\n<input type=\"file\" style=\"opacity: 0; position: absolute;\" tabindex=\"-1\" ref=\"hiddenFileInputElement\">\r\n{% if (self.useWebViewCamera) { %}\r\n<div class=\"fileSelector\">\r\n  <button class=\"btn btn-primary\" ref=\"galleryButton\"><i class=\"fa fa-book\"></i> Gallery</button>\r\n  <button class=\"btn btn-primary\" ref=\"cameraButton\"><i class=\"fa fa-camera\"></i> Camera</button>\r\n</div>\r\n{% } else if (!self.cameraMode) { %}\r\n<div class=\"fileSelector\" ref=\"fileDrop\">\r\n  <i class=\"{{iconClass('cloud-upload')}}\"></i> Drop files to attach, \r\n    {% if (component.image) { %}\r\n      <a href=\"#\" ref=\"toggleCameraMode\"><i class=\"fa fa-camera\"></i> Use Camera</a>, \r\n    {% } %}\r\n    or <a href=\"#\" ref=\"fileBrowse\" class=\"browse\">browse</a>\r\n</div>\r\n{% } else { %}\r\n<div>\r\n  <video class=\"video\" autoplay=\"true\" ref=\"videoPlayer\"></video>\r\n  <canvas style=\"display: none\" ref=\"videoCanvas\"></canvas>\r\n</div>\r\n<button class=\"btn btn-primary\" ref=\"takePictureButton\"><i class=\"fa fa-camera\"></i> Take Picture</button>\r\n<button class=\"btn btn-primary\" ref=\"toggleCameraMode\">Switch to file upload</button>\r\n{% } %}\r\n{% } %}\r\n{% statuses.forEach(function(status) { %}\r\n<div class=\"file {{statuses.status === 'error' ? ' has-error' : ''}}\">\r\n  <div class=\"row\">\r\n    <div class=\"fileName col-form-label col-sm-10\">{{status.originalName}} <i class=\"{{iconClass('remove')}}\" ref=\"fileStatusRemove\"></i></div>\r\n    <div class=\"fileSize col-form-label col-sm-2 text-right\">{{fileSize(status.size)}}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      {% if (status.status === 'progress') { %}\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"{{status.progress}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{status.progress}}\">\r\n          <span class=\"sr-only\">{{status.progress}}% Complete</span>\r\n        </div>\r\n      </div>\r\n      {% } else { %}\r\n      <div class=\"bg-{{status.status}}\">{{status.message}}</div>\r\n      {% } %}\r\n    </div>\r\n  </div>\r\n</div>\r\n{% }) %}\r\n{% if (!component.storage || support.hasWarning) { %}\r\n<div class=\"alert alert-warning\">\r\n  {% if (!component.storage) { %}\r\n    <p>No storage has been set for this field. File uploads are disabled until storage is set up.</p>\r\n  {% } %}\r\n  {% if (!support.filereader) { %}\r\n    <p>File API & FileReader API not supported.</p>\r\n  {% } %}\r\n  {% if (!support.formdata) { %}\r\n    <p>XHR2's FormData is not supported.</p>\r\n  {% } %}\r\n  {% if (!support.progress) { %}\r\n    <p>XHR2's upload progress isn't supported.</p>\r\n  {% } %}\r\n</div>\r\n{% } %}\r\n";
var _default = {
  form: form
};
exports.default = _default;