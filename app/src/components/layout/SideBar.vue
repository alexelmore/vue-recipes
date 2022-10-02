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
      default: "300",
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
</style>