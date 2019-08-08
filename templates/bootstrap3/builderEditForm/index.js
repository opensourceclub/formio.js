"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"row\">\r\n  <div class=\"col col-sm-6\">\r\n    <p class=\"lead\">{{componentInfo.title}} {{t('Component')}}</p>\r\n  </div>\r\n  <div class=\"col col-sm-6\">\r\n    <div class=\"pull-right\" style=\"margin-right: 20px; margin-top: 10px\">\r\n      <a href=\"{{componentInfo.documentation}}\" target=\"_blank\">\r\n        <i class=\"{{iconClass('new-window')}}\"> {{t('Help')}}</i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col col-sm-6\">\r\n    <div ref=\"editForm\">\r\n        {{editForm}}\r\n    </div>\r\n  </div>\r\n  <div class=\"col col-sm-6\">\r\n    <div class=\"panel panel-default preview-panel\">\r\n      <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">{{t('Preview')}}</h3>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"component-preview\" ref=\"preview\">\r\n          {{preview}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div style=\"margin-top: 10px;\">\r\n      <button class=\"btn btn-success\" style=\"margin-right: 10px;\" ref=\"saveButton\">{{t('Save')}}</button>\r\n      <button class=\"btn btn-default\" style=\"margin-right: 10px;\" ref=\"cancelButton\">{{t('Cancel')}}</button>\r\n      <button class=\"btn btn-danger\" ref=\"removeButton\">{{t('Remove')}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;