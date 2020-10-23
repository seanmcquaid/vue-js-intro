<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Welcome to easier two way binding!',
    };
  },
};
</script>

<style></style>
