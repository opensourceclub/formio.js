"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"row\">\n  <div class=\"col col-sm-6\">\n    <p class=\"lead\">{{componentInfo.title}} {{t('Component')}}</p>\n  </div>\n  <div class=\"col col-sm-6\">\n    <div class=\"pull-right\" style=\"margin-right: 20px; margin-top: 10px\">\n      <a href=\"{{componentInfo.documentation}}\" target=\"_blank\">\n        <i class=\"{{iconClass('new-window')}}\"> {{t('Help')}}</i>\n      </a>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col col-sm-6\">\n    <div ref=\"editForm\">\n        {{editForm}}\n    </div>\n  </div>\n  <div class=\"col col-sm-6\">\n    <div class=\"panel panel-default preview-panel\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">{{t('Preview')}}</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"component-preview\" ref=\"preview\">\n          {{preview}}\n        </div>\n      </div>\n    </div>\n    <div style=\"margin-top: 10px;\">\n      <button class=\"btn btn-success\" style=\"margin-right: 10px;\" ref=\"saveButton\">{{t('Save')}}</button>\n      <button class=\"btn btn-default\" style=\"margin-right: 10px;\" ref=\"cancelButton\">{{t('Cancel')}}</button>\n      <button class=\"btn btn-danger\" ref=\"removeButton\">{{t('Remove')}}</button>\n    </div>\n  </div>\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;