"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: 'validate.required',
  ignore: true
}, {
  key: 'validate.unique',
  ignore: true
}, {
  weight: 0,
  type: 'checkbox',
  label: '日期必填',
  tooltip: '在提交表格之前，必须填写的一个必填项目',
  key: 'fields.day.required',
  input: true
}, {
  weight: 10,
  type: 'checkbox',
  label: '月份必填',
  tooltip: '在提交表格之前，必须填写的一个必填项目',
  key: 'fields.month.required',
  input: true
}, {
  weight: 20,
  type: 'checkbox',
  label: '年份必填',
  tooltip: '在提交表格之前，必须填写的一个必填项目',
  key: 'fields.year.required',
  input: true
}, {
  weight: 40,
  type: 'textfield',
  label: '最小日期',
  placeholder: 'yyyy-MM-dd',
  tooltip: '可以设置的最小日期。还可以使用Moment.js函数。例如: \n \n moment().subtract(10, \'days\')',
  key: 'minDate',
  input: true
}, {
  weight: 30,
  type: 'textfield',
  label: '最大日期',
  placeholder: 'yyyy-MM-dd',
  tooltip: '可以设置的最大日期。还可以使用Moment.js函数。例如: \n \n moment().add(10, \'days\')',
  key: 'maxDate',
  input: true
}];
exports.default = _default;