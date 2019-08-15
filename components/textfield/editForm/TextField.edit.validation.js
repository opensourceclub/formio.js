"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  weight: 110,
  key: 'validate.minLength',
  label: '最小长度',
  placeholder: '最小长度',
  type: 'number',
  tooltip: '该字段必须满足的最小长度要求',
  input: true
}, {
  weight: 120,
  key: 'validate.maxLength',
  label: '最大长度',
  placeholder: '最大长度',
  type: 'number',
  tooltip: '该字段必须满足的最大长度要求',
  input: true
}, {
  weight: 125,
  key: 'validate.minWords',
  label: '最小的单词数量',
  placeholder: '最小的单词数量',
  type: 'number',
  tooltip: '添加到此字段的最小单词数',
  input: true
}, {
  weight: 126,
  key: 'validate.maxWords',
  label: '最大的单词数量',
  placeholder: '最大的单词数量',
  type: 'number',
  tooltip: '添加到此字段的最大单词数',
  input: true
}, {
  weight: 130,
  key: 'validate.pattern',
  label: '正则表达式模式',
  placeholder: '正则表达式模式',
  type: 'textfield',
  tooltip: '在提交表单之前，字段值必须通过的正则表达式模式验证',
  input: true
}];
exports.default = _default;