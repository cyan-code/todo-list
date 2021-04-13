<template>
  <div id="app" class="outer">
    <div class="wraper">
      <div class="top">
        <Header />
        <transition
          appear
          appear-active-class="animate__animated animate__fadeIn"
          enter-active-class="animate__animated animate__fadeInRight"
          leave-active-class="animate__animated animate__fadeOutLeft aniamte"
          mode="out-in"
        >
          <router-view />
        </transition>
      </div>
      <Footer class="bottom" />
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  components: { Header, Footer },
  name: "App",
  data() {
    return {};
  },
  computed: {},
  beforeCreate: function () {
    // 阻止手机上缩放
    document.addEventListener("gesturestart", function (event) {
      event.preventDefault();
    });
  },
  created() {
    /* addEventListener("beforeunload", function(e) {
      localStorage.removeItem('isLogin')
    }) */
  },
};
</script>

<style scoped>
html, body {
  height: 100%;
}
.outer {
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
}
.wraper {
  min-height: 100%;
  display: flex;
  flex-direction: column;

}
.top {
  flex: 1;
}
.bottom {
  flex: 0
}
</style>
