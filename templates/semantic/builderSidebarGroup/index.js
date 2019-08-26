"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"ui segment secondary form-builder-panel\" style=\"padding: 0\" ref=\"group-panel-{{groupKey}}\">\n  <div class=\"form-builder-group-header\">\n    <h5 class=\"panel-title\">\n      <button\n        class=\"ui button basic fluid builder-group-button\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-parent=\"{{groupId}}\"\n        data-target=\"#group-{{groupKey}}\"\n        ref=\"sidebar-anchor\"\n      >\n        {{group.title}}\n      </button>\n    </h5>\n  </div>\n</div>\n<div class=\"ui segment\" style=\"padding: 0\">\n  <div class=\"panel-collapse collapse {{group.default ? ' in' : ''}}\" data-default=\"{{group.default}}\" id=\"group-{{groupKey}}\" ref=\"sidebar-group\">\n    <div id=\"group-container-{{groupKey}}\" class=\"card-body panel-body no-drop\" ref=\"sidebar-container\">\n      {% group.componentOrder.forEach(function(componentKey) { %}\n      <span data-type=\"{{group.components[componentKey].key}}\" class=\"ui button mini primary fluid formcomponent drag-copy\">\n        {% if (group.components[componentKey].icon) { %}\n          <i class=\"{{iconClass(group.components[componentKey].icon)}}\" style=\"margin-right: 5px;\"></i>\n        {% } %}\n        {{group.components[componentKey].title}}\n        </span>\n      {% }) %}\n      {{subgroups.join('')}}\n    </div>\n  </div>\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;