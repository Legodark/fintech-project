import Vue from 'vue'
import Vuex from 'vuex'
import jwt from 'jwt-decode'
Vue.use(Vuex)


const store = new Vuex.Store({

  state: {
    token: null,
    user: null,
    isAuth: null,
    moves: [],
    moveQuantityIngreso: [],
    moveQuantityGasto: [],
    isNavOpen: false,
    filterDay: [],
    monthGastos: [{id: 1, spend: [], total: 0 },{id: 2,spend: [], total: 0 },{id: 3,spend: [], total: 0 },{id: 4,spend: 0 , total: 0 },{id: 5,spend: [], total: 0},{id: 6,spend: [], total: 0},{id: 7,spend: [], total: 0},{id: 8,spend: [], total: 0},{id: 9,spend: [], total: 0},{id: 10,spend: [], total: 0},{id: 11,spend: [], total: 0},{id: 12,spend: [], total: 0}],
    monthIngresos: [{id: 1, spend: [], total: 0 },{id: 2,spend: [], total: 0 },{id: 3,spend: [], total: 0 },{id: 4,spend: 0 , total: 0 },{id: 5,spend: [], total: 0},{id: 6,spend: [], total: 0},{id: 7,spend: [], total: 0},{id: 8,spend: [], total: 0},{id: 9,spend: [], total: 0},{id: 10,spend: [], total: 0},{id: 11,spend: [], total: 0},{id: 12,spend: [], total: 0}],
    loginError: ''
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
      state.isAuth = (payload !== null)
      state.user = null

      if (null !== payload) {
        state.user = jwt(payload)
      }

      window.localStorage.setItem('token', payload)
      window.localStorage.setItem('sliderOff', this.state.isNavOpen)
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
    },
    navigate(state) {
      state.isNavOpen = !state.isNavOpen

    },
    slideOff(state){
      state.isNavOpen = false
    },
    errorLogin(state) {
      state.errorLogin = 'Usuario o contraseño invalidos'
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
        return tottalsum.reduce((acum, quantity) => acum + quantity).toFixed(2)
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

    },
    graficCalculate(state){
      for (let monthReset of  state.monthIngresos){
        monthReset.spend = []
        monthReset.total = 0
      }
      for (let monthReset of  state.monthGastos){
        monthReset.spend = []
        monthReset.total = 0
      }
      for (let valor of state.moves) {
        if (valor.type !== "gasto") {
          let valores = valor.quantity;
          let transform = new Date(valor.date);
          let shortTime = {
            month: "numeric",
          }
          let fecha = new Intl.DateTimeFormat("en-US", shortTime).format(transform)
          let fechaInt = parseInt(fecha)
          state.filterDay.push(fechaInt)
          state.moveQuantityIngreso.push(valores);

          for (let mes of state.monthIngresos){
            if(fechaInt === mes.id){

              mes.spend.push(valor.quantity)

              const total = mes.spend.reduce((acum, quantity) => acum + quantity)
              mes.total = total
            }
          }
        }
        if (valor.type !== "ingreso") {
          let valores = valor.quantity;
          let transform = new Date(valor.date);
          let shortTime = {
            month: "numeric",
          }
          let fecha = new Intl.DateTimeFormat("en-US", shortTime).format(transform)
          let fechaInt = parseInt(fecha)
          state.filterDay.push(fechaInt)
          state.moveQuantityGasto.push(valores);

          for (let mes of state.monthGastos){

            if(fechaInt === mes.id){

              mes.spend.push(valor.quantity)

              const total = mes.spend.reduce((acum, quantity) => acum + quantity)
              mes.total = total
            }
          }
        }
      }
    console.log(state.monthIngresos, 'ingresos');
    console.log(state.monthGastos, 'gastos');
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
        console.log('Usuario o contraseño invalidos');
        context.commit('errorLogin')
      }
    },
    logOut(context){
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
    async registerMoves({dispatch,state}, move) {
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
        //commit("addMove", move)
        //dispatch("moveLoad")
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async updateMove({dispatch, state}, move){
      console.log(move);
      try {
        let config = {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        };
        await Vue.axios.patch(
          "http://localhost:3000/moves/update",
          move,
          config
        );
        dispatch("moveLoad")
      } catch (error) {
        console.log("No se ha podido actulizar el movimiento", error);
      }
    },
    async updateUser({state}, user){
      try {
        let config = {
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        };
        await Vue.axios.patch(
          `http://localhost:3000/auth/user`,
          user,
          config
        );
      } catch (error) {
        console.log("No se ha podido actulizar el usuario", error);
      }
    },
    async updatePassword({state}, user){
      try {
        let config = {
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        };
        await Vue.axios.patch(
          `http://localhost:3000/auth/change/user`,
          { password: user },
          config
        );
      } catch (error) {
        console.log("Las contraseñas no coinciden.", error);
      }
    },
    async updatePasswordLogin({state}, user){
      try {
        await Vue.axios.patch(
          `http://localhost:3000/auth/forward`,
          user
        );
      } catch (error) {
        console.log("Las contraseñas no coinciden.", error);
      }
    },
    async deleteAccount({state}, user){
      console.log(user);
      try {
        if (
          confirm(
            "Seguro que deseas eliminar tu cuenta? Esta operación no se puede deshacer"
          )
        ) {
          let config = {
            headers: {
              Authorization: `Bearer ${state.token}`
            }
          };
          await Vue.axios.delete(`http://localhost:3000/auth/user`, config);
        } else {
          return;
        }
      } catch (error) {
        console.log("La cuenta no se ha podido eliminar correctamente", error);
      }
    },
    async deleteMove({dispatch, state}, move) {

      try {
        if (
          confirm(
            "Seguro que deseas eliminar el movimiento? Esta operación no se puede deshacer"
          )
        ) {
          let config = {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          };
          await Vue.axios.delete(`http://localhost:3000/moves/delete/${move}`,
            config
          );
          dispatch("moveLoad")
        } else {
          return;
        }
      } catch (error) {
        console.log(
          "El movimiento no se ha podido eliminar correctamente",
          error
        );
      }
    },
    navigateBurguer({commit}){
      commit('navigate')
    },
    sliderOff({commit}){
      commit('slideOff')
    }
  },
  modules: {

  }

})

export default store


/*getTotalSpendByMonthsAndType: (state) => (type) => {

  //store.getters.getTotalSpendByMonthsAndType("gastos")

  const monthData =[]
  for (let month=0; month<=11;month++){
    //let totalQuantityMonth = 0

    const monthMoves = state.moves.filter(item => {
      item.date = new Date(item.date).getMonth()
      return (item.date === month && item.type === type)
    })
    console.log(monthMoves);
    const monthQuantity = monthMoves.map(item => item.quantity)
    console.log(monthQuantity);
    if (monthQuantity.length > 0){
      return monthQuantity.reduce((acc,current) => acc + current)
    }
    else{
      return console.log(0);
    }
    console.log(monthQuantity);
    monthData.push({
      month,
      totalMonth: monthQuantity
    })
    return monthData
  }
}*/


