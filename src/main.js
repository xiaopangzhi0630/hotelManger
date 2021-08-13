import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugin/index.js'
import '@/assets/style/base.scss'
// import Sortable from 'sortablejs'

import Blob from './utils/Blob'
import Export2Excel from './utils/Export2Excel.js'


Vue.config.productionTip = false
// 浏览器显示title
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })

import '../src/mock/index'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
