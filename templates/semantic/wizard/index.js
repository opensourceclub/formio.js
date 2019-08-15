"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"formio-wizard-position\">\r\n  <nav aria-label=\"navigation\">\r\n    <div class=\"ui steps\">\r\n      {% panels.forEach(function(panel, index) { %}\r\n      <a class=\"{{currentPage === index ? ' active' : ''}} step\" ref=\"{{wizardKey}}-link\">\r\n        <div class=\"content\">\r\n          <div class=\"title\">{{panel.title}}</div>\r\n        </div>\r\n      </a>\r\n      {% }) %}\r\n    </div>\r\n  </nav>\r\n  <div class=\"wizard-page\" ref=\"{{wizardKey}}\">\r\n    {{components}}\r\n  </div>\r\n  <div class=\"ui horizontal list\">\r\n    {% if (buttons.cancel) { %}\r\n    <div class=\"item\">\r\n      <button class=\"ui button secondary btn-wizard-nav-cancel\" ref=\"{{wizardKey}}-cancel\">{{t('cancel')}}</button>\r\n    </div>\r\n    {% } %}\r\n    {% if (buttons.previous) { %}\r\n    <div class=\"item\">\r\n      <button class=\"ui button primary btn-wizard-nav-previous\" ref=\"{{wizardKey}}-previous\">{{t('previous')}}</button>\r\n    </div>\r\n    {% } %}\r\n    {% if (buttons.next) { %}\r\n    <div class=\"item\">\r\n      <button class=\"ui button primary btn-wizard-nav-next\" ref=\"{{wizardKey}}-next\">{{t('next')}}</button>\r\n    </div>\r\n    {% } %}\r\n    {% if (buttons.submit) { %}\r\n    <div class=\"item\">\r\n      <button class=\"ui button primary btn-wizard-nav-submit\" ref=\"{{wizardKey}}-submit\">{{t('submit')}}</button>\r\n    </div>\r\n    {% } %}\r\n  </div>\r\n</div>\r\n";

/* babel-plugin-inline-import './builder.hbs' */
var builder = "<div class=\"formio-wizard-builder-component-title\">{{ t(component.title) }}</div>\r\n";
var _default = {
  form: form,
  builder: builder
};
exports.default = _default;