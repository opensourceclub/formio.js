"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: 'inputFormat',
  ignore: true
}, {
  key: 'persistent',
  ignore: true
}, {
  key: 'protected',
  ignore: true
}, {
  key: 'dbIndex',
  ignore: true
}, {
  key: 'encrypted',
  ignore: true
}, {
  key: 'multiple',
  ignore: true
}, {
  key: 'defaultValue',
  ignore: true
}, {
  key: 'customDefaultValuePanel',
  ignore: true
}, {
  key: 'calculateValuePanel',
  ignore: true
}, {
  key: 'passwordInfo',
  weight: 0,
  type: 'htmlelement',
  tag: 'div',
  className: 'alert alert-info',
  content: '密码字段使用单向bcrypt hash自动加密。这些hash也受到保护，不会在API中返回'
}];
exports.default = _default;