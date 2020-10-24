<template>
  <div>
    {{ message }}
  </div>
  <TodoItem title="Hello" />
</template>

// $emit('funcName') can be used from child component to be caught by parent
component to use that func in the parent component, similar to angular

<script>
import TodoItem from './TodoItem';
export default {
  components: { TodoItem },
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise, // or any other constructor
  },
  emits: {
    'enlarge-text': () => console.log(),
  },
};
</script>

<style></style>
