"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"row\">\r\n  <div class=\"col col-sm-6\">\r\n    <p class=\"lead\">{{componentInfo.title}} {{t('\u63A7\u4EF6')}}</p>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col col-sm-6\">\r\n    <div ref=\"editForm\">\r\n        {{editForm}}\r\n    </div>\r\n  </div>\r\n  <div class=\"col col-sm-6\">\r\n    <div class=\"card panel preview-panel\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title mb-0\">{{t('\u9884\u89C8')}}</h4>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"component-preview\" ref=\"preview\">\r\n          {{preview}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div style=\"margin-top: 10px;\">\r\n      <button class=\"btn btn-success\" style=\"margin-right: 10px;\" ref=\"saveButton\">{{t('\u4FDD\u5B58')}}</button>\r\n      <button class=\"btn btn-secondary\" style=\"margin-right: 10px;\" ref=\"cancelButton\">{{t('\u53D6\u6D88')}}</button>\r\n      <button class=\"btn btn-danger\" ref=\"removeButton\">{{t('\u5220\u9664')}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;