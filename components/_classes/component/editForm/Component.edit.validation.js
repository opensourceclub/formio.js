"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable quotes, max-len */
var _default = [{
  weight: 10,
  type: 'checkbox',
  label: '必填',
  tooltip: '在提交表格之前，必须填写的项目',
  key: 'validate.required',
  input: true
}, {
  weight: 100,
  type: 'checkbox',
  label: '唯一',
  tooltip: '确保为该字段提交的数据是惟一的，并且以前没有提交过',
  key: 'unique',
  input: true
}, {
  weight: 0,
  type: 'select',
  key: 'validateOn',
  defaultValue: 'change',
  input: true,
  label: '验证于',
  tooltip: '确定此组件何时应触发前端验证',
  dataSrc: 'values',
  data: {
    values: [{
      label: '值变化',
      value: 'change'
    }, {
      label: '控件失焦',
      value: 'blur'
    }]
  }
}, {
  weight: 190,
  type: 'textfield',
  input: true,
  key: 'errorLabel',
  label: '错误提示标签',
  placeholder: '错误提示标签',
  tooltip: '发生错误时此字段的提示标签'
}, {
  weight: 200,
  key: 'validate.customMessage',
  label: '自定义错误信息',
  placeholder: '自定义错误信息',
  type: 'textfield',
  tooltip: '如果发生任何错误，将显示错误消息',
  input: true
}, {
  type: 'panel',
  title: '自定义验证',
  collapsible: true,
  collapsed: true,
  style: {
    'margin-bottom': '10px'
  },
  key: 'custom-validation-js',
  weight: 300,
  components: [_utils.default.logicVariablesTable('<tr><th>input</th><td>输入到该组件的值</td></tr>'), {
    type: 'textarea',
    key: 'validate.custom',
    rows: 5,
    editor: 'ace',
    hideLabel: true,
    input: true
  }, {
    type: 'htmlelement',
    tag: 'div',
    content: "\n          <small>\n            <p>\u8F93\u5165\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u4EE3\u7801</p>\n            <p>\u5FC5\u987B\u5C06 <strong>valid</strong> \u53D8\u91CF\u6307\u5B9A\u4E3A <strong>true</strong> \u6216\u8005\u9519\u8BEF\u6D88\u606F\u63D0\u793A.</p>\n            <h5>\u4F8B\u5982:</h5>\n            <pre>valid = (input === '\u4E54') ? true : '\u4F60\u540D\u5B57\u5FC5\u987B\u662F \"\u4E54\"';</pre>\n          </small>"
  }, {
    type: 'well',
    components: [{
      weight: 100,
      type: 'checkbox',
      label: '保密验证',
      tooltip: '如果希望仅在服务器端执行验证，请检查此选项。这使您的验证逻辑保持私有和秘密。',
      description: '如果希望仅在服务器端执行验证，请检查此选项。这使您的验证逻辑保持私有和秘密',
      key: 'validate.customPrivate',
      input: true
    }]
  }]
}, {
  type: 'panel',
  title: 'JSON验证',
  collapsible: true,
  collapsed: true,
  key: 'json-validation-json',
  weight: 400,
  components: [{
    type: 'htmlelement',
    tag: 'div',

    /* eslint-disable prefer-template */
    content: '<p>使用执行自定义逻辑 <a href="http://jsonlogic.com/" target="_blank">JSON</a>.</p>' + '<h5>例如:</h5>' + '<pre>' + JSON.stringify({
      "if": [{
        "===": [{
          "var": "input"
        }, "博"]
      }, true, "你的名字必须是 '博'!"]
    }, null, 2) + '</pre>'
    /* eslint-enable prefer-template */

  }, {
    type: 'textarea',
    key: 'validate.json',
    hideLabel: true,
    rows: 5,
    editor: 'ace',
    as: 'json',
    input: true
  }]
}];
/* eslint-enable quotes, max-len */

exports.default = _default;