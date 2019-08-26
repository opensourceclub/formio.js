"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "{% if (!component.image) { %}\n<ul class=\"list-group list-group-striped\">\n  <li class=\"list-group-item list-group-header hidden-xs hidden-sm\">\n    <div class=\"row\">\n      {% if (!disabled) { %}\n      <div class=\"col-md-1\"></div>\n      {% } %}\n      <div class=\"col-md-{% if (self.hasTypes) { %}7{% } else { %}9{% } %}\"><strong>File Name</strong></div>\n      <div class=\"col-md-2\"><strong>Size</strong></div>\n      {% if (self.hasTypes) { %}\n        <div class=\"col-md-2\"><strong>Type</strong></div>\n      {% } %}\n    </div>\n  </li>\n  {% files.forEach(function(file) { %}\n  <li class=\"list-group-item\">\n    <div class=\"row\">\n      {% if (!disabled) { %}\n      <div class=\"col-md-1\"><i class=\"{{iconClass('remove')}}\" ref=\"removeLink\"></i></div>\n      {% } %}\n      <div class=\"col-md-9\">\n        {% if (component.uploadOnly) { %}\n          {{file.originalName || file.name}}\n        {% } else { %}\n          <a href=\"{{file.url}}\" target=\"_blank\" ref=\"fileLink\">{{file.originalName || file.name}}</a>\n        {% } %}\n      </div>\n      <div class=\"col-md-2\">{{fileSize(file.size)}}</div>\n      {% if (self.hasTypes) { %}\n        <div class=\"col-md-2\">\n          <select class=\"file-type\">\n            {% component.fileTypes.map(function(type) { %}\n              <option class=\"test\" value=\"{{ type.value }}\" {% if (type.value === file.fileType) { %}selected=\"selected\"{% } %}>{{ type.label }}</option>\n            {% }); %}\n          </select>\n        </div>\n      {% } %}\n    </div>\n  </li>\n  {% }) %}\n</ul>\n{% } else { %}\n<div>\n  {% files.forEach(function(file) { %}\n  <div>\n    <span>\n      <img ref=\"fileImage\" src=\"\" alt=\"{{file.originalName || file.name}}\" style=\"width:{{component.imageSize}}px\" />\n      {% if (!disabled) { %}\n      <i class=\"{{iconClass('remove')}}\" ref=\"removeLink\"></i>\n      {% } %}\n    </span>\n  </div>\n  {% }) %}\n</div>\n{% } %}\n{% if (!disabled && (component.multiple || !files.length)) { %}\n<input type=\"file\" style=\"opacity: 0; position: absolute;\" tabindex=\"-1\" ref=\"hiddenFileInputElement\">\n{% if (self.useWebViewCamera) { %}\n<div class=\"fileSelector\">\n  <button class=\"btn btn-primary\" ref=\"galleryButton\"><i class=\"fa fa-book\"></i> Gallery</button>\n  <button class=\"btn btn-primary\" ref=\"cameraButton\"><i class=\"fa fa-camera\"></i> Camera</button>\n</div>\n{% } else if (!self.cameraMode) { %}\n<div class=\"fileSelector\" ref=\"fileDrop\">\n  <i class=\"{{iconClass('cloud-upload')}}\"></i> Drop files to attach, \n    {% if (component.image) { %}\n      <a href=\"#\" ref=\"toggleCameraMode\"><i class=\"fa fa-camera\"></i> Use Camera</a>, \n    {% } %}\n    or <a href=\"#\" ref=\"fileBrowse\" class=\"browse\">browse</a>\n</div>\n{% } else { %}\n<div>\n  <video class=\"video\" autoplay=\"true\" ref=\"videoPlayer\"></video>\n  <canvas style=\"display: none\" ref=\"videoCanvas\"></canvas>\n</div>\n<button class=\"btn btn-primary\" ref=\"takePictureButton\"><i class=\"fa fa-camera\"></i> Take Picture</button>\n<button class=\"btn btn-primary\" ref=\"toggleCameraMode\">Switch to file upload</button>\n{% } %}\n{% } %}\n{% statuses.forEach(function(status) { %}\n<div class=\"file {{statuses.status === 'error' ? ' has-error' : ''}}\">\n  <div class=\"row\">\n    <div class=\"fileName control-label col-sm-10\">{{status.originalName}} <i class=\"{{iconClass('remove')}}\" ref=\"fileStatusRemove\"></i></div>\n    <div class=\"fileSize control-label col-sm-2 text-right\">{{fileSize(status.size)}}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      {% if (status.status === 'progress') { %}\n      <div class=\"progress\">\n        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"{{status.progress}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{status.progress}}\">\n          <span class=\"sr-only\">{{status.progress}}% Complete</span>\n        </div>\n      </div>\n      {% } else { %}\n      <div class=\"bg-{{status.status}}\">{{status.message}}</div>\n      {% } %}\n    </div>\n  </div>\n</div>\n{% }) %}\n{% if (!component.storage || support.hasWarning) { %}\n<div class=\"alert alert-warning\">\n  {% if (!component.storage) { %}\n    <p>No storage has been set for this field. File uploads are disabled until storage is set up.</p>\n  {% } %}\n  {% if (!support.filereader) { %}\n    <p>File API & FileReader API not supported.</p>\n  {% } %}\n  {% if (!support.formdata) { %}\n    <p>XHR2's FormData is not supported.</p>\n  {% } %}\n  {% if (!support.progress) { %}\n    <p>XHR2's upload progress isn't supported.</p>\n  {% } %}\n</div>\n{% } %}\n";
var _default = {
  form: form
};
exports.default = _default;