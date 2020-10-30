import Vue from 'vue'
import Vuex from 'vuex'
import jwtDecode from "jwt-decode";
Vue.use(Vuex)


const store = new Vuex.Store({

  state: {
    token: null,
    user: null,
    moves: []
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
      window.localStorage.setItem('token', payload)
    },
    removeToken(state){
      state.token = null
      window.localStorage.removeItem('token')
    },
    setUser(state, payload){
      state.user = payload
    },
    setMoves(state, payload){
      state.moves = payload
    },
    addMove(state, payload){
      state.moves.push(payload)
    }
  },
  // calculo de gastos
  getters: {
    totalGastos(state) {
      const gastosOBG = state.moves;

      if (gastosOBG.length > 0) {
        const tottalsum = gastosOBG.map((gastos) => {
          return gastos.type === "gasto" ? gastos.quantity : 0;
        });
        return tottalsum.reduce((acum, quantity) => acum + quantity).toFixed(2);
      } else {
        return 0;
      }
    },
  // calculo ingresos
    totalIngresos(state) {
      const ingresosOBG = state.moves;

      if(ingresosOBG.length > 0) {
        const tottalsum = ingresosOBG.map((ingresos) => {
          return ingresos.type === "ingreso" ? ingresos.quantity : 0;
        });
        return tottalsum.reduce((acum, quantity) => acum + quantity).toFixed(2);
      }else {
        return 0;
      }

    }


  },
  actions: {
    // context contiene todo el storage | usuario contiente los datos que vienen del formulario
    async login(context, usuario){

      try{
        const res = await Vue.axios.post('http://localhost:3000/auth/login', usuario)

        console.log(res.data.token);
        console.log(usuario);
        console.log(context);

        context.commit ('setToken', res.data.token )

      }
      catch(error){
        console.log('tienes un error aqui');
      }
    },
    logOut(){
      context.commit ('removeToken')
    },
    readTokenFormLocalStorage({commit}){
      if(window.localStorage.getItem('token')){
        commit('setToken', window.localStorage.getItem('token'))
      } else {
        commit ("removeToken")
      }
    },
    async userLoad({commit, state}){
      try{
        const config = {
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        }

      const cargarUsuario = await Vue.axios.get(`http://localhost:3000/auth/user`, config)
      commit('setUser', cargarUsuario.data)
      console.log(this.state.user);
    }
    catch(error){
      alert ('Ups, no se puede cargar los datos del usuario')
    }
    },
    async moveLoad({commit, state}){
      try{
        const config = {
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        }
        const cargarMoves = await Vue.axios.get(`http://localhost:3000/moves/listmoves`, config)
        commit('setMoves', cargarMoves.data)
      }
      catch(error){
        alert ('Ups, no se pueden cargar los datos de los movimientos')
      }
    },
    async registerMoves({commit, dispatch,state}, move) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        };
        await Vue.axios.post(
          "http://localhost:3000/moves/entry",
          move,
          config
        );
        commit("addMove", move)
        //dispatch("moveLoad")
      } catch (error) {
        console.log(error.response.data);
      }
    }
  },
  modules: {

  }

})

export default store


