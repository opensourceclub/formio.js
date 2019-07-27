"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _lodash = _interopRequireDefault(require("lodash"));

var _ComponentEdit = _interopRequireDefault(require("./editForm/Component.edit.data"));

var _ComponentEdit2 = _interopRequireDefault(require("./editForm/Component.edit.display"));

var _ComponentEdit3 = _interopRequireDefault(require("./editForm/Component.edit.validation"));

var _utils = _interopRequireDefault(require("./editForm/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  var components = _lodash.default.cloneDeep([{
    type: 'tabs',
    key: 'tabs',
    components: [{
      label: '属性',
      key: 'display',
      weight: 0,
      components: _ComponentEdit2.default
    }, {
      label: '数据',
      key: 'data',
      weight: 10,
      components: _ComponentEdit.default
    }, {
      label: '验证',
      key: 'validation',
      weight: 20,
      components: _ComponentEdit3.default
    }]
  }]).concat(extend.map(function (items) {
    return {
      type: 'tabs',
      key: 'tabs',
      components: items
    };
  }));

  return {
    components: _lodash.default.unionWith(components, _utils.default.unifyComponents).concat({
      type: 'hidden',
      key: 'type'
    })
  };
}