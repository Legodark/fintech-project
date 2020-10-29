<template>
  <div>
    <ul class="sidebar-panel-nav">
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/profile">Perfil</router-link></li>
      <li><router-link to="/moves">Movimientos</router-link></li>
      <li><router-link to="/entrys">Ingresos</router-link></li>
      <li><router-link to="/spend">Gastos</router-link></li>
      <li><IngresosAdd/></li>
      <li class="mt-3"><GastosAdd/></li>
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
  }
};
</script>

<style></style>
