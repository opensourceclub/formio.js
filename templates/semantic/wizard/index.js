"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"formio-wizard-position\">\n  <nav aria-label=\"navigation\">\n    <div class=\"ui steps\">\n      {% panels.forEach(function(panel, index) { %}\n      <a class=\"{{currentPage === index ? ' active' : ''}} step\" ref=\"{{wizardKey}}-link\">\n        <div class=\"content\">\n          <div class=\"title\">{{panel.title}}</div>\n        </div>\n      </a>\n      {% }) %}\n    </div>\n  </nav>\n  <div class=\"wizard-page\" ref=\"{{wizardKey}}\">\n    {{components}}\n  </div>\n  <div class=\"ui horizontal list\">\n    {% if (buttons.cancel) { %}\n    <div class=\"item\">\n      <button class=\"ui button secondary btn-wizard-nav-cancel\" ref=\"{{wizardKey}}-cancel\">{{t('cancel')}}</button>\n    </div>\n    {% } %}\n    {% if (buttons.previous) { %}\n    <div class=\"item\">\n      <button class=\"ui button primary btn-wizard-nav-previous\" ref=\"{{wizardKey}}-previous\">{{t('previous')}}</button>\n    </div>\n    {% } %}\n    {% if (buttons.next) { %}\n    <div class=\"item\">\n      <button class=\"ui button primary btn-wizard-nav-next\" ref=\"{{wizardKey}}-next\">{{t('next')}}</button>\n    </div>\n    {% } %}\n    {% if (buttons.submit) { %}\n    <div class=\"item\">\n      <button class=\"ui button primary btn-wizard-nav-submit\" ref=\"{{wizardKey}}-submit\">{{t('submit')}}</button>\n    </div>\n    {% } %}\n  </div>\n</div>\n";

/* babel-plugin-inline-import './builder.hbs' */
var builder = "<div class=\"formio-wizard-builder-component-title\">{{ t(component.title) }}</div>\n";
var _default = {
  form: form,
  builder: builder
};
exports.default = _default;