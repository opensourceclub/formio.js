"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _builder = _interopRequireDefault(require("../../../utils/builder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  key: 'labelPosition',
  ignore: true
}, {
  key: 'placeholder',
  ignore: true
}, {
  type: 'select',
  input: true,
  weight: 350,
  label: 'Shortcut',
  key: 'shortcut',
  tooltip: 'Shortcut for this component.',
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
}, {
  type: 'select',
  input: true,
  key: 'inputType',
  label: 'Input Type',
  tooltip: 'This is the input type used for this checkbox.',
  dataSrc: 'values',
  weight: 410,
  data: {
    values: [{
      label: 'Checkbox',
      value: 'checkbox'
    }, {
      label: 'Radio',
      value: 'radio'
    }]
  }
}, {
  type: 'textfield',
  input: true,
  key: 'name',
  label: 'Radio Key',
  tooltip: 'The key used to trigger the radio button toggle.',
  weight: 420,
  conditional: {
    json: {
      '===': [{
        var: 'data.inputType'
      }, 'radio']
    }
  }
}, {
  type: 'textfield',
  input: true,
  label: 'Radio Value',
  key: 'value',
  tooltip: 'The value used with this radio button.',
  weight: 430,
  conditional: {
    json: {
      '===': [{
        var: 'data.inputType'
      }, 'radio']
    }
  }
}];
exports.default = _default;