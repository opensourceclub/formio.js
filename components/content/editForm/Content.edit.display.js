"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: 'labelPosition',
  ignore: true
}, {
  key: 'placeholder',
  ignore: true
}, {
  key: 'description',
  ignore: true
}, {
  key: 'tooltip',
  ignore: true
}, {
  key: 'hideLabel',
  ignore: true
}, {
  key: 'autofocus',
  ignore: true
}, {
  key: 'disabled',
  ignore: true
}, {
  key: 'alwaysEnabled',
  ignore: true
}, {
  key: 'tabindex',
  ignore: true
}, {
  weight: 10,
  type: 'textarea',
  editor: 'ckeditor',
  label: 'Content',
  input: true,
  key: 'html',
  as: 'html',
  rows: 3,
  tooltip: 'The HTML template for the result data items.'
}, {
  weight: 700,
  type: 'checkbox',
  label: 'Refresh On Change',
  tooltip: 'Rerender the field whenever a value on the form changes.',
  key: 'refreshOnChange',
  input: true
}];
exports.default = _default;