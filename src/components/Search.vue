<template>
  <div>
    <div class="container">
            <div class="columns mt-1 is-multiline animate__animated animate__bounceInLeft">
        <div class="column is-6">
          <div class="field is-grouped">
            <p class="control is-expanded">
              <input class="input is-dark" 
                    type="text" 
                    placeholder="请输入待办事项"
                    v-model="newTodo"
                    @keyup.enter="emitAddNewTodo"
                    ref="newTodoInput"
              >
            </p>
            <p class="control">
              <a class="button is-dark"
                @click="emitAddNewTodo"
              >
                新增
              </a>
            </p>
          </div>
        </div>
        <div class="column is-4 is-offset-2">
          <div class="field has-addons">
            <div class=" control is-expanded is-flex">
              <input class="input is-dark mr-2" type="text" @keyup.enter="emitsetSearchTxt" placeholder="查找待办事项" v-model="searchTxt">
              <button class="button is-dark mr-2" @click="emitsetSearchTxt" >搜索</button>
              <button class="button is-dark" @click="emitShowAllResult">显示全部</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      newTodo: '',
      searchTxt: ''
    }
  },
  methods: {
    emitAddNewTodo() {
      this.$emit('emitAddNewTodo', this.newTodo)
      this.newTodo = ""// 删除input框中的内容
      this.$refs.newTodoInput.focus()
    },
    emitsetSearchTxt() {
      this.$emit('emitsetSearchTxt', this.searchTxt)
    },
    emitShowAllResult() {
      this.$emit('emitShowAllResult')
    }
  }
}
</script>

<style>

</style>