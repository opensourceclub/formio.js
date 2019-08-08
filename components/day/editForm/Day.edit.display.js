"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: 'labelPosition',
  ignore: true
}, {
  weight: 15,
  type: 'checkbox',
  label: '隐藏输入标签',
  tooltip: '隐藏组件输入的标签。这允许您在表单生成器中显示标签，但不会在渲染时显示。',
  key: 'hideInputLabels',
  input: true
}, {
  type: 'select',
  input: true,
  key: 'inputsLabelPosition',
  label: '输入标签位置',
  tooltip: '此字段输入的标签的位置',
  weight: 40,
  defaultValue: 'top',
  dataSrc: 'values',
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
  key: 'placeholder',
  ignore: true
}, {
  weight: 213,
  type: 'checkbox',
  label: '使用本地环境设置',
  tooltip: '使用本地区域设置来显示日期',
  key: 'useLocaleSettings',
  input: true
}];
exports.default = _default;