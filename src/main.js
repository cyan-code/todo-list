import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css'
import 'animate.css/animate.min.css'
import request from './request'
import router from './router'
import store from './store'

Vue.prototype.$http = request

Vue.config.productionTip =true

Vue.prototype.$myBus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
