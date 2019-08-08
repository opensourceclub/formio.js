"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"formio builder ui grid formbuilder\">\r\n  <div class=\"four wide column formcomponents\">\r\n    {{sidebar}}\r\n  </div>\r\n  <div class=\"twelve wide column formarea\">\r\n    <div class=\"ui breadcrumb\" style=\"margin-bottom: 0.5em\">\r\n      {% pages.forEach(function(page, pageIndex) { %}\r\n        <div title=\"{{page.title}}\" class=\"{% if (pageIndex === self.currentPage) { %} active section {% } else { %} section {% } %} wizard-page-label\" ref=\"gotoPage\">{{page.title}}</div>\r\n        <div class=\"divider\">/</div>\r\n      {% }) %}\r\n      <div title=\"{{t('Create Page')}}\" class=\"section wizard-page-label\" ref=\"addPage\"><i class=\"{{iconClass('plus')}}\"></i> {{t('Page')}}</div>\r\n    </div>\r\n    <div ref=\"form\">\r\n      {{form}}\r\n    </div>\r\n  </div>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;