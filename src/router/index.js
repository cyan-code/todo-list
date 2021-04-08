import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Todo from '@/views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path:'/login',
    name: 'Login',
    component: Login,
    meta: {
      isAuth: false
    }
  },
    {
    path: '/todo',
    name: 'Todo',
    component: Todo,
    meta: {
      isAuth: true
    }
    }
]

const router = new VueRouter({
  mode: 'hash',
  // 项目上线使用历史模式，开发基于hash模式
  // mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  routes
})

// 全局导航守卫，未登录转登录页
router.beforeEach((from, to, next) => {
  const isLogin = localStorage.getItem('isLogin')
// 这里写一个from的，这样可以避免直接输入地址的时候跳转
  if (from.meta.isAuth) {
    if (isLogin) { next() }
    else {next('/login')}
  }
  else {next()}

  if (to.meta.isAuth) {
    if (isLogin) { next() }
    else {next('/login')}
  }
  else {next()}

})


export default router
