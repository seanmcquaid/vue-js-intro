<template>
  <ol>
    <li v-for="(todo, index) in todos" v-bind:key="index">
      <div v-for="value in todo" v-bind:key="value">
        {{ value }}
      </div>
    </li>
    <ul v-for="numbers in sets" :key="numbers">
      <li v-for="n in evenNumbers(numbers)" :key="n">{{ n }}</li>
    </ul>
    <div id="range" class="demo">
      <span v-for="n in 10" :key="n">{{ n }} </span>
    </div>
    <template v-for="todo in todos" :key="todo">
      <li v-if="!todo.isComplete">
        {{ todo }}
      </li>
    </template>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
      ],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  computed: {
    evenNumbers(numbers) {
      return numbers.filter(number => number % 2 === 0);
    },
  },
};
</script>

<style></style>
