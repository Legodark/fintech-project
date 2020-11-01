<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {

  },
  methods: {
    ...mapActions(['readTokenFormLocalStorage'])
  },


  created(){
    this.readTokenFormLocalStorage()
  },
}
</script>

<style>

</style>

