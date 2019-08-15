"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _builder = _interopRequireDefault(require("../../../utils/builder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  key: 'multiple',
  ignore: true
}, {
  type: 'datagrid',
  input: true,
  label: '可选值',
  key: 'values',
  tooltip: '可以为该字段选择的值。"值"是与表单数据一起提交的文本。"标签"是出现在表单单选按钮旁边的文本',
  weight: 10,
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
  }, {
    type: 'select',
    input: true,
    weight: 180,
    label: '快照',
    key: 'shortcut',
    tooltip: '此选项的快照',
    dataSrc: 'custom',
    data: {
      custom: function custom(_ref) {
        var _ref$instance = _ref.instance;
        _ref$instance = _ref$instance === void 0 ? {} : _ref$instance;
        var _ref$instance$root = _ref$instance.root;
        _ref$instance$root = _ref$instance$root === void 0 ? {} : _ref$instance$root;
        var editForm = _ref$instance$root.editForm,
            editComponent = _ref$instance$root.editComponent;
        return _builder.default.getAvailableShortcuts(editForm, editComponent);
      }
    }
  }]
}];
exports.default = _default;