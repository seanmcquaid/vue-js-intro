<script>
export default {
  created() {
    this.hello();
  },
  methods: {
    hello() {
      console.log('hello from mixin!');
    },
    conflicting() {
      console.log('from mixin');
    },
  },
};

// const app = Vue.createApp({
//   mixins: [myMixin],
//   data() {
//     return {
//       message: 'goodbye',
//       bar: 'def',
//     };
//   },
//   created() {
//     console.log('component hook called');
//     console.log(this.$data); // => { message: "goodbye", foo: "abc", bar: "def" }
//   },
// methods: {
//   conflicting() {
//   console.log('from self')
// }
// }
// });

//
// => "mixin hook called"
// => "component hook called"

// The component's options will take priority when there are conflicting keys in these objects:

// const app = Vue.createApp({
//   myOption: 'hello!'
// })

// // inject a handler for `myOption` custom option
// app.mixin({
//   created() {
//     const myOption = this.$options.myOption
//     if (myOption) {
//       console.log(myOption)
//     }
//   }
// })
</script>

// example // const app = Vue.createApp({ mixins: [myMixin] })
