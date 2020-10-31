<template>

</template>

<script>
export default {
  name: 'TimeFormat',
  methods: {
    transformDate(move) {
      let transform = new Date(move.date);
      let shortTime = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      return new Intl.DateTimeFormat("en-US", shortTime).format(transform);
    },
  }
}
</script>

<style>

</style>
