<template>
  <div id="demo">
    <div
      @mousemove="xCoordinate"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      class="movearea"
    >
      <h3>Move your mouse across the screen...</h3>
      <p>x: {{ x }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
    };
  },
  methods: {
    xCoordinate(e) {
      this.x = e.clientX;
    },
  },
};
</script>

<style>
.movearea {
  transition: 0.2s background-color ease;
}
</style>
