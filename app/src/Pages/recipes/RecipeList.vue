<template>
  <div>
    <div v-for="recipe in recipes" :key="recipe.id">
      <h2>
        <u>{{ recipe.name }}</u>
      </h2>
      <h3>Time Make: {{ recipe.cook_time }}</h3>
      <ul v-for="ingredient in recipe.ingredients" :key="ingredient">
        <li>{{ ingredient.name }}: {{ ingredient.amount }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RecipeList",
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
.controls {
  display: flex;
  justify-content: space-between;
}
</style>