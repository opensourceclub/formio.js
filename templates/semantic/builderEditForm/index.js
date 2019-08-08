"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui grid\">\r\n  <div class=\"eight wide column\">\r\n    <h3 class=\"lead\">{{componentInfo.title}} {{t('Component')}}</h3>\r\n  </div>\r\n  <div class=\"eight wide column\">\r\n    <div class=\"right floated\" style=\"margin-right: 20px; margin-top: 10px\">\r\n      <a href=\"{{componentInfo.documentation}}\" target=\"_blank\">\r\n        <i class=\"{{iconClass('new-window')}}\"> {{t('Help')}}</i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ui grid\">\r\n  <div class=\"eight wide column\">\r\n    <div ref=\"editForm\">\r\n        {{editForm}}\r\n    </div>\r\n  </div>\r\n  <div class=\"eight wide column\">\r\n    <div class=\"ui top attached block header\">\r\n      {{t('Preview')}}\r\n    </div>\r\n    <div class=\"ui bottom attached segment\" ref=\"preview\">\r\n      {{preview}}\r\n    </div>\r\n    <div style=\"margin-top: 10px;\">\r\n      <button class=\"ui button primary\" style=\"margin-right: 10px;\" ref=\"saveButton\">{{t('Save')}}</button>\r\n      <button class=\"ui button default\" style=\"margin-right: 10px;\" ref=\"cancelButton\">{{t('Cancel')}}</button>\r\n      <button class=\"ui button negative\" ref=\"removeButton\">{{t('Remove')}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;