<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>

export default {
  methods: {
    closeSidebarPanel() {
      this.$store.dispatch("navigateBurguer");
    }
  },
  computed: {
    isPanelOpen() {
      return this.$store.state.isNavOpen;
    }
  }
};
</script>
<style></style>
