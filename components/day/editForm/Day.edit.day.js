"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  wieght: 200,
  type: 'select',
  datasrc: 'values',
  key: 'fields.day.type',
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
  key: 'fields.day.placeholder',
  label: '占位符',
  placeholder: '占位符',
  tooltip: '当"日"字段为空时将出现的占位符文本'
}, {
  weight: 215,
  type: 'checkbox',
  label: '隐藏',
  tooltip: '当"日"字段为空时将出现的占位符文本',
  key: 'fields.day.hide',
  input: true
}, {
  weight: 214,
  type: 'checkbox',
  label: '日在前',
  tooltip: '在"月"字段之前显示"日"字段。',
  key: 'dayFirst',
  input: true
}];
exports.default = _default;