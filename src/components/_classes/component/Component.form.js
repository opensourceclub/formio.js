import _ from 'lodash';

import ComponentEditData from './editForm/Component.edit.data';
import ComponentEditDisplay from './editForm/Component.edit.display';
import ComponentEditValidation from './editForm/Component.edit.validation';
import EditFormUtils from './editForm/utils';

export default function(...extend) {
  const components = _.cloneDeep([
    {
      type: 'tabs',
      key: 'tabs',
      components: [
        {
          label: '属性',
          key: 'display',
          weight: 0,
          components: ComponentEditDisplay
        },
        {
          label: '数据',
          key: 'data',
          weight: 10,
          components: ComponentEditData
        },
        {
          label: '验证',
          key: 'validation',
          weight: 20,
          components: ComponentEditValidation
        }
      ]
    }
  ]).concat(extend.map((items) => ({
    type: 'tabs',
    key: 'tabs',
    components: items
  })));
  return {
    components: _.unionWith(components, EditFormUtils.unifyComponents).concat({
      type: 'hidden',
      key: 'type'
    })
  };
}
