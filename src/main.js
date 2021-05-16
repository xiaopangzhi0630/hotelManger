import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugin/index.js'
import '@/assets/style/base.scss'


Vue.config.productionTip = false
// 浏览器显示title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
