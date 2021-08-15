import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './assets/scss/main.scss'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
