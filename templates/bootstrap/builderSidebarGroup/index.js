"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"card form-builder-panel\" ref=\"group-panel-{{groupKey}}\">\r\n  <div class=\"card-header form-builder-group-header\" id=\"heading-{{groupKey}}\">\r\n    <h5 class=\"mb-0 mt-0\">\r\n      <button\r\n        class=\"btn btn-block builder-group-button\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\"#group-{{groupKey}}\"\r\n        aria-expanded=\"{{group.default}}\"\r\n        aria-controls=\"group-{{groupKey}}\"\r\n        ref=\"sidebar-anchor\"\r\n      >\r\n        {{group.title}}\r\n      </button>\r\n    </h5>\r\n  </div>\r\n  <div\r\n    id=\"group-{{groupKey}}\"\r\n    class=\"collapse {{group.default ? ' show' : ''}}\"\r\n    data-parent=\"#{{groupId}}\"\r\n    data-default=\"{{group.default}}\"\r\n    aria-labelledby=\"heading-{{groupKey}}\"\r\n    ref=\"sidebar-group\"\r\n  >\r\n    <div id=\"group-container-{{groupKey}}\" class=\"card-body no-drop p-2\" ref=\"sidebar-container\">\r\n      {% group.componentOrder.forEach(function(componentKey) { %}\r\n      <span data-type=\"{{group.components[componentKey].key}}\" class=\"btn btn-primary btn-sm btn-block formcomponent drag-copy\">\r\n        {% if (group.components[componentKey].icon) { %}\r\n          <i class=\"{{iconClass(group.components[componentKey].icon)}}\" style=\"margin-right: 5px;\"></i>\r\n        {% } %}\r\n        {{group.components[componentKey].title}}\r\n        </span>\r\n      {% }) %}\r\n      {{subgroups.join('')}}\r\n    </div>\r\n  </div>\r\n</div>\r\n";
var _default = {
  form: form
};
exports.default = _default;