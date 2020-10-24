<template>
  <div id="inline-handler">
    <button @click="say('hi')">Say hi</button>
    <button @click="say('what')">Say what</button>
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <button @click="one($event), two($event)">
      Submit
    </button>
    <!-- the click event's propagation will be stopped -->
    <a @click.stop="doThis"></a>

    <!-- the submit event will no longer reload the page -->
    <form @submit.prevent="onSubmit"></form>

    <!-- modifiers can be chained -->
    <a @click.stop.prevent="doThat"></a>

    <!-- just the modifier -->
    <form @submit.prevent></form>

    <!-- use capture mode when adding the event listener -->
    <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
    <div @click.capture="doThis">...</div>

    <!-- only trigger handler if event.target is the element itself -->
    <!-- i.e. not from a child element -->
    <div @click.self="doThat">...</div>

    <!-- the scroll event's default behavior (scrolling) will happen -->
    <!-- immediately, instead of waiting for `onScroll` to complete  -->
    <!-- in case it contains `event.preventDefault()`                -->
    <div @scroll.passive="onScroll">...</div>

    <!-- only call `vm.submit()` when the `key` is `Enter` -->
    <input @keyup.enter="submit" />

    <input @keyup.page-down="onPageDown" />
  </div>
</template>

<script>
export default {
  methods: {
    say(message) {
      alert(message);
    },
    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
    one(event) {
      // first handler logic...
    },
    two(event) {
      // second handler logic...
    },
  },
};
</script>

<style></style>
