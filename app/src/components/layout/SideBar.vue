<template>
  <div class="sidebar" :style="{ width: width + 'px' }">
    <div class="sidebar-header">
      <h2 class="sidebar-title">Filter Recipes</h2>
      <BaseButton @click="clearSelections" mode="flat" class="sidebar-cta">
        {{ ctaText }}
      </BaseButton>
    </div>
    <div class="sidebar-items">
      <!-- Below are just placeholder items and will be removed once filter component is ready -->
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
              @change="$emit('filteredRecipes', this.filteredRecipes)"
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
              @change="$emit('filteredRecipes', this.filteredRecipes)"
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
              @change="$emit('filteredRecipes', this.filteredRecipes)"
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
              @change="$emit('filteredRecipes', this.filteredRecipes)"
            />
            <label for="dinner"> Dinner</label>
          </div>
        </span>
      </BaseCard>
      <BaseCard>
        <h2>Protien Type</h2>
        <span class="filter-option">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Non Meat</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Red Meat</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Poultry</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">Other</label>
          </div>
        </span>
      </BaseCard>
      <BaseCard>
        <h2>Cook Time</h2>
        <span class="filter-option">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> 20 Minutes Or Less</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> 30 Minutes Or Less</label>
          </div>
          <div>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> More Than 30 Minutes</label>
          </div>
        </span>
      </BaseCard>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SideBar",
  data() {
    return {
      searchTags: [],
    };
  },
  props: {
    width: {
      type: String,
      default: "300",
    },
    ctaText: {
      type: String,
      default: "Clear All",
    },
  },
  computed: {
    ...mapGetters({
      recipes: "recipes/getRecipes",
    }),

    filteredRecipes() {
      const selectedRecipes = [];
      this.recipes.forEach((recipe) => {
        recipe.tags.forEach((tag) => {
          if (this.searchTags.includes(tag.name)) {
            selectedRecipes.push(recipe);
          }
        });
      });
      return selectedRecipes;
    },
  },
  methods: {
    clearSelections() {
      this.searchTags = [];
    },
  },
};
</script>

<style scoped>
.sidebar-header {
  display: flex;
  justify-content: space-between;
}
.sidebar-items {
  width: 100%;
  text-align: left;
}
.filter-option {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
</style>