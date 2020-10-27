import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({

  state: {
    token: null
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
    }
  },
  actions: {
    async login({commit}, usuario){

      try{
        const res = await Vue.axios.post('http://localhost:3000/auth/login', usuario)

        console.log(res.data.token);


        commit ('setToken', res.data.token )

        localStorage.setItem('setToken', res.data.token)
      }
      catch(error){
        console.log('tienes un error aqui');
      }
    },
    logOut(){
      localStorage.removeItem('setToken', null)
    },
    readToken({commit}){
      if(localStorage.getItem('token')){
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit ('setToken', null)
      }
    }
  },
  modules: {

  }

})

export default store


