"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui segment secondary form-builder-panel\" style=\"padding: 0\" ref=\"group-panel-{{groupKey}}\">\r\n  <div class=\"form-builder-group-header\">\r\n    <h5 class=\"panel-title\">\r\n      <button\r\n        class=\"ui button basic fluid builder-group-button\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-parent=\"{{groupId}}\"\r\n        data-target=\"#group-{{groupKey}}\"\r\n        ref=\"sidebar-anchor\"\r\n      >\r\n        {{group.title}}\r\n      </button>\r\n    </h5>\r\n  </div>\r\n</div>\r\n<div class=\"ui segment\" style=\"padding: 0\">\r\n  <div class=\"panel-collapse collapse {{group.default ? ' in' : ''}}\" data-default=\"{{group.default}}\" id=\"group-{{groupKey}}\" ref=\"sidebar-group\">\r\n    <div id=\"group-container-{{groupKey}}\" class=\"card-body panel-body no-drop\" ref=\"sidebar-container\">\r\n      {% group.componentOrder.forEach(function(componentKey) { %}\r\n      <span data-type=\"{{group.components[componentKey].key}}\" class=\"ui button mini primary fluid formcomponent drag-copy\">\r\n        {% if (group.components[componentKey].icon) { %}\r\n          <i class=\"{{iconClass(group.components[componentKey].icon)}}\" style=\"margin-right: 5px;\"></i>\r\n        {% } %}\r\n        {{group.components[componentKey].title}}\r\n        </span>\r\n      {% }) %}\r\n      {{subgroups.join('')}}\r\n    </div>\r\n  </div>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;