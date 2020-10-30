<template>

    <router-view></router-view>

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
  }
}
</script>

<style>

</style>

