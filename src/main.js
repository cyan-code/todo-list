import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css'
import 'animate.css/animate.min.css'
import request from './request'

Vue.prototype.$http = request

Vue.config.productionTip =true

Vue.prototype.$myBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
