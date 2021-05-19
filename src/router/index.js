import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由信息数组
const routes = [
  // 登录页
  {
    path: '/',
    name: 'Login',
    redirect: '/layout',
    component: () => import('@v/login/Login.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@v/layout/Layout.vue'),
    meta: { title: '首页' },
    children: [
      {
        path: 'role',
        component: () => import('@v/role/Role.vue'),
        meta: { title: '角色管理' }
      },
      {
        path: 'account',
        component: () => import('@v/role/Account.vue'),
        meta: { title: '账号管理' }
      },
      {
        path: 'roomManager',
        component: () => import('@v/roomManager/index.vue'),
        meta: { title: '房间管理' }
      },
      // account
    ],

  },
  {
    path: '*',
    component: () =>import ('@v/404/error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
