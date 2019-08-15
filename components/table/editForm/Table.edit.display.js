"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: 'labelPosition',
  ignore: true
}, {
  key: 'placeholder',
  ignore: true
}, {
  key: 'description',
  ignore: true
}, {
  key: 'hideLabel',
  ignore: true
}, {
  key: 'autofocus',
  ignore: true
}, {
  key: 'tooltip',
  ignore: true
}, {
  key: 'tabindex',
  ignore: true
}, {
  key: 'disabled',
  ignore: true
}, {
  type: 'number',
  label: '行数',
  key: 'numRows',
  input: true,
  weight: 1,
  placeholder: '行数',
  tooltip: '输入该表应该显示的数字或行'
}, {
  type: 'number',
  label: '列数',
  key: 'numCols',
  input: true,
  weight: 2,
  placeholder: '列数',
  tooltip: '输入该表应该显示的数字或列'
}, {
  type: 'checkbox',
  label: '条纹',
  key: 'striped',
  tooltip: '如果勾选此项，将对该表条纹显示',
  input: true,
  weight: 701
}, {
  type: 'checkbox',
  label: '边框',
  key: 'bordered',
  input: true,
  tooltip: '如果选中此选项，表会有边框',
  weight: 702
}, {
  type: 'checkbox',
  label: '悬停',
  key: 'hover',
  input: true,
  tooltip: '悬停时高亮',
  weight: 703
}, {
  type: 'checkbox',
  label: '压缩',
  key: 'condensed',
  input: true,
  tooltip: '压缩表的大小',
  weight: 704
}];
exports.default = _default;