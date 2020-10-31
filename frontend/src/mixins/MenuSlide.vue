<template>
  <div>
    <ul class="sidebar-panel-nav">
      <li><router-link to="/dashboard" v-if="$router.history.current['path'] !=='/dashboard'">Dashboard</router-link></li>
      <li><router-link to="/profile" v-if="$router.history.current['path'] !=='/profile'">Perfil</router-link></li>
      <li><router-link to="/moves" v-if="$router.history.current['path'] !=='/moves'">Movimientos</router-link></li>
      <li><router-link to="/entrys" v-if="$router.history.current['path'] !=='/entrys'">Ingresos</router-link></li>
      <li><router-link to="/spend" v-if="$router.history.current['path'] !=='/spend'">Gastos</router-link></li>
      <li class="text-warning" @click.prevent="logOut">LogOut</li>
    </ul>
  </div>
</template>

<script>
import GastosAdd from '@/components/movimientos/GastosAdd'
import IngresosAdd from '@/components/movimientos/IngresosAdd'
export default {
  name: 'MenuSlide',
  components: {
    GastosAdd,
    IngresosAdd
  },
  methods: {
    async logOut(){
       await this.$store.dispatch('logOut')
       this.closeSidebarPanel()
       this.$router.push('/')
    },
    closeSidebarPanel() {
      this.$store.dispatch("navigateBurguer");
    }
  }
};
</script>

<style></style>
