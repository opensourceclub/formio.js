"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  type: 'checkbox',
  input: true,
  key: 'enableTime',
  label: '允许输入时间',
  tooltip: '启用此字段的时间输入',
  weight: 0
}, {
  type: 'number',
  input: true,
  key: 'timePicker.hourStep',
  label: '小时步长',
  tooltip: '在时间选择器中要增加/减少的小时数',
  weight: 10
}, {
  type: 'number',
  input: true,
  key: 'timePicker.minuteStep',
  label: '分钟步长',
  tooltip: '在时间选择器中要增加/减少的分钟数',
  weight: 20
}, {
  type: 'checkbox',
  input: true,
  key: 'timePicker.showMeridian',
  label: '12小时制 (AM/PM)',
  tooltip: '显示时间为AM/PM 12小时',
  weight: 30
}];
exports.default = _default;