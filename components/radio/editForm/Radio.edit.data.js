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
  label: 'Values',
  key: 'values',
  tooltip: 'The radio button values that can be picked for this field. Values are text submitted with the form data. Labels are text that appears next to the radio buttons on the form.',
  weight: 10,
  reorder: true,
  defaultValue: [{
    label: '',
    value: ''
  }],
  components: [{
    label: 'Label',
    key: 'label',
    input: true,
    type: 'textfield'
  }, {
    label: 'Value',
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
    label: 'Shortcut',
    key: 'shortcut',
    tooltip: 'The shortcut key for this option.',
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