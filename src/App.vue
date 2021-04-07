<template>
  <div id="app">
    <Header />
    <router-view class="animate__animated animate__fadeInLeft" />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  components: { Header, Footer },
  name: 'App',
  data() {
    return {
    }
  },
  methods: {

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
