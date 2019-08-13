export default [
  {
    type: 'select',
    input: true,
    weight: 20,
    tooltip: 'Select the type of widget you\'d like to use',
    key: 'widget',
    defaultValue: 'choicesjs',
    label: '控件类型',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'ChoicesJS', value: 'choicesjs' },
        { label: 'HTML 5', value: 'html5' },
      ],
    },
  },
];
