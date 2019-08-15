"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  type: 'checkbox',
  input: true,
  weight: 70,
  key: 'delimiter',
  label: '使用千分位分隔符',
  tooltip: '用分隔符分隔千位'
}, {
  type: 'number',
  input: true,
  weight: 80,
  key: 'decimalLimit',
  label: '小数点后的最大位数',
  tooltip: '小数点后的最大位数'
}, {
  type: 'checkbox',
  input: true,
  weight: 90,
  key: 'requireDecimal',
  label: '需要小数',
  tooltip: '始终显示小数，即使后面是零'
}];
exports.default = _default;