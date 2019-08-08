"use strict";

require("core-js/modules/es.array.map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _Formio = _interopRequireDefault(require("../../../Formio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  key: 'inputMask',
  ignore: true
}, {
  key: 'allowMultipleMasks',
  ignore: true
}, {
  key: 'mask',
  ignore: true
}, {
  type: 'number',
  input: true,
  key: 'rows',
  label: '行数',
  weight: 210,
  tooltip: '允许控制文本区域中可见的行数',
  placeholder: '输入行数'
}, {
  type: 'select',
  input: true,
  key: 'editor',
  label: '编辑器',
  tooltip: '选择要用于此文本区域可见编辑器的类型',
  dataSrc: 'values',
  data: {
    values: [{
      label: '无',
      value: ''
    }, {
      label: 'CKEditor',
      value: 'ckeditor'
    }, {
      label: 'ACE',
      value: 'ace'
    }, {
      label: 'Quill',
      value: 'quill'
    }]
  },
  weight: 415
}, {
  type: 'checkbox',
  input: true,
  key: 'autoExpand',
  label: '自适应',
  tooltip: '这将使用户在输入文本区域时自动扩展文本区域的高度',
  weight: 415,
  conditional: {
    json: {
      '==': [{
        var: 'data.editor'
      }, '']
    }
  }
}, {
  type: 'checkbox',
  input: true,
  key: 'isUploadEnabled',
  label: '支持图片上传',
  weight: 415.1,
  conditional: {
    json: {
      or: [{
        '===': [{
          var: 'data.editor'
        }, 'quill']
      }]
    }
  }
}, {
  type: 'select',
  input: true,
  key: 'uploadStorage',
  label: '图片上传存储',
  placeholder: '选择文件存储方式',
  weight: 415.2,
  tooltip: '将文件保存在哪个存储区',
  valueProperty: 'value',
  dataSrc: 'custom',
  data: {
    custom: function custom() {
      return _lodash.default.map(_Formio.default.providers.storage, function (storage, key) {
        return {
          label: storage.title,
          value: key
        };
      });
    }
  },
  conditional: {
    json: {
      '===': [{
        var: 'data.isUploadEnabled'
      }, true]
    }
  }
}, {
  type: 'textfield',
  input: true,
  key: 'uploadUrl',
  label: '图片上传Url',
  weight: 415.3,
  placeholder: '输入要将文件发送到为url',
  tooltip: '参看 <a href=\'https://github.com/danialfarid/ng-file-upload#server-side\' target=\'_blank\'>https://github.com/danialfarid/ng-file-upload#server-side</a> 如何设置服务器',
  conditional: {
    json: {
      '===': [{
        var: 'data.uploadStorage'
      }, 'url']
    }
  }
}, {
  type: 'textarea',
  key: 'uploadOptions',
  label: '图像上传自定义请求选项',
  tooltip: '传递自定义xhr选项(可选)',
  rows: 5,
  editor: 'ace',
  input: true,
  weight: 415.4,
  placeholder: "{\n      \"withCredentials\": true\n    }",
  conditional: {
    json: {
      '===': [{
        var: 'data.uploadStorage'
      }, 'url']
    }
  }
}, {
  type: 'textfield',
  input: true,
  key: 'uploadDir',
  label: '图片上传目录',
  placeholder: '(可选)输入文件目录',
  tooltip: '将把这个字段中上传的所有文件都放到目录中',
  weight: 415.5,
  conditional: {
    json: {
      '===': [{
        var: 'data.isUploadEnabled'
      }, true]
    }
  }
}, {
  type: 'select',
  input: true,
  key: 'as',
  label: '另存为',
  dataSrc: 'values',
  tooltip: '此设置确定应如何存储该值并将其存储在数据库中',
  clearOnHide: true,
  data: {
    values: [{
      label: 'String',
      value: 'string'
    }, {
      label: 'JSON',
      value: 'json'
    }, {
      label: 'HTML',
      value: 'html'
    }]
  },
  conditional: {
    json: {
      or: [{
        '===': [{
          var: 'data.editor'
        }, 'quill']
      }, {
        '===': [{
          var: 'data.editor'
        }, 'ace']
      }]
    }
  },
  weight: 416
}, {
  type: 'textarea',
  input: true,
  editor: 'ace',
  rows: 10,
  as: 'json',
  label: '编辑器设置',
  tooltip: '编辑器JSON配置',
  key: 'wysiwyg',
  customDefaultValue: function customDefaultValue(value, component, row, data, instance) {
    return instance ? instance.wysiwygDefault : '';
  },
  conditional: {
    json: {
      or: [{
        '===': [{
          var: 'data.editor'
        }, 'ckeditor']
      }, {
        '===': [{
          var: 'data.editor'
        }, 'quill']
      }, {
        '===': [{
          var: 'data.editor'
        }, 'ace']
      }]
    }
  },
  weight: 417
}];
exports.default = _default;