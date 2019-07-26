"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"panel panel-default form-builder-panel\" ref=\"group-panel-{{groupKey}}\">\n  <div class=\"panel-heading form-builder-group-header\">\n    <h5 class=\"panel-title\">\n      <button\n        class=\"btn btn-block builder-group-button\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-parent=\"#{{groupId}}\"\n        href=\"#group-{{groupKey}}\"\n        ref=\"sidebar-anchor\"\n      >\n        {{group.title}}\n      </button>\n    </h5>\n  </div>\n  <div\n    id=\"group-{{groupKey}}\"\n    class=\"panel-collapse collapse{{group.default ? ' in' : ''}}\"\n    data-default=\"{{group.default}}\"\n    ref=\"sidebar-group\"\n  >\n    <div id=\"group-container-{{groupKey}}\" class=\"panel-body no-drop\" ref=\"sidebar-container\">\n      {% group.componentOrder.forEach(function(componentKey) { %}\n      <span data-type=\"{{group.components[componentKey].key}}\" class=\"btn btn-primary btn-xs btn-block formcomponent drag-copy\">\n        {% if (group.components[componentKey].icon) { %}\n          <i class=\"{{iconClass(group.components[componentKey].icon)}}\" style=\"margin-right: 5px;\"></i>\n        {% } %}\n        {{group.components[componentKey].title}}\n      </span>\n      {% }) %}\n      {{subgroups.join('')}}\n    </div>\n  </div>\n</div>\n\n";
var _default = {
  form: form
};
exports.default = _default;