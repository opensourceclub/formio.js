"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  weight: 400,
  type: 'select',
  input: true,
  key: 'widget.type',
  label: '控件',
  placeholder: '选择控件',
  tooltip: '控件是用于输入字段值的显示UI',
  defaultValue: 'input',
  onChange: function onChange(context) {
    context.data.widget = _lodash.default.pick(context.data.widget, 'type');
  },
  dataSrc: 'values',
  data: {
    values: [{
      label: '输入字段',
      value: 'input'
    }, {
      label: '日历选择器',
      value: 'calendar'
    }]
  },
  conditional: {
    json: {
      '===': [{
        var: 'data.type'
      }, 'textfield']
    }
  }
}, {
  weight: 410,
  type: 'textfield',
  input: true,
  key: 'inputMask',
  label: '输入掩码',
  tooltip: '通过预定义的格式帮助用户输入掩码.<br><br>9: 数字<br>a: 字母顺序排列<br>*: 字母数字<br><br>电话掩码举例: (999) 999-9999<br><br>参看 <a target=\'_blank\' href=\'https://github.com/RobinHerbots/jquery.inputmask\'>jquery.inputmask文档</a>获取更多信息</a>',
  customConditional: 'show = !data.allowMultipleMasks;'
}, {
  weight: 413,
  type: 'checkbox',
  input: true,
  key: 'allowMultipleMasks',
  label: '允许多重掩码'
}, {
  weight: 417,
  type: 'datagrid',
  input: true,
  key: 'inputMasks',
  label: '输入掩码',
  customConditional: 'show = data.allowMultipleMasks === true;',
  reorder: true,
  components: [{
    type: 'textfield',
    key: 'label',
    label: '标签',
    input: true
  }, {
    type: 'textfield',
    key: 'mask',
    label: '掩码',
    input: true
  }]
}, {
  weight: 413,
  type: 'checkbox',
  input: true,
  key: 'allowMultipleMasks',
  label: '允许多重掩码'
}, {
  weight: 417,
  type: 'datagrid',
  input: true,
  key: 'inputMasks',
  label: '输入掩码',
  customConditional: 'show = data.allowMultipleMasks === true;',
  reorder: true,
  components: [{
    type: 'textfield',
    key: 'label',
    label: '标签',
    input: true
  }, {
    type: 'textfield',
    key: 'mask',
    label: '掩码',
    input: true
  }]
}, {
  weight: 320,
  type: 'textfield',
  input: true,
  key: 'prefix',
  label: '前置文本'
}, {
  weight: 330,
  type: 'textfield',
  input: true,
  key: 'suffix',
  label: '后置文本'
}, {
  weight: 1300,
  type: 'checkbox',
  label: '隐藏输入',
  tooltip: '在浏览器中隐藏输入。在服务器上不加密，不适用于密码',
  key: 'mask',
  input: true
}, {
  weight: 1200,
  type: 'checkbox',
  label: '显示单词数',
  tooltip: '实时显示单词数量',
  key: 'showWordCount',
  input: true
}, {
  weight: 1201,
  type: 'checkbox',
  label: '显示字符计数',
  tooltip: '实时显示字符计数',
  key: 'showCharCount',
  input: true
}];
exports.default = _default;