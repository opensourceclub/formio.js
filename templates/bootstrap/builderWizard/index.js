"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"formio builder row formbuilder\">\n  <div class=\"col-xs-4 col-sm-3 col-md-2 formcomponents\">\n    {{sidebar}}\n  </div>\n  <div class=\"col-xs-8 col-sm-9 col-md-10 formarea\">\n    <ol class=\"breadcrumb\">\n      {% pages.forEach(function(page, pageIndex) { %}\n      <li>\n        <span title=\"{{page.title}}\" class=\"mr-2 badge {% if (pageIndex === self.currentPage) { %}badge-primary{% } else { %}badge-info{% } %} wizard-page-label\" ref=\"gotoPage\">{{page.title}}</span>\n      </li>\n      {% }) %}\n      <li>\n        <span title=\"{{t('\u521B\u5EFA\u9875\u9762')}}\" class=\"mr-2 badge badge-success wizard-page-label\" ref=\"addPage\">\n          <i class=\"{{iconClass('plus')}}\"></i> {{t('\u9875\u9762')}}\n        </span>\n      </li>\n    </ol>\n    <div ref=\"form\">\n      {{form}}\n    </div>\n  </div>\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;