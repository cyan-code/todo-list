<template>
  <div id="app">
    <Header />
    <transition 
      appear
      appear-active-class="animate__animated animate__fadeIn"
      enter-active-class="animate__animated animate__fadeInRight" 
      leave-active-class="animate__animated animate__fadeOutLeft aniamte" 
      mode="out-in"> 
      <router-view />
    </transition>
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
  computed: {

  },
  beforeCreate: function () {
    // 阻止手机上缩放
    document.addEventListener('gesturestart', function (event) {
      event.preventDefault()
  })
  },
  created() {
    /* addEventListener("beforeunload", function(e) {
      localStorage.removeItem('isLogin')
    }) */
  }
}
</script>

<style>

</style>
