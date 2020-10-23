<template>
  <div>
    <span v-if="seen" v-on:click="toggle">See me?</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
    };
  },
  methods: {
    toggle() {
      this.seen = !this.seen;
    },
  },
};
</script>

<style></style>
