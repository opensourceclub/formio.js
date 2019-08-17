"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../../utils/utils");

var _default = [{
  type: 'select',
  input: true,
  weight: 0,
  tooltip: '用于选择数据的源。"Values"允许您提供自己的值和标签。"JSON"允许您提供原始JSON数据。"URL"允许您提供一个URL来检索JSON数据。',
  key: 'dataSrc',
  defaultValue: 'values',
  label: '数据源类型',
  dataSrc: 'values',
  data: {
    values: [{
      label: 'Values',
      value: 'values'
    }, {
      label: 'URL',
      value: 'url'
    }, {
      label: 'Resource',
      value: 'resource'
    }, {
      label: 'Custom',
      value: 'custom'
    }, {
      label: 'Raw JSON',
      value: 'json'
    }, {
      label: 'IndexedDB',
      value: 'indexeddb'
    }]
  }
}, {
  type: 'textfield',
  weight: 10,
  input: true,
  key: 'indexeddb.database',
  label: '数据库名称',
  tooltip: '索引数据库的名称。',
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'indexeddb']
    }
  }
}, {
  type: 'textfield',
  input: true,
  key: 'indexeddb.table',
  label: '表名',
  weight: 16,
  tooltip: '索引数据库中表的名称',
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'indexeddb']
    }
  }
}, {
  type: 'textarea',
  as: 'json',
  editor: 'ace',
  weight: 18,
  input: true,
  key: 'indexeddb.filter',
  label: '行过滤',
  tooltip: '筛选匹配对象的表项',
  defaultValue: {},
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'indexeddb']
    }
  }
}, {
  type: 'textarea',
  as: 'json',
  editor: 'ace',
  weight: 10,
  input: true,
  key: 'data.json',
  label: '数据源原始JSON',
  tooltip: '用作数据源的原始JSON数组',
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'json']
    }
  }
}, {
  type: 'textfield',
  input: true,
  key: 'data.url',
  weight: 10,
  label: '数据源URL',
  placeholder: '数据源URL',
  tooltip: '返回一个JSON数组作为数据源URL',
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'url']
    }
  }
}, {
  type: 'checkbox',
  input: true,
  label: '数据懒加载',
  key: 'lazyLoad',
  tooltip: 'When set, this will not fire off the request to the URL until this control is within focus. This can improve performance if you have many Select dropdowns on your form where the API\'s will only fire when the control is activated.',
  weight: 11,
  conditional: {
    json: {
      in: [{
        var: 'data.dataSrc'
      }, ['resource', 'url']]
    }
  }
}, {
  type: 'datagrid',
  input: true,
  label: 'Request Headers',
  key: 'data.headers',
  tooltip: 'Set any headers that should be sent along with the request to the url. This is useful for authentication.',
  weight: 11,
  components: [{
    label: 'Key',
    key: 'key',
    input: true,
    type: 'textfield'
  }, {
    label: 'Value',
    key: 'value',
    input: true,
    type: 'textfield'
  }],
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'url']
    }
  }
}, {
  type: 'datagrid',
  input: true,
  label: '数据源',
  key: 'data.values',
  tooltip: '要用作数据源的值。"标签"显示在select字段中。"值"是提交时保存的相应值',
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
  }],
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'values']
    }
  }
}, {
  type: 'select',
  input: true,
  dataSrc: 'url',
  data: {
    url: '/form?type=resource&limit=4294967295&select=_id,title'
  },
  template: '<span>{{ item.title }}</span>',
  valueProperty: '_id',
  clearOnHide: false,
  label: '资源',
  key: 'data.resource',
  lazyLoad: false,
  weight: 10,
  tooltip: '与此字段一起使用的资源',
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'resource']
    }
  }
}, {
  type: 'textfield',
  input: true,
  label: 'Data Path',
  key: '选择值',
  weight: 12,
  description: '指向可迭代项的对象路径',
  tooltip: '源数据中的属性，其中包含可迭代项。例如:结果。物品或结果[0]. items',
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'url']
    }
  }
}, {
  type: 'select',
  input: true,
  label: 'Value Property',
  key: '值属性',
  skipMerge: true,
  clearOnHide: false,
  tooltip: '要用作标签的字段',
  weight: 11,
  refreshOn: 'data.resource',
  template: '<span>{{ item.label }}</span>',
  valueProperty: 'key',
  dataSrc: 'url',
  lazyLoad: false,
  onSetItems: function onSetItems(component, form) {
    var newItems = [];
    (0, _utils.eachComponent)(form.components, function (component, path) {
      if (component.input) {
        newItems.push({
          label: component.label || component.key,
          key: "data.".concat(path)
        });
      }
    });
    return newItems;
  },
  data: {
    url: '/form/{{ data.data.resource }}'
  },
  conditional: {
    json: {
      and: [{
        '===': [{
          var: 'data.dataSrc'
        }, 'resource']
      }, {
        var: 'data.data.resource'
      }]
    }
  }
}, {
  type: 'textfield',
  input: true,
  label: '值属性',
  key: 'valueProperty',
  skipMerge: true,
  clearOnHide: false,
  weight: 13,
  description: '要保存的选定项的属性',
  tooltip: '要用作选择值的数据源中每个项的属性。如果没有指定，将使用项目本身',
  conditional: {
    json: {
      in: [{
        var: 'data.dataSrc'
      }, ['json', 'url']]
    }
  }
}, {
  type: 'textfield',
  input: true,
  label: '选择字段',
  key: 'selectFields',
  tooltip: '要作为选项的一部分返回的资源上的属性。用逗号分隔属性名。如果留空，将返回所有属性。',
  placeholder: '要选择的字段列表，用逗号分隔',
  weight: 14,
  conditional: {
    json: {
      and: [{
        '===': [{
          var: 'data.dataSrc'
        }, 'resource']
      }, {
        '===': [{
          var: 'data.valueProperty'
        }, '']
      }]
    }
  }
}, {
  type: 'checkbox',
  input: true,
  key: 'disableLimit',
  label: '不限制资源',
  tooltip: '当启用时，请求将不会在查询字符串中包含限制和跳过选项',
  weight: 15,
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'url']
    }
  }
}, {
  type: 'textfield',
  input: true,
  key: 'searchField',
  label: '搜索查询的名字',
  weight: 16,
  description: 'URL查询参数的名称',
  tooltip: '发送用于筛选结果的请求时使用的search querystring参数的名称。URL中的服务器必须处理此查询参数',
  conditional: {
    json: {
      in: [{
        var: 'data.dataSrc'
      }, ['url', 'resource']]
    }
  }
}, {
  type: 'number',
  input: true,
  key: 'minSearch',
  weight: 17,
  label: '最小搜索长度',
  tooltip: '在进行搜索之前，必须键入的最小字符数',
  defaultValue: 0,
  conditional: {
    json: {
      and: [{
        '===': [{
          var: 'data.dataSrc'
        }, 'url']
      }, {
        '!=': [{
          var: 'data.searchField'
        }, '']
      }]
    }
  }
}, {
  type: 'textfield',
  input: true,
  key: 'filter',
  label: '查询过滤',
  weight: 18,
  description: '过滤查询结果',
  tooltip: '使用它可以使用查询参数提供额外的过滤',
  conditional: {
    json: {
      in: [{
        var: 'data.dataSrc'
      }, ['url', 'resource']]
    }
  }
}, {
  type: 'textfield',
  input: true,
  key: 'sort',
  label: '查询排序',
  weight: 18,
  description: '排序查询结果',
  tooltip: '使用此选项可使用查询参数提供附加排序',
  conditional: {
    json: {
      in: [{
        var: 'data.dataSrc'
      }, ['url', 'resource']]
    }
  }
}, {
  type: 'number',
  input: true,
  key: 'limit',
  label: '限制显示',
  weight: 18,
  defaultValue: 100,
  description: '每页结果中要查看的项的最大数量',
  tooltip: '使用此选项可以限制要请求或查看的项的数量',
  conditional: {
    json: {
      in: [{
        var: 'data.dataSrc'
      }, ['url', 'resource', 'json']]
    }
  }
}, {
  type: 'textarea',
  input: true,
  key: 'data.custom',
  label: '自定义值',
  editor: 'ace',
  rows: 10,
  weight: 14,
  placeholder: "values = data['mykey'];",
  tooltip: '编写自定义代码来返回值选项。表单数据对象是可用的',
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'custom']
    }
  }
}, {
  type: 'textarea',
  input: true,
  key: 'template',
  label: '模板项',
  editor: 'ace',
  as: 'html',
  rows: 3,
  weight: 18,
  tooltip: '结果数据项的HTML模板'
}, {
  type: 'checkbox',
  input: true,
  weight: 20,
  key: 'searchEnabled',
  label: '允许静态搜索',
  defaultValue: true,
  tooltip: '选中后，select下拉框将允许在提供的静态项列表中进行搜索。'
}, {
  label: '搜索阈值',
  mask: false,
  tableView: true,
  alwaysEnabled: false,
  type: 'number',
  input: true,
  key: 'selectThreshold',
  validate: {
    min: 0,
    customMessage: '',
    json: '',
    max: 1
  },
  delimiter: false,
  requireDecimal: false,
  encrypted: false,
  defaultValue: 0.3,
  weight: 21,
  tooltip: '匹配算法在什么时候退出, 0.0的阈值需要完全匹配, 1.0的阈值可以匹配任何东西'
}, {
  type: 'checkbox',
  input: true,
  weight: 22,
  key: 'addResource',
  label: '添加资源',
  tooltip: '允许在输入提交时创建新资源',
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'resource']
    }
  }
}, {
  type: 'textfield',
  label: '添加资源标签',
  key: 'addResourceLabel',
  tooltip: '设置添加资源按钮的文本。',
  placeholder: '添加资源',
  weight: 23,
  input: true,
  conditional: {
    json: {
      and: [{
        '===': [{
          var: 'data.dataSrc'
        }, 'resource']
      }, {
        '!!': {
          var: 'data.addResource'
        }
      }]
    }
  }
}, // {
//   type: 'checkbox',
//   input: true,
//   weight: 24,
//   key: 'reference',
//   label: 'Save as reference',
//   tooltip: 'Using this option will save this field as a reference and link its value to the value of the origin record.',
//   conditional: {
//     json: { '===': [{ var: 'data.dataSrc' }, 'resource'] },
//   },
// },
{
  type: 'checkbox',
  input: true,
  weight: 25,
  key: 'authenticate',
  label: '表单验证',
  tooltip: '如果您想对请求使用表单身份验证，请勾选此项',
  conditional: {
    json: {
      '===': [{
        var: 'data.dataSrc'
      }, 'url']
    }
  }
}, {
  type: 'checkbox',
  input: true,
  weight: 26,
  key: 'readOnlyValue',
  label: '只读',
  tooltip: '如果您想在只读模式下仅显示值，请勾选此项'
}, {
  type: 'textarea',
  as: 'json',
  editor: 'ace',
  weight: 27,
  input: true,
  key: 'customOptions',
  label: 'Choices.js 选项',
  tooltip: '作为Select组件(options JS)的选项使用的原始JSON对象',
  defaultValue: {}
}, {
  type: 'select',
  input: true,
  key: 'refreshOn',
  label: '刷新选项',
  weight: 19,
  tooltip: '当其他字段更改时刷新数据',
  dataSrc: 'custom',
  valueProperty: 'value',
  data: {
    custom: "\n        values.push({label: 'Any Change', value: 'data'});\n        utils.eachComponent(instance.root.editForm.components, function(component, path) {\n          if (component.key !== data.key) {\n            values.push({\n              label: component.label || component.key,\n              value: path\n            });\n          }\n        });\n      "
  },
  conditional: {
    json: {
      in: [{
        var: 'data.dataSrc'
      }, ['url', 'resource']]
    }
  }
}, {
  type: 'checkbox',
  input: true,
  weight: 20,
  key: 'clearOnRefresh',
  label: '刷新选项时清除值',
  defaultValue: false,
  tooltip: '当选项被刷新时，清除这个组件值',
  conditional: {
    json: {
      in: [{
        var: 'data.dataSrc'
      }, ['url', 'resource']]
    }
  }
}];
exports.default = _default;