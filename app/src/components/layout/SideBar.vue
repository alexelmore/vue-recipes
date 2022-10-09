<template>
  <div class="sidebar" :style="{ width: width + 'px' }">
    <RecipeFilter
      @filteredRecipes="filterTags"
      @clearSelections="clearSelections"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RecipeFilter from "../../Pages/recipes/RecipeFilter.vue";
export default {
  name: "SideBar",
  components: {
    RecipeFilter,
  },
  props: {
    width: {
      type: String,
      default: "350",
    },
  },
  computed: {
    ...mapGetters({
      recipes: "recipes/getRecipes",
    }),
  },
  methods: {
    clearSelections() {
      this.$emit("clearSelections", []);
    },
    filterTags(array) {
      this.$emit("filteredRecipes", array);
    },
  },
};
</script>

<style scoped>
.sidebar {
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  height: fit-content;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>