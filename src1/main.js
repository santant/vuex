import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import vueResource from 'vue-resource'

Vue.use(vueResource);

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
