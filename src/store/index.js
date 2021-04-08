import Vue from 'vue';
import Vuex, { Store } from 'vuex'

Vue.use(Vuex);

const store = new Store({
  state: {
    todos: [{
      id: Math.random(),
      content: '吃饭',
      isDone: true
    },{
      id: Math.random(),
      content: '睡觉',
      isDone: false
    },{
      id: Math.random(),
      content: '旅游',
      isDone: true
    },{
      id: Math.random(),
      content: '买菜',
      isDone: false
    },{
      id: Math.random(),
      content: '烧饭',
      isDone: true
    },{
      id: Math.random(),
      content: '敲代码',
      isDone: false
    }],
    searchTxt: ''
  },
  getters: {
    finishedTodos(state) {
      return state.todos.filter(todo => todo.isDone === true && todo.content.indexOf(state.searchTxt) != -1)
      // return state.todos.filter(todo => todo.isDone)
    },
    unfinishedTodos (state) {
      // return state.todos.filter(todo => !todo.isDone)
      return state.todos.filter(todo => todo.isDone === false && todo.content.indexOf(state.searchTxt) != -1)
    },
  },
  mutations: {
    toggleDone(state, id) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) { todo.isDone = !todo.isDone }
        return todo
      })
    },
    toggleDelete(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id)
    },
    addNewTodos(state, item) {
      state.todos.unshift(item)
    },
    handleSearchTxt(state, txt) {
      state.searchTxt = txt
    }
  },
  actions: {
    
  },
  modules: {}
})

export default store