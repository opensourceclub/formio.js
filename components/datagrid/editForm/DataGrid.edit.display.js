"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: 'placeholder',
  ignore: true
}, {
  type: 'checkbox',
  label: '禁用添加/删除行',
  key: 'disableAddingRemovingRows',
  tooltip: '是否要隐藏“添加另一个按钮”和“删除行”按钮',
  weight: 405,
  input: true,
  clearOnHide: false,
  customConditional: 'show = !data.enableRowGroups',
  calculateValue: 'value = data.enableRowGroups ? true : data.disableAddingRemovingRows;'
}, {
  type: 'checkbox',
  label: '允许重新排序',
  key: 'reorder',
  weight: 407,
  input: true
}, {
  type: 'textfield',
  label: '添加文本',
  key: 'addAnother',
  tooltip: '设置添加按钮的文本',
  placeholder: '添加',
  weight: 410,
  input: true,
  customConditional: 'show = !data.disableAddingRemovingRows'
}, {
  type: 'select',
  label: '添加位置',
  key: 'addAnotherPosition',
  dataSrc: 'values',
  tooltip: '用于相对于数据网格数组，添加按钮的位置',
  defaultValue: 'bottom',
  input: true,
  data: {
    values: [{
      label: '顶部',
      value: 'top'
    }, {
      label: '底部',
      value: 'bottom'
    }, {
      label: '都',
      value: 'both'
    }]
  },
  weight: 411,
  customConditional: 'show = !data.disableAddingRemovingRows'
}, {
  type: 'checkbox',
  label: '默认打开的行',
  key: 'defaultOpen',
  tooltip: '如果希望编辑网格的行默认为打开(如果存在值)，请检查此选项。',
  weight: 420,
  input: true
}, {
  type: 'checkbox',
  label: '相等的列宽',
  key: 'layoutFixed',
  weight: 430,
  input: true
}, {
  key: 'enableRowGroups',
  type: 'checkbox',
  label: '允许行组',
  weight: 440,
  input: true
}, {
  label: 'Groups',
  disableAddingRemovingRows: false,
  defaultOpen: false,
  addAnother: '',
  addAnotherPosition: 'bottom',
  mask: false,
  tableView: true,
  alwaysEnabled: false,
  type: 'datagrid',
  input: true,
  key: 'rowGroups',
  reorder: true,
  components: [{
    label: 'Label',
    allowMultipleMasks: false,
    showWordCount: false,
    showCharCount: false,
    tableView: true,
    alwaysEnabled: false,
    type: 'textfield',
    input: true,
    key: 'label',
    widget: {
      type: ''
    },
    row: '0-0'
  }, {
    label: '行数',
    mask: false,
    tableView: true,
    alwaysEnabled: false,
    type: 'number',
    input: true,
    key: 'numberOfRows',
    row: '0-1'
  }],
  weight: 441,
  conditional: {
    json: {
      var: 'data.enableRowGroups'
    }
  }
}, {
  label: '在标题单击上时隐藏组',
  type: 'checkbox',
  input: true,
  key: 'groupToggle',
  weight: 442,
  conditional: {
    json: {
      var: 'data.enableRowGroups'
    }
  }
}];
exports.default = _default;