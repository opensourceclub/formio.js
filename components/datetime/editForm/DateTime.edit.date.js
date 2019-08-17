"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  type: 'checkbox',
  input: true,
  key: 'enableDate',
  label: '允许手动输入',
  weight: 0,
  tooltip: '启用此字段的日期手动输入'
}, {
  type: 'textfield',
  input: true,
  key: 'datePicker.minDate',
  label: '最小日期',
  placeholder: 'yyyy-MM-dd',
  tooltip: '可以选择的最小日期。您还可以使用Moment.js函数。例如: \n \n moment().subtract(10, \'days\')',
  weight: 10
}, {
  type: 'textfield',
  input: true,
  key: 'datePicker.maxDate',
  label: '最大日期',
  placeholder: 'yyyy-MM-dd',
  tooltip: '可以选择的最大日期。 您还可以使用Moment.js函数。例如:  \n \n moment().add(10, \'days\')',
  weight: 20
}];
exports.default = _default;