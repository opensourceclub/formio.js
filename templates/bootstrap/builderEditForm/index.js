"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"row\">\n  <div class=\"col col-sm-6\">\n    <p class=\"lead\">{{componentInfo.title}} {{t('\u63A7\u4EF6')}}</p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col col-sm-6\">\n    <div ref=\"editForm\">\n        {{editForm}}\n    </div>\n  </div>\n  <div class=\"col col-sm-6\">\n    <div class=\"card panel preview-panel\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title mb-0\">{{t('\u9884\u89C8')}}</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"component-preview\" ref=\"preview\">\n          {{preview}}\n        </div>\n      </div>\n    </div>\n    <div style=\"margin-top: 10px;\">\n      <button class=\"btn btn-success\" style=\"margin-right: 10px;\" ref=\"saveButton\">{{t('\u4FDD\u5B58')}}</button>\n      <button class=\"btn btn-secondary\" style=\"margin-right: 10px;\" ref=\"cancelButton\">{{t('\u53D6\u6D88')}}</button>\n      <button class=\"btn btn-danger\" ref=\"removeButton\">{{t('\u5220\u9664')}}</button>\n    </div>\n  </div>\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;