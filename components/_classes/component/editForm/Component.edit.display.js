"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable max-len */
var _default = [{
  weight: 0,
  type: 'textfield',
  input: true,
  key: 'label',
  label: '标签',
  placeholder: '标签文本',
  tooltip: '用于显示在控件上的标签文本',
  validate: {
    required: true
  }
}, {
  type: 'select',
  input: true,
  key: 'labelPosition',
  label: '标签位置',
  tooltip: '标签字段的位置',
  weight: 20,
  defaultValue: 'top',
  dataSrc: 'values',
  data: {
    values: [{
      label: '顶部',
      value: 'top'
    }, {
      label: '底部',
      value: 'bottom'
    }]
  }
}, {
  weight: 100,
  type: 'textfield',
  input: true,
  key: 'placeholder',
  label: '占位符',
  placeholder: '占位文本',
  tooltip: '字段为空时将出现的占位符文本'
}, {
  weight: 200,
  type: 'textfield',
  input: true,
  key: 'description',
  label: '描述',
  placeholder: '字段的描述',
  tooltip: '将出现在输入字段下方的描述文本。'
}, {
  weight: 300,
  type: 'textarea',
  input: true,
  key: 'tooltip',
  label: '提示文本',
  placeholder: '添加提示，请在这里输入文本',
  tooltip: '在此字段的旁添加提示'
}, {
  weight: 500,
  type: 'textfield',
  input: true,
  key: 'customClass',
  label: '自定义CSS Class',
  placeholder: '自定义CSS Class',
  tooltip: '添加自定义CSS Class到该组件'
}, {
  weight: 600,
  type: 'textfield',
  input: true,
  key: 'tabindex',
  label: ' tab 序列',
  placeholder: '0',
  tooltip: '设置此组件的tabindex属性以覆盖表单的Tab顺序. 参考 <a href=\\\'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\\\'>MDN 文档</a> 获取 tabindex 更多信息'
}, {
  weight: 1100,
  type: 'checkbox',
  label: '隐藏',
  tooltip: '隐藏字段仍然是表单的一部分，但是隐藏在视图之外。',
  key: 'hidden',
  input: true
}, {
  weight: 1200,
  type: 'checkbox',
  label: '隐藏标签',
  tooltip: '隐藏此组件的标签。这允许您在表单构建器中显示标签，但在渲染时不显示。',
  key: 'hideLabel',
  input: true
}, {
  weight: 1350,
  type: 'checkbox',
  label: '初始聚焦',
  tooltip: '使该字段成为表单上最初聚焦的元素',
  key: 'autofocus',
  input: true
}, {
  weight: 1370,
  type: 'checkbox',
  label: '在数据表格中显示标签',
  tooltip: '在数据表格中显示标签',
  key: 'dataGridLabel',
  input: true,
  customConditional: 'show = instance.root.editComponent.inDataGrid'
}, {
  weight: 1400,
  type: 'checkbox',
  label: '不可编辑',
  tooltip: '不可编辑',
  key: 'disabled',
  input: true
}];
/* eslint-enable max-len */

exports.default = _default;