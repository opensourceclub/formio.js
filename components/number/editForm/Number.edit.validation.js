"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: 'unique',
  ignore: true
}, {
  key: 'validate.minLength',
  ignore: true
}, {
  key: 'validate.maxLength',
  ignore: true
}, {
  key: 'validate.minWords',
  ignore: true
}, {
  key: 'validate.maxWords',
  ignore: true
}, {
  key: 'validate.pattern',
  ignore: true
}, {
  type: 'number',
  label: '最小值',
  key: 'validate.min',
  input: true,
  placeholder: '最小值',
  tooltip: '此字段的最小输入',
  weight: 150
}, {
  type: 'number',
  label: '最大值',
  key: 'validate.max',
  input: true,
  placeholder: '最大值',
  tooltip: '此字段的最大输入',
  weight: 160
}];
exports.default = _default;