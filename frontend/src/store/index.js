import Vue from 'vue'
import Vuex from 'vuex'
import jwtDecode from "jwt-decode";
Vue.use(Vuex)


const store = new Vuex.Store({

  state: {
    token: null,
    userID: null,
    user: null,
    moves: []
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
    },
    setUserID(state, payload){
      state.userID = null

      if (null !== payload) {
      state.userID = jwtDecode(payload)
      }
    },
    setUser(state, payload){
      state.user = payload
    },
    setMoves(state, payload){
      state.moves = payload
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
        commit('setToken', localStorage.getItem('setToken'))
      } else {
        commit ('setToken', null)
      }
    },
    async userLoad({commit}){
      try{
      commit('setUserID', localStorage.getItem('setToken'))
      console.log(this.state.userID.id)

      const cargarUsuario = await Vue.axios.get(`http://localhost:3000/auth/user/${this.state.userID.id}`)
      commit('setUser', cargarUsuario.data)
      console.log(this.state.user);
    }
    catch(error){
      alert ('Ups, no se puede cargar los datos del usuario')
    }
    },
    async moveLoad({commit}){
      try{
        commit('setUserID', localStorage.getItem('setToken'))
        console.log(this.state.userID.id)

        const cargarMoves = await Vue.axios.get(`http://localhost:3000/moves/listmoves/${this.state.userID.id}`)
        commit('setMoves', cargarMoves.data)
      }
      catch(error){
        alert ('Ups, no se pueden cargar los datos de los movimientos')
      }
    }
  },
  modules: {

  }

})

export default store


