<template>
  <div class="recipe-list">
    <SideBar
      @clearSelections="updateRecipeList"
      @filteredRecipes="updateRecipeList"
    />
    <ul class="recipe-items-list" v-if="selectedRecipes.length">
      <li v-for="item in selectedRecipes" v-bind:key="item.name">
        <router-link :to="recipeItemPath(item.id)">
          <BaseCard class="recipe-item">
            <h2>{{ item.name }}</h2>
            <img class="recipe-list-image" :src="item.image" :alt="item.name" />
          </BaseCard>
        </router-link>
      </li>
    </ul>
    <div v-else class="no-items-list">
      <h2>No Items</h2>
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
  data() {
    return {
      selectedRecipes: [],
      selectedTags: [],
    };
  },
  computed: {
    ...mapGetters({
      recipes: "recipes/getRecipes",
    }),
    showRecipes() {
      return this.selectedRecipes;
    },
  },
  methods: {
    updateRecipeList(array) {
      this.selectedTags = [...array];
      this.selectedRecipes = [];

      this.recipes.forEach((recipe) => {
        const tagNames = [];

        for (const tag in recipe.tags) {
          tagNames.push(recipe.tags[tag].name);
        }

        const shouldAdd = this.includesAll(tagNames, this.selectedTags);
        if (shouldAdd && this.selectedTags.length)
          this.selectedRecipes.push(recipe);
      });
    },
    includesAll(arr, values) {
      return values.every((v) => arr.includes(v));
    },
    recipeItemPath(id) {
      return `${this.$route.path}/${id}`;
    },
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
  margin: 2rem auto;
  width: 1000px;
  justify-content: space-evenly;
  padding: 2rem;
  background-color: #11f14ec4;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.recipe-items-list {
  padding: 0.5rem;
}

.recipe-items-list,
.no-items-list {
  width: 30rem;
}
.recipe-item {
  text-align: center;
  background: white;
  transition: transform 0.3s, filter 1.5s ease-in-out;
  filter: grayscale(100%);
  transform: scale(1);
  margin: 32px auto;
}
.recipe-item:hover {
  filter: grayscale(0);
  transform: scale(1.1);
  margin-bottom: 2rem;
}
.recipe-list-image {
  width: 100%;
  border-radius: 10%;
}
</style>

