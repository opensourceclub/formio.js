"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"builder-component\" ref=\"dragComponent\">\n  <div class=\"component-btn-group\">\n    <div class=\"btn btn-xxs btn-danger component-settings-button component-settings-button-remove\" ref=\"removeComponent\">\n      <i class=\"{{iconClass('remove')}}\"></i>\n    </div>\n    <div class=\"btn btn-xxs btn-default component-settings-button component-settings-button-copy\" ref=\"copyComponent\">\n      <i class=\"{{iconClass('copy')}}\"></i>\n    </div>\n    <div class=\"btn btn-xxs btn-default component-settings-button component-settings-button-paste\" ref=\"pasteComponent\">\n      <i class=\"{{iconClass('save')}}\"></i>\n    </div>\n    <div class=\"btn btn-xxs btn-default component-settings-button component-settings-button-move\" ref=\"moveComponent\">\n      <i class=\"{{iconClass('move')}}\"></i>\n    </div>\n    <div class=\"btn btn-xxs btn-secondary component-settings-button component-settings-button-edit\", ref=\"editComponent\">\n      <i class=\"{{iconClass('cog')}}\"></i>\n    </div>\n  </div>\n  {{html}}\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;