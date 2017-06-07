import Vue from 'vue'
import App from './App.vue'
//引入路由和ajax库
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
//vuex 具体东西
import store from './store/'

import routerConfig from './router.config.js'

Vue.use(VueRouter);
Vue.use(vueResource);


//生成路由实例:
const router = new VueRouter(routerConfig)

new Vue({
	router,
	store,
	el: '#app',
	render: h => h(App)
})