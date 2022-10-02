<template>
  <BaseCard class="recipe-detail-item">
    <div class="recipe-detail-context">
      <h2>{{ recipe.name }}</h2>
      <p v-if="recipe.description">
        <i>{{ recipe.description }}</i>
      </p>
      <h4 v-if="recipe.total_time_minutes">
        Time To Cook: {{ recipe.total_time_minutes }} minutes
      </h4>
      <h4 v-if="recipe.yields">{{ recipe.yields }}</h4>
    </div>
    <img class="recipe-detail-image" :src="recipe.image" :alt="recipe.name" />
    <div class="recipe-detail-context" v-if="recipe.instructions">
      <h2>Cooking Instructions</h2>
      <ul v-for="(recipe, idx) in recipe.instructions" :key="recipe.id">
        <li>
          <strong>Step {{ idx + 1 }}:</strong> {{ recipe.display_text }}
        </li>
      </ul>
    </div>
  </BaseCard>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RecipeDetail",
  data() {
    return {
      recipe: "",
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      recipe: "recipes/getRecipeById",
    }),
  },
  created() {
    this.recipe = this.$store.getters["recipes/getRecipeById"](this.id);
  },
};
</script>

<style>
.recipe-detail-item {
  max-width: fit-content;
}
.recipe-detail-image {
  width: 100%;
  border-radius: 10%;
}
.recipe-detail-context {
  margin: 1rem auto;
  width: 30rem;
}
ul {
  list-style: none;
  margin: 1rem auto;
  text-align: left;
}
</style>