"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// import EditFormUtils from './utils';

/* eslint-disable max-len */
var _default = [{
  weight: 0,
  type: 'checkbox',
  label: '多个值',
  tooltip: '允许该字段输入多个值',
  key: 'multiple',
  input: true
}, {
  type: 'textfield',
  label: '默认值',
  key: 'defaultValue',
  weight: 20,
  placeholder: '默认值',
  tooltip: '在用户交互之前，将是该字段的值。具有默认值将覆盖占位符文本',
  input: true
}, {
  weight: 30,
  type: 'radio',
  label: '持久化',
  tooltip: '提交表单时，持久性字段将存储在数据库中',
  key: 'persistent',
  input: true,
  inline: true,
  defaultValue: true,
  values: [{
    label: '否',
    value: false
  }, {
    label: '服务端',
    value: true
  }, {
    label: '仅客户端',
    value: 'client-only'
  }]
}, {
  weight: 40,
  type: 'checkbox',
  label: '受保护',
  tooltip: '当通过API查询受保护字段时，将不会返回该字段',
  key: 'protected',
  input: true
}, {
  weight: 400,
  type: 'checkbox',
  label: '加密',
  tooltip: '在服务器上加密此字段。这是一种不适合密码的双向加密',
  key: 'encrypted',
  input: true
}, {
  type: 'checkbox',
  input: true,
  weight: 200,
  key: 'dbIndex',
  label: '数据库索引',
  tooltip: '将此字段设置为数据库中的索引。提高提交查询的性能'
}, {
  weight: 700,
  type: 'checkbox',
  label: '隐藏时清除',
  key: 'clearOnHide',
  defaultValue: true,
  tooltip: '当字段被隐藏时，清除该值',
  input: true
}, // EditFormUtils.javaScriptValue('Custom Default Value', 'customDefaultValue', 'customDefaultValue', 1000,
//   '<p><h4>Example:</h4><pre>value = data.firstName + " " + data.lastName;</pre></p>',
//   '<p><h4>Example:</h4><pre>{"cat": [{"var": "data.firstName"}, " ", {"var": "data.lastName"}]}</pre>'
// ),
// EditFormUtils.javaScriptValue('Calculated Value', 'calculateValue', 'calculateValue', 1100,
//   '<p><h4>Example:</h4><pre>value = data.a + data.b + data.c;</pre></p>',
//   '<p><h4>Example:</h4><pre>{"sum": [{"var": "data.a"}, {"var": "data.b"}, {"var": "data.c"}]}</pre><p><a target="_blank" href="http://formio.github.io/formio.js/app/examples/calculated.html">Click here for an example</a></p>'
// ),
{
  type: 'checkbox',
  input: true,
  weight: 1200,
  key: 'allowCalculateOverride',
  label: '允许手动覆盖计算值',
  tooltip: '选中此选项后，将允许用户手动覆盖计算值'
}];
/* eslint-enable max-len */

exports.default = _default;