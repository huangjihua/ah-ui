import Vue from 'vue'
import App from './App.vue'

import AhUI  from './index.js'
Vue.use(AhUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
