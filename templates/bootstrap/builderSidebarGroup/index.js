"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './form.hbs' */
var form = "<div class=\"card form-builder-panel\" ref=\"group-panel-{{groupKey}}\">\n  <div class=\"card-header form-builder-group-header\" id=\"heading-{{groupKey}}\">\n    <h5 class=\"mb-0 mt-0\">\n      <button\n        class=\"btn btn-block builder-group-button\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#group-{{groupKey}}\"\n        aria-expanded=\"{{group.default}}\"\n        aria-controls=\"group-{{groupKey}}\"\n        ref=\"sidebar-anchor\"\n      >\n        {{group.title}}\n      </button>\n    </h5>\n  </div>\n  <div\n    id=\"group-{{groupKey}}\"\n    class=\"collapse {{group.default ? ' show' : ''}}\"\n    data-parent=\"#{{groupId}}\"\n    data-default=\"{{group.default}}\"\n    aria-labelledby=\"heading-{{groupKey}}\"\n    ref=\"sidebar-group\"\n  >\n    <div id=\"group-container-{{groupKey}}\" class=\"card-body no-drop p-2\" ref=\"sidebar-container\">\n      {% group.componentOrder.forEach(function(componentKey) { %}\n      <span data-type=\"{{group.components[componentKey].key}}\" class=\"btn btn-primary btn-sm btn-block formcomponent drag-copy\">\n        {% if (group.components[componentKey].icon) { %}\n          <i class=\"{{iconClass(group.components[componentKey].icon)}}\" style=\"margin-right: 5px;\"></i>\n        {% } %}\n        {{group.components[componentKey].title}}\n        </span>\n      {% }) %}\n      {{subgroups.join('')}}\n    </div>\n  </div>\n</div>\n";
var _default = {
  form: form
};
exports.default = _default;