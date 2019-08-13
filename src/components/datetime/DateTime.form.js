import baseEditForm from '../_classes/component/Component.form';

import DateTimeEditData from './editForm/DateTime.edit.data';
import DateTimeEditDate from './editForm/DateTime.edit.date';
import DateTimeEditDisplay from './editForm/DateTime.edit.display';
import DateTimeEditTime from './editForm/DateTime.edit.time';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: DateTimeEditDisplay
    },
    {
      label: '日期',
      key: 'date',
      weight: 1,
      components: DateTimeEditDate
    },
    {
      label: '时间',
      key: 'time',
      weight: 2,
      components: DateTimeEditTime
    },
    {
      key: 'data',
      components: DateTimeEditData
    }
  ], ...extend);
}
