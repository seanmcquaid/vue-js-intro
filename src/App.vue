<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your FIRST Vue.js App" /> -->
  <!-- <Counter /> -->
  <!-- <AttributeBinding /> -->
  <EventHandling />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import Counter from './components/Counter.vue';
// import AttributeBinding from './components/AttributeBinding';
import EventHandling from './components/EventHandling';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Counter,
    // AttributeBinding,
    EventHandling,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
