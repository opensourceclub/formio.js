"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [// {
//   type: 'select',
//   input: true,
//   key: 'displayInTimezone',
//   label: '时区',
//   tooltip: '选择显示日期时间的时区',
//   weight: 30,
//   defaultValue: 'viewer',
//   dataSrc: 'values',
//   data: {
//     values: [
//       { label: 'of Viewer', value: 'viewer' },
//       { label: 'of Submission', value: 'submission' },
//       { label: 'of Location', value: 'location' },
//       { label: 'UTC', value: 'utc' }
//     ]
//   }
// },
// {
//   type: 'select',
//   input: true,
//   key: 'timezone',
//   label: 'Select Timezone',
//   tooltip: 'Select the timezone you wish to display this Date',
//   weight: 31,
//   lazyLoad: true,
//   defaultValue: '',
//   valueProperty: 'name',
//   dataSrc: 'url',
//   data: {
//     url: 'https://formio.github.io/formio.js/resources/timezones.json'
//   },
//   template: '<span>{{ item.label }}</span>',
//   conditional: {
//     json: { '===': [{ var: 'data.displayInTimezone' }, 'location'] }
//   }
// },
{
  type: 'checkbox',
  input: true,
  key: 'useLocaleSettings',
  label: '区域设置',
  tooltip: '使用区域设置来显示日期和时间。',
  weight: 51
}, {
  type: 'checkbox',
  input: true,
  key: 'allowInput',
  label: '允许手动输入',
  tooltip: '如果您想让用户手动输入日期，请检查此选项。',
  weight: 51
}, {
  type: 'textfield',
  input: true,
  key: 'format',
  label: '格式',
  placeholder: '日期格式',
  description: '显示的日期格式',
  tooltip: '显示的日期格式',
  weight: 52
}];
exports.default = _default;