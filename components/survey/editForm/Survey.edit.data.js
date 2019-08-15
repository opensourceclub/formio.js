"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: 'multiple',
  ignore: true
}, {
  type: 'datagrid',
  input: true,
  label: '问题',
  key: 'questions',
  tooltip: '你想在这个调查问卷中问的问题。',
  weight: 0,
  reorder: true,
  defaultValue: [{
    label: '',
    value: ''
  }],
  components: [{
    label: '标签',
    key: 'label',
    input: true,
    type: 'textfield'
  }, {
    label: '值',
    key: 'value',
    input: true,
    type: 'textfield',
    allowCalculateOverride: true,
    calculateValue: {
      _camelCase: [{
        var: 'row.label'
      }]
    }
  }]
}, {
  type: 'datagrid',
  input: true,
  label: '多值',
  key: 'values',
  tooltip: '可以为每个问题选择的值。例如:“满意”、“非常满意”等等。',
  weight: 1,
  reorder: true,
  defaultValue: [{
    label: '',
    value: ''
  }],
  components: [{
    label: '标签',
    key: 'label',
    input: true,
    type: 'textfield'
  }, {
    label: '值',
    key: 'value',
    input: true,
    type: 'textfield',
    allowCalculateOverride: true,
    calculateValue: {
      _camelCase: [{
        var: 'row.label'
      }]
    }
  }]
}];
exports.default = _default;