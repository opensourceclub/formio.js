"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: 'placeholder',
  ignore: true
}, {
  type: 'select',
  input: true,
  label: '可选标签位置',
  key: 'optionsLabelPosition',
  tooltip: '此字段可选标签的位置',
  dataSrc: 'values',
  weight: 32,
  defaultValue: 'right',
  data: {
    values: [{
      label: '顶部',
      value: 'top'
    }, {
      label: '左边',
      value: 'left'
    }, {
      label: '右边',
      value: 'right'
    }, {
      label: '底部',
      value: 'bottom'
    }]
  }
}, {
  type: 'checkbox',
  input: true,
  key: 'inline',
  label: '行内显示',
  tooltip: '水平显示复选控件/单选控件',
  weight: 650
}];
exports.default = _default;