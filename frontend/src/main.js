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
import Legal from '@/pages/LegalPage'

const routes = [

  { path: "/", name: "Home", component: HomePage },
  { path: "/dashboard", name: "DashBoard", component: DashBoard, meta: { private: true, AutentificationProfile: ['user'] } },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/profile", name: "Profile", component: ProfilePage, meta: { private: true, AutentificationProfile: ['user'] } },
  { path: "/moves", name: "Movimientos", component: Movimientos, meta: { private: true, AutentificationProfile: ['user'] }},
  { path: "/entrys", name: "Ingresos", component: Ingresos, meta: { private: true, AutentificationProfile: ['user'] }},
  { path: "/spend", name: "Gastos", component: Gastos, meta: { private: true, AutentificationProfile: ['user'] }},
  { path: "/legal", name: "Legal", component: Legal, meta: { private: true, AutentificationProfile: ['user'] }},
  { path: "*", name: "error", component: HomePage }

]

// Restricciones de acceso

const router = new VueRouter({ routes, mode: 'history' })

router.beforeEach((to, from, next) => {
  store.dispatch('readTokenFormLocalStorage')
  if (to.matched.some(route => route.meta.private)) {
    const isAuth = store.state.isAuth
    console.log(store.state.user);

    if (isAuth) {
      if (to.meta.hasOwnProperty('AutentificationProfile')) {
          console.info(to.meta.AutentificationProfile)
          if (!to.meta.AutentificationProfile.includes(store.state.user.profile)) {
              alert('No tienes permitida la entrada a esta ruta')
              next('/dashboard')
          }
      }

      next()
    } else {
        next("/login")
    }
  } else {
      next()
  }
})

// Filtros

Vue.filter('upper', (value) => {
  return value.replace(/\b\w/g, word => word.toUpperCase())
})



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
