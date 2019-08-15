"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div style=\"position: relative;\">\r\n  <nav aria-label=\"navigation\">\r\n    <ul class=\"pagination\">\r\n      {% panels.forEach(function(panel, index) { %}\r\n      <li class=\"page-item{{currentPage === index ? ' active' : ''}}\" style=\"\">\r\n        <span class=\"page-link\" ref=\"{{wizardKey}}-link\">{{panel.title}}</span>\r\n      </li>\r\n      {% }) %}\r\n    </ul>\r\n  </nav>\r\n  <div class=\"wizard-page\" ref=\"{{wizardKey}}\">\r\n    {{components}}\r\n  </div>\r\n  <ul class=\"list-inline\">\r\n    {% if (buttons.cancel) { %}\r\n    <li class=\"list-inline-item\">\r\n      <button class=\"btn btn-default btn-wizard-nav-cancel\" ref=\"{{wizardKey}}-cancel\">{{t('cancel')}}</button>\r\n    </li>\r\n    {% } %}\r\n    {% if (buttons.previous) { %}\r\n    <li class=\"list-inline-item\">\r\n      <button class=\"btn btn-primary btn-wizard-nav-previous\" ref=\"{{wizardKey}}-previous\">{{t('previous')}}</button>\r\n    </li>\r\n    {% } %}\r\n    {% if (buttons.next) { %}\r\n    <li class=\"list-inline-item\">\r\n      <button class=\"btn btn-primary btn-wizard-nav-next\" ref=\"{{wizardKey}}-next\">{{t('next')}}</button>\r\n    </li>\r\n    {% } %}\r\n    {% if (buttons.submit) { %}\r\n    <li class=\"list-inline-item\">\r\n      <button class=\"btn btn-primary btn-wizard-nav-submit\" ref=\"{{wizardKey}}-submit\">{{t('submit')}}</button>\r\n    </li>\r\n    {% } %}\r\n  </ul>\r\n</div>\r\n";

/* babel-plugin-inline-import './builder.hbs' */
var builder = "<div class=\"text-muted text-center\">{{ t(component.title) }}</div>\r\n";
var _default = {
  form: form,
  builder: builder
};
exports.default = _default;