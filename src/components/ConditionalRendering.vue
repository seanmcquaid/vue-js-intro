<template>
  <template v-if="seen">This is meant for multiple elements</template>
  <div>
    <span v-if="seen" v-on:click="toggle">See me?</span>
    <span v-else-if="!seen">Hello!</span>
    <span v-else>GTFO</span>
    <span v-show="seen"
      >This will render the element in the dom still but will just toggle
      display</span
    >
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
