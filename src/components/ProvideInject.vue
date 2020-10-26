<template>
  <div>
    {{ todos.length }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: ['Feed a cat', 'buy tickets'],
    };
  },
  provide: {
    user: ' John Doe',
  },
};
</script>

// could then use inject to take that property and consume it // must return
object in provide function when working with references to objects to avoid eror
// be sure to use Vue.computed() to make child components reactive to parent
component changes

<style></style>
