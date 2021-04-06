<template>
  <div id="app">
    <Header />
    <Search 
      @emitAddNewTodo="addNewTodos"
      @emitsetSearchTxt="setSearchTxt"
      @emitShowAllResult="showAllResult"
    />
    <Cards
      :finishedTodos="finishedTodos" 
      :unfinishedTodos="unfinishedTodos"
      @emitToggleDone="toggleDone"
      @emitToggleDelModal="toggleDelModal"
    />
    <Modal 
      :isSuccessModalActive="isSuccessModalActive"
      :isSuccessModalAnimate="isSuccessModalAnimate"
      :isDelModalActive="isDelModalActive"
      @emitToggleDelete="toggleDelete"
      @emitCancelModal="cancelModal"
    />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
import Cards from './components/Cards'
import Modal from './components/Modal'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Cards,
    Modal,
    Footer
  },
  data() {
    return {
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
    // newTodo: "",
    isSuccessModalActive: false, // 控制添加modal框是否显示
    isDelModalActive: false,
    todoToBeDelId: '', // 当点击删除后，待删除的todo的id
    isSuccessModalAnimate: '',
    searchTxt: '',
    // showSearchResult: false
  }
  },
  computed: {
    finishedTodos() {
      return this.todos.filter(todo => todo.isDone === true && todo.content.indexOf(this.searchTxt) != -1)
    },
    unfinishedTodos () {
      return this.todos.filter(todo => todo.isDone != true && todo.content.indexOf(this.searchTxt) != -1)
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
    cancelModal() {
      this.isDelModalActive= false
    },
    toggleDelete() {
      this.todos = this.todos.filter((todo) => todo.id != this.todoToBeDelId)
      this.isDelModalActive =false
    },
    addNewTodos(newTodo) {
      // 判断为空不添加并提示
      if (newTodo === "") {
        alert('您没有输入待办事项！')
        return
      }
      // 判断是否重复
      const isDuplicated = this.todos.some((todo) => {
        return newTodo === todo.content
      })
      if (isDuplicated) {
        alert('您输入重复的待办事项')
        return
      }
      const item = {
        id: Math.random(),
        content: newTodo,
        isDone: false
      }
      this.todos.unshift(item) // 将新代办push到data
      this.isSuccessModalActive = true
      setTimeout(() => {
        this.isSuccessModalAnimate = true
      }, 1000);
      setTimeout(()=> {
        this.isSuccessModalAnimate = false
        this.isSuccessModalActive = false
      }, 1300)
      this.$refs.newTodoInput.focus()
    },
    setSearchTxt(txt) {
      this.searchTxt= txt
    },
    showAllResult() {
      this.searchTxt = ''
    }
  },
  beforeCreate: function () {
    // 阻止手机上缩放
    document.addEventListener('gesturestart', function (event) {
      event.preventDefault()
  })
  }
}
</script>

<style>

</style>
