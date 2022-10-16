<template>
  <div>
    <div class="filter-header">
      <h2 class="filter-title">Filter Recipes</h2>
      <BaseButton @click="clearSelections" class="filter-cta">
        {{ ctaText }}
      </BaseButton>
    </div>

    <div class="filter-items">
      <div class="filter-toggle">
        <input
          name="healthy"
          value="healthy"
          class="filter-tgl tgl-light"
          id="healthy"
          type="checkbox"
          v-model="goHealthy"
          @change="$emit('filteredRecipes', this.combinedTags)"
        />
        <label class="tgl-btn" for="healthy"></label>
        <label class="tgl-btn" for="healthy">
          <h4>{{ healCtaText }}</h4>
        </label>
      </div>

      <BaseCard>
        <h2 class="filter-title">Meal Type</h2>
        <span class="filter-option">
          <div>
            <input
              type="radio"
              id="breakfast"
              name="breakfast"
              value="breakfast"
              v-model="mealType"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="breakfast"> Breakfast</label>
          </div>
          <div>
            <input
              type="radio"
              id="brunch"
              name="brunch"
              value="brunch"
              v-model="mealType"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="brunch"> Brunch</label>
          </div>
          <div>
            <input
              type="radio"
              id="lunch"
              name="lunch"
              value="lunch"
              v-model="mealType"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="lunch"> Lunch</label>
          </div>
          <div>
            <input
              type="radio"
              id="dinner"
              name="dinner"
              value="dinner"
              v-model="mealType"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="dinner"> Dinner</label>
          </div>

          <div>
            <input
              type="radio"
              id="drinks"
              name="drinks"
              value="drinks"
              v-model="mealType"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="drinks"> Beverages</label>
          </div>

          <div>
            <input
              type="radio"
              id="desserts"
              name="desserts"
              value="desserts"
              v-model="mealType"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="desserts"> Desserts</label>
          </div>

          <div>
            <input
              type="radio"
              id="snacks"
              name="snacks"
              value="snacks"
              v-model="mealType"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="snacks"> Snacks</label>
          </div>

          <div>
            <input
              type="radio"
              id="sides"
              name="sides"
              value="sides"
              v-model="mealType"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="sides"> Sides</label>
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
              @change="$emit('filteredRecipes', this.combinedTags)"
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
              @change="$emit('filteredRecipes', this.combinedTags)"
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
              @change="$emit('filteredRecipes', this.combinedTags)"
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
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="gluten_free"> Gluten-Free</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="oven"
              name="oven"
              value="oven"
              v-model="searchTags"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="oven"> Oven Baked</label>
          </div>
        </span>
      </BaseCard>
      <BaseCard>
        <h2>Diffculty</h2>
        <span class="filter-option">
          <div>
            <input
              type="radio"
              id="under_10_minutes"
              name="under_10_minutes"
              value="under_10_minutes"
              v-model="prepTime"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="under_5_minutes"> Under 10 Minutes</label>
          </div>

          <div>
            <input
              type="radio"
              id="under_15_minutes"
              name="under_15_minutes"
              value="under_15_minutes"
              v-model="prepTime"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="under_15_minutes"> Under 15 Minutes</label>
          </div>
          <div>
            <input
              type="radio"
              id="under_30_minutes"
              name="under_30_minutes"
              value="under_30_minutes"
              v-model="prepTime"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="under_30_minutes"> Under 30 Minutes</label>
          </div>
          <div>
            <input
              type="radio"
              id="under_45_minutes"
              name="under_45_minutes"
              value="under_45_minutes"
              v-model="prepTime"
              @change="$emit('filteredRecipes', this.combinedTags)"
            />
            <label for="under_45_minutes"> Under 45 Minutes</label>
          </div>

          <div>
            <input
              type="radio"
              id="under_1_hour"
              name="under_1_hour"
              value="under_1_hour"
              v-model="prepTime"
              @change="$emit('filteredRecipes', this.combinedTags)"
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
      mealType: "",
      prepTime: "",
      goHealthy: "",
    };
  },
  computed: {
    ...mapGetters({
      recipes: "recipes/getRecipes",
    }),

    combinedTags() {
      let arr = [...this.searchTags];
      if (this.goHealthy === true) {
        arr.push("healthy");
      }
      if (this.mealType !== "") {
        arr.push(this.mealType);
      }
      if (this.prepTime !== "") {
        arr.push(this.prepTime);
      }
      return arr;
    },

    healCtaText() {
      return this.goHealthy === true ? "Healthy Enabled" : "Healthy Disabled";
    },
  },
  props: {
    ctaText: {
      type: String,
      default: "Clear All",
    },
  },
  methods: {
    clearSelections() {
      this.searchTags = [];
      this.goHealthy = false;
      this.mealType = "";
      this.prepTime = "";
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
  margin-top: 1rem;
}
.filter-option {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.filter-toggle {
  display: flex;
  justify-content: start;
  margin-bottom: 1rem;
}
.filter-tgl {
  display: none;
}
.filter-tgl + .tgl-btn {
  outline: 0;
  display: block;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.filter-tgl + .tgl-btn:after,
.filter-tgl + .tgl-btn:before {
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
}
.filter-tgl + .tgl-btn:after {
  left: 0;
}
.filter-tgl + .tgl-btn:before {
  display: none;
}
.filter-tgl:checked + .tgl-btn:after {
  left: 50%;
}

.filter-tgl + .tgl-btn {
  background: #c2bcbc;
  border-radius: 2em;
  padding: 2px;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
}
.filter-tgl + .tgl-btn:after {
  border-radius: 50%;
  background: #fff;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.tgl-light:checked + .tgl-btn {
  background: #11f14e;
}

.tgl-btn h4 {
  margin-left: 0.5rem;
}
</style>
 