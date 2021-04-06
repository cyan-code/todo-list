<template>
  <div>
    <div class="container">
      <div class="columns">
        <!-- 左边未完成 -->
        <div class="column is-6 animate__animated animate__bounceInLeft">
          <div class="panel is-dark">
            <div class="panel-heading is-flex is-justify-content-space-between">
              <span >未完成</span>
              <span v-cloak class="tag is-normal ml-1" style="vertical-align:text-top;">{{unfinishedTodos.length}}</span>
            </div>
            <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
              <div class="panel-block" style="display: block;" v-if="unfinishedTodos != '' " key="content">
                <transition-group tag="div" class="columns is-multiline" enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
                    <div class="column is-6" 
                        v-for="todo in unfinishedTodos"
                        :key="`todo-${todo.id}`"
                    >
                    <div class="card">
                      <div class="card-content">
                        <p class="subtitle" v-cloak>
                          {{todo.content}}
                        </p>
                      </div>
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <button class="button" 
                                  :class="todo.isDone ? '' : 'is-light' "
                                  @click="emitToggleDone(todo.id)"
                                  v-cloak
                          >标为{{todo.isDone ? '未' : '已'}}完成
                        </button>
                        </p>
                        <p class="card-footer-item">
                          <button class="button is-dark" @click="emitToggleDelModal(todo.id)">删除</button>
                        </p>
                      </footer>
                    </div>
                  </div>
                </transition-group>
              </div>
              <div class="panel-block is-flex is-justify-content-center" v-else key="no-content">
                <p class="my-6">没有未完成事项</p>
              </div>
            </transition>
          </div>
        </div>
        <!-- 右边已完成 -->
        <div class="column is-6 animate__animated animate__bounceInRight">
          <div class="panel">
            <div class="panel-heading is-flex is-justify-content-space-between">
              <span>已完成</span>
              <span class="tag is-dark ml-1" v-cloak style="vertical-align:text-top;">{{finishedTodos.length}}</span>
            </div>
            <div class="panel-block" style="display: block;" v-if="finishedTodos != '' ">
              <div class="columns is-multiline">
                <div class="column is-6" 
                      v-for="todo in finishedTodos"
                      :key="`todo-${todo.id}`"
                >
                  <div class="card">
                    <div class="card-content">
                      <p class="subtitle" v-cloak style="text-decoration:line-through">
                        {{todo.content}}
                      </p>
                    </div>
                    <footer class="card-footer">
                      <p class="card-footer-item">
                        <button class="button" 
                                :class="todo.isDone ? '' : 'is-light' "
                                @click="emitToggleDone(todo.id)"
                                v-cloak
                        >标为{{todo.isDone ? '未' : '已'}}完成
                      </button>
                      </p>
                      <p class="card-footer-item">
                        <button class="button is-dark" @click="emitToggleDelModal(todo.id)">删除</button>
                      </p>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-block is-flex is-justify-content-center" v-else>
              <p class="my-6">没有已完成事项</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: ['finishedTodos', 'unfinishedTodos'],
  methods: {
    emitToggleDone (id) {
      this.$emit('emitToggleDone', id)
    },
    emitToggleDelModal (id) {
      this.$emit('emitToggleDelModal' ,id)
    }
    
  }
}
</script>

<style>

</style>