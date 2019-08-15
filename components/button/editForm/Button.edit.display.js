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
  key: 'hideLabel',
  ignore: true
}, {
  type: 'select',
  key: 'action',
  label: '操作',
  input: true,
  dataSrc: 'values',
  weight: 110,
  tooltip: '这个按钮要执行的操作',
  data: {
    values: [{
      label: '提交',
      value: 'submit'
    }, {
      label: '保存状态',
      value: 'saveState'
    }, {
      label: '事件',
      value: 'event'
    }, {
      label: '自定义',
      value: 'custom'
    }, {
      label: '充值',
      value: 'reset'
    }, {
      label: '身份验证',
      value: 'oauth'
    }, {
      label: 'POST请求URL',
      value: 'url'
    }]
  }
}, {
  type: 'textfield',
  label: '保存状态',
  key: 'state',
  weight: 112,
  tooltip: '当按下此按钮时，希望将提交保存在下面的状态。示例“草稿”将以草稿模式保存提交',
  placeholder: 'submitted',
  input: true,
  conditional: {
    json: {
      '===': [{
        var: 'data.action'
      }, 'saveState']
    }
  }
}, {
  type: 'checkbox',
  input: true,
  inputType: 'checkbox',
  key: 'showValidations',
  label: '显示验证',
  weight: 115,
  tooltip: '当按下按钮时，在表单上显示任何验证的错误',
  conditional: {
    json: {
      '!==': [{
        var: 'data.action'
      }, 'submit']
    }
  }
}, {
  type: 'textfield',
  label: '按钮事件',
  key: 'event',
  input: true,
  weight: 120,
  tooltip: '单击按钮时要触发的事件',
  conditional: {
    json: {
      '===': [{
        var: 'data.action'
      }, 'event']
    }
  }
}, {
  type: 'textfield',
  inputType: 'url',
  key: 'url',
  input: true,
  weight: 120,
  label: '按钮 URL',
  tooltip: '提交将发送到的URL',
  placeholder: 'https://example.wctsoft.io',
  conditional: {
    json: {
      '===': [{
        var: 'data.action'
      }, 'url']
    }
  }
}, {
  type: 'datagrid',
  key: 'headers',
  input: true,
  weight: 130,
  label: '头部信息',
  addAnother: '增加头部信息',
  tooltip: '请求的头属性和值',
  components: [{
    key: 'header',
    label: '请求头属性',
    input: true,
    type: 'textfield'
  }, {
    key: 'value',
    label: '请求头值',
    input: true,
    type: 'textfield'
  }],
  conditional: {
    json: {
      '===': [{
        var: 'data.action'
      }, 'url']
    }
  }
}, {
  type: 'textarea',
  key: 'custom',
  label: '按钮自定义逻辑',
  tooltip: '要在单击按钮时触发的自定义逻辑',
  rows: 5,
  editor: 'ace',
  input: true,
  weight: 120,
  placeholder: "data['mykey'] = data['anotherKey'];",
  conditional: {
    json: {
      '===': [{
        var: 'data.action'
      }, 'custom']
    }
  }
}, {
  type: 'select',
  key: 'theme',
  label: '主题',
  input: true,
  tooltip: '这个按钮的颜色主题',
  dataSrc: 'values',
  weight: 140,
  data: {
    values: [{
      label: 'Primary',
      value: 'primary'
    }, {
      label: 'Secondary',
      value: 'secondary'
    }, {
      label: 'Info',
      value: 'info'
    }, {
      label: 'Success',
      value: 'success'
    }, {
      label: 'Danger',
      value: 'danger'
    }, {
      label: 'Warning',
      value: 'warning'
    }]
  }
}, {
  type: 'select',
  key: 'size',
  label: '大小',
  input: true,
  tooltip: '按钮的大小',
  dataSrc: 'values',
  weight: 150,
  data: {
    values: [{
      label: '极小',
      value: 'xs'
    }, {
      label: '小',
      value: 'sm'
    }, {
      label: '中',
      value: 'md'
    }, {
      label: '大',
      value: 'lg'
    }]
  }
}, {
  type: 'textfield',
  key: 'leftIcon',
  label: '左图标',
  input: true,
  placeholder: '输入图标Class',
  tooltip: "这是显示图标的完整图标类字符串。例如:'fa fa-plus'",
  weight: 160
}, {
  type: 'textfield',
  key: 'rightIcon',
  label: '右图标',
  input: true,
  placeholder: '输入图标Class',
  tooltip: "这是显示图标的完整图标类字符串。例如:'fa fa-plus'",
  weight: 170
}, {
  type: 'select',
  input: true,
  weight: 180,
  label: '快照',
  key: 'shortcut',
  tooltip: '显示的快照',
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
  type: 'checkbox',
  key: 'block',
  label: '整行按钮',
  input: true,
  weight: 155,
  tooltip: '此控件应跨越边界容器的整个宽度'
}, {
  type: 'checkbox',
  key: 'disableOnInvalid',
  label: '表单无效',
  tooltip: '如果表单无效，将禁用此字段',
  input: true,
  weight: 620
}];
exports.default = _default;