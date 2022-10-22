<template>
  <header>
    <nav>
      <h1>
        <BaseButton link="true" to="/recipes">Recipe Me!</BaseButton>
      </h1>
      <h1 class="favorite-container">
        <span class="favorite-number" v-if="currentFavCount > 0">{{
          currentFavCount
        }}</span>
        <BaseButton link="true" to="/addToFavPage">My Favs!</BaseButton>
      </h1>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheHeader",
  computed: {
    ...mapGetters({
      favorites: "recipes/getFavorites",
    }),
    currentFavCount() {
      return this.favorites.length;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  min-height: 6.5rem;
  background-color: #11f14ec4;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-bottom: 6px ridge #005a00;
}
header a {
  text-decoration: none;
  color: #dfffd2;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}
a:active,
a:hover,
a.router-link-active {
  border: 4px solid #f8f4b6;
}
h1 {
  margin: 0;
}
h1 a {
  color: white;
  margin: 0;
}
h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: #dfffd2;
}
header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 0.5rem;
}
.banner {
  display: flex;
  justify-content: center;
}
.banner h1 {
  width: 80%;
  text-align: center;
}
.banner a {
  border-radius: 10px;
  width: 100%;
  border: 2px solid #dfffd2;
  pointer-events: none;
}

.favorite-container {
  position: relative;
}

.favorite-number {
  position: absolute;
  background-color: yellow;
  color: #032f03;
  border-radius: 50%;
  width: 30px;
  font-size: 1.1rem;
  height: 33px;
  border: 2px solid black;
  left: -7px;
  top: 3px;
}
</style>