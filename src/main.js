import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css'
import 'animate.css/animate.min.css'

Vue.config.productionTip =true

new Vue({
  render: h => h(App),
}).$mount('#app')
