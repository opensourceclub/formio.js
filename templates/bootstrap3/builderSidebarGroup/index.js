"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"panel panel-default form-builder-panel\" ref=\"group-panel-{{groupKey}}\">\r\n  <div class=\"panel-heading form-builder-group-header\">\r\n    <h5 class=\"panel-title\">\r\n      <button\r\n        class=\"btn btn-block builder-group-button\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-parent=\"#{{groupId}}\"\r\n        href=\"#group-{{groupKey}}\"\r\n        ref=\"sidebar-anchor\"\r\n      >\r\n        {{group.title}}\r\n      </button>\r\n    </h5>\r\n  </div>\r\n  <div\r\n    id=\"group-{{groupKey}}\"\r\n    class=\"panel-collapse collapse{{group.default ? ' in' : ''}}\"\r\n    data-default=\"{{group.default}}\"\r\n    ref=\"sidebar-group\"\r\n  >\r\n    <div id=\"group-container-{{groupKey}}\" class=\"panel-body no-drop\" ref=\"sidebar-container\">\r\n      {% group.componentOrder.forEach(function(componentKey) { %}\r\n      <span data-type=\"{{group.components[componentKey].key}}\" class=\"btn btn-primary btn-xs btn-block formcomponent drag-copy\">\r\n        {% if (group.components[componentKey].icon) { %}\r\n          <i class=\"{{iconClass(group.components[componentKey].icon)}}\" style=\"margin-right: 5px;\"></i>\r\n        {% } %}\r\n        {{group.components[componentKey].title}}\r\n      </span>\r\n      {% }) %}\r\n      {{subgroups.join('')}}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n";
var _default = {
  form: form
};
exports.default = _default;