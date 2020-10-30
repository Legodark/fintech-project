<template>
  <div id="burger" :class="{ active: isBurgerActive }" @click.prevent="toggle">
    <slot>
      <button type="button" class="burger-button" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
      </button>
    </slot>
  </div>
</template>
<script>

export default {
  name: 'Burguer',
  computed: {
    isBurgerActive() {
      return this.$store.state.isNavOpen;
    },
  },
  methods: {
    toggle() {
      this.$store.dispatch('navigateBurguer')
    },
  },
};
</script>
<style>

</style>
