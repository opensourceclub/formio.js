"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  wieght: 200,
  type: 'select',
  datasrc: 'values',
  key: 'fields.month.type',
  title: 'Type',
  data: {
    values: [{
      label: '数字',
      value: 'number'
    }, {
      label: '选择',
      value: 'select'
    }]
  }
}, {
  weight: 210,
  type: 'textfield',
  input: true,
  key: 'fields.month.placeholder',
  label: '占位符',
  placeholder: '月份占位符',
  tooltip: '当月份字段为空时将出现的占位符文本'
}, {
  weight: 215,
  type: 'checkbox',
  label: 'Hidden',
  tooltip: '隐藏组件的月份部分',
  key: 'fields.month.hide',
  input: true
}];
exports.default = _default;