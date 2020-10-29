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
      this.hideIcon = false;
    }
  }

}
</script>

<style></style>
