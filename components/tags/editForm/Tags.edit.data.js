"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: 'multiple',
  ignore: true
}, {
  weight: 20,
  type: 'textfield',
  input: true,
  key: 'delimeter',
  label: '分隔符',
  tooltip: '用来分隔标签.</a>'
}, {
  weight: 22,
  type: 'number',
  input: true,
  key: 'maxTags',
  label: '最大标签数',
  defaultValue: 0,
  tooltip: '可以添加的标记的最大数量；0为无穷大'
}, {
  weight: 24,
  type: 'select',
  input: true,
  key: 'storeas',
  label: '存储为',
  dataSrc: 'values',
  data: {
    values: [{
      label: '字符串 (CSV)',
      value: 'string'
    }, {
      label: '标签组',
      value: 'array'
    }]
  }
}];
exports.default = _default;