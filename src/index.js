// （所有）插件入口

import Range from './packages/range/index'

const components = [
  Range,
];

const install = function (Vue, opts = {}) {
  components.map( component => {
    Vue.component(component.name, component);
  });
}

/* 支持使用标签的方式引入 */

if ( typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Range