import Vue from 'vue'
import VueRouter from 'vue-router'
// // 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

// 路由信息数组
const routes = [
  {
    path: '/',
    // redirect: '/layout',
    component: () => import('@v/dasboard/Dasboard.vue'),
    // meta: { title: '首页' }
  },
  // 登录页
  {
    path: '/login',
    name: 'Login',
    // redirect: '/layout',
    meta: { title: '登录' },
    component: () => import('@v/login/Login.vue'),
  },
  // 后台管理布局页面
  {
    path: '/layout',
    name: 'Layout',
    // redirect: '/role',
    meta: { title: 'Bing酒店管理系统' },
    component: () => import('@v/layout/Layout.vue'),
    children: [
      // 左侧菜单
      {
        path: 'role',
        meta: { title: '角色管理' },
        name: 'role',
        component: () => import('@v/role/Role.vue'),
      },
      {
        path: 'account',
        meta: { title: '账号管理' },
        name: 'account',
        component: () => import('@v/role/Account.vue'),
        // 设置缓存
        // meta:{
        //   keepAlive: true
        // }
      },
      {
        path: 'roomTest',
        meta: { title: '测试' },
        component: () => import('@v/roomTest/index.vue'),
      },
      {
        path: 'roomType',
        meta: { title: '客房类型' },
        component: () => import('@v/roomType/RoomType.vue'),
      },
      {
        path: 'roomManager',
        meta: { title: '客房管理' },
        component: () => import('@v/roomManager/RoomManager.vue'),
      },
      {
        path: 'guestList',
        meta: { title: '客户管理' },
        component: () => import('@v/guest/guestList.vue'),
      },


      // 右侧路由
      {
        path: 'message',
        meta: { title: '消息中心' },
        component: () => import('@v/message/Message.vue'),
      },
      {
        path: 'email',
        meta: { title: '邮件中心' },
        component: () => import('@v/email/Email.vue'),
      },
      {
        path: 'mine',
        meta: { title: '个人中心' },
        component: () => import('@v/mine/Mine.vue'),
      },
      {
        path: 'resetPwd',
        meta: { title: '修改密码' },
        component: () => import('@v/resetPwd/ResetPwd.vue'),
      },

    ],

  },
  {
    path: '*',
    component: () => import('@v/404/error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  };

  NProgress.start();
  next()
})

router.afterEach((to, from) => {
  NProgress.done();
})

export default router
