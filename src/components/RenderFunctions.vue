<script>
import Vue from 'vue';

export default {
  render() {
    const { h } = Vue;

    return h(
      'h' + this.level, // tag name
      {}, // props/attributes
      this.$slots.default() // array of children
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
