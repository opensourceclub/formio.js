"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  type: 'number',
  input: true,
  key: 'validate.minSelectedCount',
  label: '最少选中',
  tooltip: '在提交表格前，至少要选中的项量',
  weight: 250
}, {
  type: 'number',
  input: true,
  key: 'validate.maxSelectedCount',
  label: '最多选中',
  tooltip: '在提交表单之前，最多选中的的项量',
  weight: 250
}, {
  type: 'textfield',
  input: true,
  key: 'minSelectedCountMessage',
  label: '最少选中校验错误信息',
  tooltip: '如果没有选中最小项数，则显示错误消息',
  weight: 250
}, {
  type: 'textfield',
  input: true,
  key: 'maxSelectedCountMessage',
  label: '最多选中校验错误信息',
  tooltip: '如果没有选中最大项数，则显示错误消息',
  weight: 250
}];
exports.default = _default;