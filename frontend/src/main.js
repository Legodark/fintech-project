import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueAxios from  'vue-axios'
import axios from 'axios'



// rutes

import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'

const routes = [

  { path: "/", name: "Home", component: HomePage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage }

]

const router = new VueRouter({ routes, mode: 'history' })



Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
