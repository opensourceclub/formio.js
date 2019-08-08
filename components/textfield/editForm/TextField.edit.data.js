"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  type: 'select',
  label: '输入格式',
  key: 'inputFormat',
  weight: 105,
  placeholder: '输入格式',
  tooltip: '强制以特定格式对该字段进行格式化输出',
  template: '<span>{{ item.label }}</span>',
  data: {
    values: [{
      value: 'plain',
      label: '无格式'
    }, {
      value: 'html',
      label: 'HTML'
    }, {
      value: 'raw',
      label: '原始(不安全)'
    }]
  },
  defaultValue: 'plain',
  input: true
}];
exports.default = _default;