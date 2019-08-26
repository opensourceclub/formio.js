"use strict";

require("core-js/modules/es.array.filter");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditFormUtils = {
  sortAndFilterComponents: function sortAndFilterComponents(components) {
    return _lodash.default.filter(_lodash.default.sortBy(components, 'weight'), function (item) {
      return !item.ignore;
    });
  },
  unifyComponents: function unifyComponents(objValue, srcValue) {
    if (objValue.key && srcValue.key) {
      if (objValue.skipMerge || srcValue.skipMerge) {
        return false;
      }

      if (objValue.key === srcValue.key) {
        // Create complete objects by including missing keys.
        _lodash.default.each(objValue, function (value, prop) {
          if (!srcValue.hasOwnProperty(prop)) {
            srcValue[prop] = value;
          }
        });

        _lodash.default.each(srcValue, function (value, prop) {
          if (!objValue.hasOwnProperty(prop)) {
            objValue[prop] = value;
          }
        });

        if (objValue.components) {
          srcValue.components = EditFormUtils.sortAndFilterComponents(_lodash.default.unionWith(objValue.components, srcValue.components, EditFormUtils.unifyComponents));
        }

        return true;
      } else {
        return false;
      }
    }

    return _lodash.default.isEqual(objValue, srcValue);
  },
  logicVariablesTable: function logicVariablesTable(additional) {
    additional = additional || '';
    return {
      type: 'htmlelement',
      tag: 'div',

      /* eslint-disable prefer-template */
      content: '<p>以下变量在所有脚本中都可用</p>' + '<table class="table table-bordered table-condensed table-striped">' + additional + '<tr><th>form</th><td>完整的表单JSON对象</td></tr>' + '<tr><th>submission</th><td>完整的提交对象</td></tr>' + '<tr><th>data</th><td>完整的提交数据对象</td></tr>' + '<tr><th>row</th><td>上下文“行”数据，用于数据表格、编辑表格和容器组件</td></tr>' + '<tr><th>component</th><td>当前组件JSON</td></tr>' + '<tr><th>instance</th><td>当前组件实例</td></tr>' + '<tr><th>value</th><td>组件的当前值</td></tr>' + '<tr><th>moment</th><td>用于日期操作的moment.js库</td></tr>' + '<tr><th>_</th><td><a href="https://lodash.com/docs/" target="_blank">Lodash</a>的一个实例</td></tr>' + '<tr><th>utils</th><td><a href="http://formio.github.io/formio.js/docs/identifiers.html#utils" target="_blank">FormioUtils</a>的一个实例对象.</td></tr>' + '<tr><th>util</th><td>“utils”的别名</td></tr>' + '</table><br/>'
      /* eslint-enable prefer-template */

    };
  },
  javaScriptValue: function javaScriptValue(title, property, propertyJSON, weight, exampleHTML, exampleJSON) {
    return {
      type: 'panel',
      title: title,
      theme: 'default',
      collapsible: true,
      collapsed: true,
      key: "".concat(property, "Panel"),
      weight: weight,
      components: [this.logicVariablesTable(), {
        type: 'panel',
        title: 'JavaScript',
        collapsible: true,
        collapsed: false,
        style: {
          'margin-bottom': '10px'
        },
        key: "".concat(property, "-js"),
        components: [{
          type: 'textarea',
          key: property,
          rows: 5,
          editor: 'ace',
          hideLabel: true,
          input: true
        }, {
          type: 'htmlelement',
          tag: 'div',
          content: "<p>Enter custom javascript code.</p>".concat(exampleHTML)
        }]
      }, {
        type: 'panel',
        title: 'JSONLogic',
        collapsible: true,
        collapsed: true,
        key: "".concat(property, "-json"),
        components: [{
          type: 'htmlelement',
          tag: 'div',

          /* eslint-disable prefer-template */
          content: '<p>Execute custom logic using <a href="http://jsonlogic.com/" target="_blank">JSONLogic</a>.</p>' + '<p>Full <a href="https://lodash.com/docs" target="_blank">Lodash</a> support is provided using an "_" before each operation, such as <code>{"_sum": {var: "data.a"}}</code></p>' + exampleJSON
          /* eslint-enable prefer-template */

        }, {
          type: 'textarea',
          key: propertyJSON,
          rows: 5,
          editor: 'ace',
          hideLabel: true,
          as: 'json',
          input: true
        }]
      }]
    };
  }
};
var _default = EditFormUtils;
exports.default = _default;