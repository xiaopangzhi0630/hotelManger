import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// 路由信息数组
const routes = [
  // 登录页
  {
    path: '/',
    name: 'Login',
    component: () => import('@v/login/Login.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@v/layout/Layout.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
