"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  wieght: 200,
  type: 'select',
  datasrc: 'values',
  key: 'fields.year.type',
  title: 'Type',
  data: {
    values: [{
      label: 'Number',
      value: 'number'
    }, {
      label: 'Select',
      value: 'select'
    }]
  }
}, {
  weight: 203,
  type: 'number',
  input: true,
  key: 'fields.year.minYear',
  label: '最小年份',
  placeholder: '1900',
  tooltip: '可以输入的最小年份'
}, {
  weight: 204,
  type: 'number',
  input: true,
  key: 'fields.year.maxYear',
  label: '最大年份',
  placeholder: '2030',
  tooltip: '可以输入的最大年份'
}, {
  weight: 210,
  type: 'textfield',
  input: true,
  key: 'fields.year.placeholder',
  label: '占位符',
  placeholder: '年份占位符',
  tooltip: '当年份字段为空时将出现的占位符文本'
}, {
  weight: 215,
  type: 'checkbox',
  label: '隐藏',
  tooltip: '隐藏组件的年份部分',
  key: 'fields.year.hide',
  input: true
}];
exports.default = _default;