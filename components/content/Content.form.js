"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Component = _interopRequireDefault(require("../_classes/component/Component.form"));

var _ContentEdit = _interopRequireDefault(require("./editForm/Content.edit.display"));

var _ContentEdit2 = _interopRequireDefault(require("./editForm/Content.edit.logic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Component.default.apply(void 0, [[{
    key: 'display',
    components: _ContentEdit.default
  }, {
    key: 'data',
    ignore: true
  }, {
    key: 'validation',
    ignore: true
  }, {
    key: 'logic',
    components: _ContentEdit2.default
  }]].concat(extend));
}