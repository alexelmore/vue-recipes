<template>
  <div>
    <div>
      <h2 class="filter-title">Filter Recipes</h2>
      <BaseButton @click="clearSelections" mode="flat" class="filter-cta">
        {{ ctaText }}
      </BaseButton>
    </div>

    <div class="filter-items">
      <BaseCard>
        <h2 class="filter-title">Meal Type</h2>
        <span class="filter-option">
          <div>
            <input
              type="checkbox"
              id="breakfast"
              name="breakfast"
              value="breakfast"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="breakfast"> Breakfast</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="brunch"
              name="brunch"
              value="brunch"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="brunch"> Brunch</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="lunch"
              name="lunch"
              value="Lunch"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="lunch"> Lunch</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dinner"
              name="dinner"
              value="dinner"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="dinner"> Dinner</label>
          </div>
        </span>
      </BaseCard>
      <BaseCard>
        <h2>Dietary Restrictions</h2>
        <span class="filter-option">
          <div>
            <input
              type="checkbox"
              id="vegetarian"
              name="vegetarian"
              value="vegetarian"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="vegetarian"> Vegetarian</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="vegan"
              name="vegan"
              value="vegan"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="vegan"> Vegan</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dairy_free"
              name="dairy_free"
              value="dairy_free"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="dairy_free"> Dairy-Free</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="gluten_free"
              name="gluten_free"
              value="gluten_free"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="gluten_free"> Gluten-Free</label>
          </div>
        </span>
      </BaseCard>
      <BaseCard>
        <h2>Diffculty</h2>
        <span class="filter-option">
          <div>
            <input
              type="checkbox"
              id="under_15_minutes"
              name="under_15_minutes"
              value="under_15_minutes"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="under_15_minutes"> Under 15 Minutes</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="under_30_minutes"
              name="under_30_minutes"
              value="under_30_minutes"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="under_30_minutes"> Under 30 Minutes</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="under_45_minutes"
              name="under_45_minutes"
              value="under_45_minutes"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="under_45_minutes"> Under 45 Minutes</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="under_1_hour"
              name="under_1_hour"
              value="under_1_hour"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.searchTags)"
            />
            <label for="under_1_hour"> Under An Hour</label>
          </div>
        </span>
      </BaseCard>
    </div>
  </div>
</template>

<script>
/* 
Filtering Keys
Meal Type: breakfast, lunch, dinner or combination. 
Cooking Time: less than or more than 30 minutes to cook
Meat: Made with or without meat
Dairy: Contains dairy.
*/
import { mapGetters } from "vuex";
export default {
  name: "RecipeFilter",
  data() {
    return {
      searchTags: [],
    };
  },
  computed: {
    ...mapGetters({
      recipes: "recipes/getRecipes",
    }),
  },
  props: {
    ctaText: {
      type: String,
      default: "Clear All",
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
    clearSelections() {
      this.searchTags = [];
      this.$emit("clearSelections", []);
    },
  },
};
</script>

<style>
.filter-header {
  display: flex;
  justify-content: space-between;
}
.filter-items {
  width: 100%;
  text-align: left;
}
.filter-option {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
</style>
 