import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'

// 异步懒加载,只有这个组件的页面被激活的时候才会加载
const Todo = () => import(/* webpackChunkName:"Chunk-todo" */'@/views/Todo.vue') 
const NotFound = () => import(/* webpackChunkName:"Chunk-notFound" */'@/views/NotFound.vue')

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
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      isAuth: false
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
