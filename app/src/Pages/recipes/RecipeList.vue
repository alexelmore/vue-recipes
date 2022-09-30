<template>
  <div class="recipe-list">
    <SideBar />
    <ul id="example-2">
      <li v-for="item in recipes" v-bind:key="item.name">
        <BaseCard
          >{{ item.name }} -
          <img class="recipe-list-image" :src="item.image" :alt="item.name" />
        </BaseCard>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SideBar from "../../components/layout/SideBar.vue";
export default {
  name: "RecipeList",
  components: {
    SideBar,
  },
  computed: {
    ...mapGetters({
      recipes: "recipes/getRecipes",
    }),
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.recipe-list {
  display: flex;
  margin: auto;
  min-width: 800px;
  max-width: 1000px;
  justify-content: space-evenly;
}
.recipe-items {
  width: 60%;
}
.recipe-list-image {
  height: 20rem;
}
.controls {
  display: flex;
  justify-content: space-between;
}
</style>