"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"builder-component\" ref=\"dragComponent\">\r\n  <div class=\"component-btn-group\">\r\n    <div class=\"ui button mini icon primary component-settings-button-edit\", ref=\"editComponent\">\r\n      <i class=\"{{iconClass('cog')}}\"></i>\r\n    </div>\r\n    <div class=\"ui button mini icon component-settings-button-copy\" ref=\"copyComponent\">\r\n      <i class=\"{{iconClass('copy')}}\"></i>\r\n    </div>\r\n    <div class=\"ui button mini icon component-settings-button-paste\" ref=\"pasteComponent\">\r\n      <i class=\"{{iconClass('save')}}\"></i>\r\n    </div>\r\n    <div class=\"ui button mini icon component-settings-button-move\" ref=\"moveComponent\">\r\n      <i class=\"{{iconClass('move')}}\"></i>\r\n    </div>\r\n    <div class=\"ui button mini icon secondary component-settings-button-remove\" ref=\"removeComponent\">\r\n      <i class=\"{{iconClass('remove')}}\"></i>\r\n    </div>\r\n  </div>\r\n  {{html}}\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;