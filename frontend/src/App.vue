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
    ...mapActions(['readToken'])
  },
  created(){
    this.readToken()
  }
}
</script>

<style>

</style>

