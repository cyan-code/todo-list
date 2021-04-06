<template>
  <div>
    <div class="modal" :class="isSuccessModalActive ? 'is-active' : '' ">
      <div class="modal-background"></div>
      <div class="modal-content animate__animated animate__fadeInUp animate__faster" :class="isSuccessModalAnimate ? 'animate__animated animate__fadeOutUp' : ''">
        <div class="notification">
          <span>添加成功！</span>
        </div>
      </div>
    </div>
    <div class="modal" :class="isDelModalActive ? 'is-active' : '' ">
      <div class="modal-background"></div>
      <div class="modal-card animate__animated animate__fadeInUp animate__faster">
        <header class="modal-card-head">确认提示</header>
        <section class="modal-card-body">
          确认删除该待办事项？
        </section>
        <footer class="modal-card-foot">
          <button class="button is-danger" @click="emitToggleDelete">删除</button>
          <button class="button is-dark" @click="emitCancelModal">取消</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['isDelModalActive','isSuccessModalAnimate', 'isSuccessModalActive'],
  methods: {
    emitCancelModal() {
      this.$emit('emitCancelModal')
    },
    emitToggleDelete() {
      this.$emit('emitToggleDelete')
    }
  }
};
</script>

<style>
</style>