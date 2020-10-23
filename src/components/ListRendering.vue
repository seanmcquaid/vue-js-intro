<template>
  <ol>
    <li v-for="todo in todos" v-bind:key="todo">{{ todo.text }}</li>
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
