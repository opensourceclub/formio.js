"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui grid\">\n  <div class=\"eight wide column\">\n    <h3 class=\"lead\">{{componentInfo.title}} {{t('Component')}}</h3>\n  </div>\n  <div class=\"eight wide column\">\n    <div class=\"right floated\" style=\"margin-right: 20px; margin-top: 10px\">\n      <a href=\"{{componentInfo.documentation}}\" target=\"_blank\">\n        <i class=\"{{iconClass('new-window')}}\"> {{t('Help')}}</i>\n      </a>\n    </div>\n  </div>\n</div>\n<div class=\"ui grid\">\n  <div class=\"eight wide column\">\n    <div ref=\"editForm\">\n        {{editForm}}\n    </div>\n  </div>\n  <div class=\"eight wide column\">\n    <div class=\"ui top attached block header\">\n      {{t('Preview')}}\n    </div>\n    <div class=\"ui bottom attached segment\" ref=\"preview\">\n      {{preview}}\n    </div>\n    <div style=\"margin-top: 10px;\">\n      <button class=\"ui button primary\" style=\"margin-right: 10px;\" ref=\"saveButton\">{{t('Save')}}</button>\n      <button class=\"ui button default\" style=\"margin-right: 10px;\" ref=\"cancelButton\">{{t('Cancel')}}</button>\n      <button class=\"ui button negative\" ref=\"removeButton\">{{t('Remove')}}</button>\n    </div>\n  </div>\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;