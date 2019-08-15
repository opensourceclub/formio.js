"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("../../_classes/component/editForm/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  type: 'panel',
  title: 'Row View Validation',
  collapsible: true,
  collapsed: true,
  style: {
    'margin-bottom': '10px'
  },
  key: 'custom-validation-row',
  weight: 250,
  components: [_utils.default.logicVariablesTable('<tr><th>input</th><td>The value that was input into this component</td></tr>'), {
    type: 'textarea',
    key: 'validate.row',
    rows: 5,
    editor: 'ace',
    hideLabel: true,
    input: true
  }, {
    type: 'htmlelement',
    tag: 'div',
    content: "\n          <small>\n            <p>Enter custom validation code.</p>\n            <p>You must assign the <strong>valid</strong> variable as either <strong>true</strong> or an error message if validation fails.</p>\n            <h5>Example:</h5>\n            <pre>valid = (row.myfield === 'Joe') ? true : 'Your name must be \"Joe\"';</pre>\n          </small>"
  }]
}];
exports.default = _default;