import Vue from 'vue';
import Vuex, { Store } from 'vuex'

Vue.use(Vuex);

// 示例数据
const exampleData = [{
  id: Math.random(),
  content: 'example 1',
  isDone: true
},{
  id: Math.random(),
  content: 'example 2',
  isDone: false
}]

const saveTodos2LocalStorage = (store) => {
  store.subscribe((mutations, state) => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  })
}

const store = new Store({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || exampleData,
    searchTxt: ''
  },
  getters: {
    finishedTodos(state) {
      return state.todos.filter(todo => todo.isDone === true && todo.content.indexOf(state.searchTxt) != -1)
    },
    unfinishedTodos (state) {
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
  modules: {},
  plugins: [saveTodos2LocalStorage]
})

export default store