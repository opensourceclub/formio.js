"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div style=\"position: relative;\">\n  <nav aria-label=\"navigation\">\n    <ul class=\"pagination\">\n      {% panels.forEach(function(panel, index) { %}\n      <li class=\"page-item{{currentPage === index ? ' active' : ''}}\" style=\"\">\n        <span class=\"page-link\" ref=\"{{wizardKey}}-link\">{{panel.title}}</span>\n      </li>\n      {% }) %}\n    </ul>\n  </nav>\n  <div class=\"wizard-page\" ref=\"{{wizardKey}}\">\n    {{components}}\n  </div>\n  <ul class=\"list-inline\">\n    {% if (buttons.cancel) { %}\n    <li class=\"list-inline-item\">\n      <button class=\"btn btn-default btn-wizard-nav-cancel\" ref=\"{{wizardKey}}-cancel\">{{t('cancel')}}</button>\n    </li>\n    {% } %}\n    {% if (buttons.previous) { %}\n    <li class=\"list-inline-item\">\n      <button class=\"btn btn-primary btn-wizard-nav-previous\" ref=\"{{wizardKey}}-previous\">{{t('previous')}}</button>\n    </li>\n    {% } %}\n    {% if (buttons.next) { %}\n    <li class=\"list-inline-item\">\n      <button class=\"btn btn-primary btn-wizard-nav-next\" ref=\"{{wizardKey}}-next\">{{t('next')}}</button>\n    </li>\n    {% } %}\n    {% if (buttons.submit) { %}\n    <li class=\"list-inline-item\">\n      <button class=\"btn btn-primary btn-wizard-nav-submit\" ref=\"{{wizardKey}}-submit\">{{t('submit')}}</button>\n    </li>\n    {% } %}\n  </ul>\n</div>\n";

/* babel-plugin-inline-import './builder.hbs' */
var builder = "<div class=\"text-muted text-center\">{{ t(component.title) }}</div>\n";
var _default = {
  form: form,
  builder: builder
};
exports.default = _default;