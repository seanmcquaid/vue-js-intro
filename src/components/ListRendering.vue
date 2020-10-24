<template>
  <ol>
    <li v-for="(todo, index) in todos" v-bind:key="index">{{ todo.text }}</li>
  </ol></template
>

<script>
export default {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
      ],
    };
  },
};
</script>

<style></style>
