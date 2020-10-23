<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your FIRST Vue.js App" /> -->
  <!-- <Counter /> -->
  <!-- <AttributeBinding /> -->
  <!-- <EventHandling /> -->
  <TwoWayBinding />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import Counter from './components/Counter.vue';
// import AttributeBinding from './components/AttributeBinding';
// import EventHandling from './components/EventHandling';
import TwoWayBinding from './components/TwoWayBinding';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Counter,
    // AttributeBinding,
    // EventHandling,
    TwoWayBinding,
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
