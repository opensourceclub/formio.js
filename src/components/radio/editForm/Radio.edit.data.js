import BuilderUtils from '../../../utils/builder';

export default [
  {
    key: 'multiple',
    ignore: true,
  },
  {
    type: 'datagrid',
    input: true,
    label: '可选值',
    key: 'values',
    tooltip: '可以为该字段选择的值。"值"是与表单数据一起提交的文本。"标签"是出现在表单单选按钮旁边的文本',
    weight: 10,
    reorder: true,
    defaultValue: [{ label: '', value: '' }],
    components: [
      {
        label: '标签',
        key: 'label',
        input: true,
        type: 'textfield',
      },
      {
        label: '值',
        key: 'value',
        input: true,
        type: 'textfield',
        allowCalculateOverride: true,
        calculateValue: { _camelCase: [{ var: 'row.label' }] },
      },
      {
        type: 'select',
        input: true,
        weight: 180,
        label: '快照',
        key: 'shortcut',
        tooltip: '此选项的快照',
        dataSrc: 'custom',
        data: {
          custom({
            instance: {
              root: {
                editForm,
                editComponent,
              } = {},
            } = {},
          }) {
            return BuilderUtils.getAvailableShortcuts(editForm, editComponent);
          },
        },
      },
    ],
  },
];
