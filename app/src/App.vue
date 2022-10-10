<template>
  <div>
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  created() {
    this.fetchRecipes();
  },
  methods: {
    ...mapActions({
      fetchRecipes: "recipes/fetchRecipes",
    }),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1,
h2,
h3,
h4 {
  margin: 0.2rem 0;
  padding: none;
  font-family: "Berkshire Swash", cursive;
}
body {
  margin: 0;
  background-image: url("./assets/food.jpg");
}
a:hover {
  text-decoration: none;
  color: black;
}
a:focus {
  text-decoration: none;
  color: black;
}
a:active {
  text-decoration: none;
  color: black;
}
a:visited {
  text-decoration: none;
  color: black;
}
a:link {
  text-decoration: none;
  color: black;
}
</style>
