export default [
  {
    type: 'checkbox',
    input: true,
    key: 'enableDate',
    label: 'Enable Date Input',
    weight: 0,
    tooltip: 'Enables date input for this field.'
  },
  {
    type: 'textfield',
    input: true,
    key: 'datePicker.minDate',
    label: '最小日期',
    placeholder: 'yyyy-MM-dd',
    tooltip: '可以选择的最小日期。您还可以使用Moment.js函数。例如: \n \n moment().subtract(10, \'days\')',
    weight: 10
  },
  {
    type: 'textfield',
    input: true,
    key: 'datePicker.maxDate',
    label: '最大日期',
    placeholder: 'yyyy-MM-dd',
    tooltip: '可以选择的最大日期。 您还可以使用Moment.js函数。例如:  \n \n moment().add(10, \'days\')',
    weight: 20
  }
];
