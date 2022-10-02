<template>
  <div class="recipe-list">
    <SideBar
      @clearSelections="updateRecipeList"
      @filteredRecipes="updateRecipeList"
    />
    <ul id="example-2" v-if="selectedRecipes.length">
      <li v-for="item in selectedRecipes" v-bind:key="item.name">
        <BaseCard
          >{{ item.name }} -
          <img class="recipe-list-image" :src="item.image" :alt="item.name" />
        </BaseCard>
      </li>
    </ul>
    <div v-else>
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
      console.log("fired");
      console.log(array);
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