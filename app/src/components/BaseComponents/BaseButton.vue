<template>
  <button v-if="!link" :class="mode"><slot></slot></button>
  <router-link :to="to" :class="mode" v-else>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-family: "Berkshire Swash", cursive;
  font-size: inherit;
  background-color: #005a00;
  border: 1px solid black;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
a:hover,
a:active,
button:hover,
button:active {
  background-color: #b1ffb1;
  border: 2px solid black;
  color: black;
}
.flat {
  background-color: transparent;
  color: white;
  border: none;
}
.outline {
  background-color: transparent;
  border-color: #270041;
  color: white;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #f8f4b6;
}
</style>