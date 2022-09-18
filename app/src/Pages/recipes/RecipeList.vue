<template>
  <div class="recipe-list">
    <SideBar />
    <div class="recipe-items">
      <BaseCard v-for="recipe in recipes" :key="recipe.id">
        <h2>
          <u>{{ recipe.name }}</u>
        </h2>
        <h4>Time Make: {{ recipe.cook_time }}</h4>

        <h4>Ingredients:</h4>
        <ul v-for="ingredient in recipe.ingredients" :key="ingredient">
          <li>{{ ingredient.name }}: {{ ingredient.amount }}</li>
        </ul>
        <h4>Directions:</h4>
        <p v-for="direction in recipe.directions" :key="direction">
          {{ direction }}
        </p>
      </BaseCard>
    </div>
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
      recipes: "getRecipes",
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
  justify-content: space-between;
}
.recipe-items {
  width: 60%;
}
.controls {
  display: flex;
  justify-content: space-between;
}
</style>