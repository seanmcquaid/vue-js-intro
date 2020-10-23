<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your FIRST Vue.js App" /> -->
  <!-- <Counter /> -->
  <AttributeBinding />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import Counter from './components/Counter.vue';
import AttributeBinding from './components/AttributeBinding';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Counter,
    AttributeBinding,
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
