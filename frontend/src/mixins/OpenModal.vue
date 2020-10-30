<template> </template>

<script>
export default {
  name: 'OpenModal',
  methods:{
    openModal() {
      this.$modal.show("my-first-modal-move");
    },
    hide() {
      this.$modal.hide("my-first-modal-move");
    },
    openModalGasto() {
      this.$modal.show("my-first-modal-gasto");
    },
    hideGasto() {
      this.$modal.hide("my-first-modal-gasto");
    },
    openModalIngreso() {
      this.$modal.show("my-first-modal-ingreso");
    },
    hideIngreso() {
      this.$modal.hide("my-first-modal-ingreso");
    }
  }

}
</script>

<style></style>
