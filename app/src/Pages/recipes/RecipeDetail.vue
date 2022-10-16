<template>
  <BaseCard class="recipe-detail-item">
    <BaseDialog @close="this.closeModal()" :show="showRegModal" title="Huzzah!">
      <h3 class="dialog-message">{{ message }}</h3>
      <BaseButton link="true" to="/addToFavPage">Go To My Favs!</BaseButton>
    </BaseDialog>
    <BaseCard class="recipe-detail-context">
      <font-awesome-icon
        icon="fa-solid fa-heart"
        :class="{ 'is-favorite': recipe.isFavorite }"
        @click.stop="toggleItemFavorites(recipe, recipe.isFavorite)"
      />
      <h2 class="recipe-item-name">{{ recipe.name }}</h2>
      <p v-if="recipe.description">
        <i>{{ recipe.description }}</i>
      </p>
      <h4 v-if="recipe.total_time_minutes">
        Time To Cook: {{ recipe.total_time_minutes }} minutes
      </h4>
      <h4 v-if="recipe.yields">{{ recipe.yields }}</h4>
    </BaseCard>
    <img class="recipe-detail-image" :src="recipe.image" :alt="recipe.name" />
    <BaseCard class="recipe-detail-ingredients" v-if="recipe.ingredients">
      <h2>Ingredients</h2>
      <div
        :style="[index !== 0 ? 'display:none;' : '']"
        v-for="(recipe, index) in recipe.ingredients"
        :key="recipe.id"
      >
        <ul v-for="(ing, idx) in recipe.components" :key="ing">
          <li>
            <strong>{{ idx + 1 }}:</strong> {{ ing.raw_text }}
          </li>
        </ul>
      </div>
    </BaseCard>
    <BaseCard class="recipe-detail-context" v-if="recipe.instructions">
      <h2>Cooking Instructions</h2>
      <ul v-for="(recipe, idx) in recipe.instructions" :key="recipe.id">
        <li>
          <strong>Step {{ idx + 1 }}:</strong> {{ recipe.display_text }}
        </li>
      </ul>
    </BaseCard>
  </BaseCard>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "RecipeDetail",
  data() {
    return {
      recipe: "",
      showRegModal: false,
      message: "",
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
  methods: {
    toggleItemFavorites(recipe, isFavorite) {
      console.log(isFavorite);
      if (!isFavorite) {
        this.message = `"${recipe.name}" has been added to your favorites!`;
        this.showRegModal = true;

        this.addToFavorites(recipe);
      } else {
        this.message = `"${recipe.name}" has been removed from your favorites!`;
        this.showRegModal = true;

        this.removeFromFavorites(recipe);
      }
    },

    ...mapActions({
      addToFavorites: "recipes/addToFavorites",
      removeFromFavorites: "recipes/removeFromFavorites",
    }),

    closeModal() {
      this.showRegModal = false;
    },
  },
};
</script>

<style>
.recipe-detail-item {
  max-width: fit-content;
  background-color: #11f14ec4;
  border: 2px black;
  border: 6px ridge #005a00;
}
.recipe-detail-image {
  width: 100%;
  border-radius: 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.recipe-detail-context {
  margin: 1rem auto;
  padding: 2rem;
  background: white;
  border-radius: 3%;
  position: relative;
}
.recipe-detail-context li {
  font-size: 1.3rem;
}
.recipe-detail-ingredients {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 1rem auto;
  background: white;
  border-radius: 3%;
  padding: 1rem;
  font-size: 1.3rem;
  text-transform: capitalize;
}

ul {
  list-style: none;
  margin: 1rem auto;
  text-align: left;
}
</style>