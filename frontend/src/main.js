import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import estilos from '@/assets/style/main.css'



// rutes

import HomePage from '@/pages/HomePage'
import DashBoard from '@/pages/DashBoard'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ProfilePage from '@/pages/ProfilePage'

const routes = [

  { path: "/", name: "Home", component: HomePage },
  { path: "/dashboard", name: "DashBoard", component: DashBoard },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/profile", name: "Profile", component: ProfilePage}

]

const router = new VueRouter({ routes, mode: 'history' })



Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(Vuex)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
