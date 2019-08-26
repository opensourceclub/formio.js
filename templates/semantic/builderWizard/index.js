"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"formio builder ui grid formbuilder\">\n  <div class=\"four wide column formcomponents\">\n    {{sidebar}}\n  </div>\n  <div class=\"twelve wide column formarea\">\n    <div class=\"ui breadcrumb\" style=\"margin-bottom: 0.5em\">\n      {% pages.forEach(function(page, pageIndex) { %}\n        <div title=\"{{page.title}}\" class=\"{% if (pageIndex === self.currentPage) { %} active section {% } else { %} section {% } %} wizard-page-label\" ref=\"gotoPage\">{{page.title}}</div>\n        <div class=\"divider\">/</div>\n      {% }) %}\n      <div title=\"{{t('Create Page')}}\" class=\"section wizard-page-label\" ref=\"addPage\"><i class=\"{{iconClass('plus')}}\"></i> {{t('Page')}}</div>\n    </div>\n    <div ref=\"form\">\n      {{form}}\n    </div>\n  </div>\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;