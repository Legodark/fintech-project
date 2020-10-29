import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import estilos from '@/assets/style/main.scss'
import vmodal from 'vue-js-modal'

import VueAxios from  'vue-axios'
import store from './store/index'


import { IconsPlugin } from 'bootstrap-vue'
Vue.use(IconsPlugin)


// rutes

import HomePage from '@/pages/HomePage'
import DashBoard from '@/pages/DashBoard'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ProfilePage from '@/pages/ProfilePage'
import Movimientos from '@/pages/Movimientos'
import Ingresos from '@/pages/Ingresos'
import Gastos from '@/pages/Gastos'

const routes = [

  { path: "/", name: "Home", component: HomePage },
  { path: "/dashboard", name: "DashBoard", component: DashBoard },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/profile", name: "Profile", component: ProfilePage},
  { path: "/moves", name: "Movimientos", component: Movimientos},
  { path: "/entrys", name: "Ingresos", component: Ingresos},
  { path: "/spend", name: "Gastos", component: Gastos},

]




const router = new VueRouter({ routes, mode: 'history' })

/*router.beforeEach((to, from, next) => {
  // ...
})*/



Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(vmodal)
Vue.use(Vuex)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
