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
  label: '超出隐藏',
  key: 'shortcut',
  tooltip: '超出隐藏',
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
  label: '控件类型',
  tooltip: '用于此复选框的输入类型',
  dataSrc: 'values',
  weight: 410,
  data: {
    values: [{
      label: '多选按钮',
      value: 'checkbox'
    }, {
      label: '单选按钮',
      value: 'radio'
    }]
  }
}, {
  type: 'textfield',
  input: true,
  key: 'name',
  label: '单选按钮Key',
  tooltip: '用来触发单选按钮切换的Key',
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
  label: '单选按钮值',
  key: 'value',
  tooltip: '单选按钮传递的值',
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