<template>
  <div id="app">
    <Search 
      @emitAddNewTodo="addNewTodos"
      
    />
    <Cards
      @emitToggleDelModal="toggleDelModal"
    />
    <Modal 
      :isSuccessModalActive="isSuccessModalActive"
      :isSuccessModalAnimate="isSuccessModalAnimate"
      :isDelModalActive="isDelModalActive"
      @emitToggleDelete="toggleDelete"
      @emitCancelModal="cancelModal"
    />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Search from '@/components/Search'
import Cards from '@/components/Cards'
import Modal from '@/components/Modal'
import Footer from '@/components/Footer'

import {mapGetters, mapState} from 'vuex'

export default {
  name: 'Todo',
  components: {
    Header,
    Search,
    Cards,
    Modal,
    Footer
  },
  data() {
    return {
    isSuccessModalActive: false, // 控制添加modal框是否显示
    isDelModalActive: false,
    todoToBeDelId: '', // 当点击删除后，待删除的todo的id
    isSuccessModalAnimate: '',
    // searchTxt: '',
  }
  },
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['', ''])
  },
  methods: {
    toggleDelModal(id) {
      this.isDelModalActive =true;
      this.todoToBeDelId = id
    },
    cancelModal() {
      this.isDelModalActive= false
    },
    toggleDelete() {
      this.$store.commit('toggleDelete', this.todoToBeDelId)
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
      this.$store.commit('addNewTodos', item) // 将新代办push到data
      this.isSuccessModalActive = true
      setTimeout(() => {
        this.isSuccessModalAnimate = true
      }, 1000);
      setTimeout(()=> {
        this.isSuccessModalAnimate = false
        this.isSuccessModalActive = false
      }, 1300)
    },
    // setSearchTxt(txt) {
    //   this.searchTxt= txt
    // },
    // showAllResult() {
    //   this.searchTxt = ''
    // }
  },
  created() {}
}
</script>

<style>

</style>
