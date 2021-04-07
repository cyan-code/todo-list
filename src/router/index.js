import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Todo from '@/views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
    {
    path: '/todo',
    name: 'Todo',
    component: Todo
    }
]

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  routes
})

export default router
