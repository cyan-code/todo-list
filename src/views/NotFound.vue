<template>
  <div>
    <div class="container">
      <div class="columns my-5 is-centered">
        <div class="column is-4">
          <figure class="image is-128x128 is-rounded animate__animated animate__rubberBand animate__delay-1s">
            <img class="is-rounded" src="@/assets/404.jpg" alt="404">
          </figure>
          <div class="not-found is-size-4 mt-2">
            <div>你访问的页面未找到</div>
            <div class="is-size-6">{{countDown}}秒后返回登录页面...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      countDown: '3'
    }
  },
  created() {
    setInterval(() => {
      this.countDown--
    }, 1000);
    // 3秒返回
    setTimeout(() => {
      this.$router.push('/')
    }, 3000);
  }
}
</script>

<style scoped>
figure {
  margin: auto;
}
.not-found {
  text-align: center;
}
</style>