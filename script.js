const App = new Vue({
  el: '#app',
  data: {
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
      content: '唱歌',
      isDone: false
    }],
    newTodo: "",
    isSuccessModalActive: false, // 控制添加modal框是否显示
    isDelModalActive: false,
    todoToBeDelId: '' // 当点击删除后，待删除的todo的id
  },
  computed: {
    finishedTodos() {
      return this.todos.filter(todo => todo.isDone === true)
    },
    unfinishedTodos () {
      return this.todos.filter(todo => todo.isDone != true)
    }
  },
  methods: {
    toggleDone(id) {
      this.todos.map((todo) => {
        if (todo.id === id) { todo.isDone = !todo.isDone }
        return todo
      })
    },
    toggleDelModal(id) {
      this.isDelModalActive =true;
      this.todoToBeDelId = id
    },
    toggleDelete() {
      this.todos = this.todos.filter((todo) => todo.id != this.todoToBeDelId)
      this.isDelModalActive =false
    },
    addNewTodos() {
      // 判断为空不添加并提示
      if (this.newTodo === "") {
        alert('您没有输入待办事项！')
        return
      }
      // 判断是否重复
      const isDuplicated = this.todos.some((todo) => {
        return this.newTodo === todo.content
      })
      if (isDuplicated) {
        alert('您输入重复的待办事项')
        return
      }
      const item = {
        id: Math.random(),
        content: this.newTodo,
        isDone: false
      }
      this.todos.unshift(item) // 将新代办push到data
      this.newTodo = ""// 删除input框中的内容
      this.isSuccessModalActive = true
      setTimeout(()=> {this.isSuccessModalActive = false}, 1000) // 1s后结束
      this.$refs.newTodoInput.focus()
    }
  }
})