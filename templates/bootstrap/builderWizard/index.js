"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"formio builder row formbuilder\">\r\n  <div class=\"col-xs-4 col-sm-3 col-md-2 formcomponents\">\r\n    {{sidebar}}\r\n  </div>\r\n  <div class=\"col-xs-8 col-sm-9 col-md-10 formarea\">\r\n    <ol class=\"breadcrumb\">\r\n      {% pages.forEach(function(page, pageIndex) { %}\r\n      <li>\r\n        <span title=\"{{page.title}}\" class=\"mr-2 badge {% if (pageIndex === self.currentPage) { %}badge-primary{% } else { %}badge-info{% } %} wizard-page-label\" ref=\"gotoPage\">{{page.title}}</span>\r\n      </li>\r\n      {% }) %}\r\n      <li>\r\n        <span title=\"{{t('\u521B\u5EFA\u9875\u9762')}}\" class=\"mr-2 badge badge-success wizard-page-label\" ref=\"addPage\">\r\n          <i class=\"{{iconClass('plus')}}\"></i> {{t('\u9875\u9762')}}\r\n        </span>\r\n      </li>\r\n    </ol>\r\n    <div ref=\"form\">\r\n      {{form}}\r\n    </div>\r\n  </div>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;