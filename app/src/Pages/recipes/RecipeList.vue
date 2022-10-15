<template>
  <div class="recipe-list">
    <SideBar
      @clearSelections="updateRecipeList"
      @filteredRecipes="updateRecipeList"
    />
    <ul class="recipe-items-list" v-if="selectedRecipes.length">
      <li v-for="item in selectedRecipes" v-bind:key="item.name">
        <div @click.stop="goToRecipePage(item.id)">
          <BaseCard
            class="recipe-item"
            :class="{ 'item-is-fav': item.isFavorite }"
          >
            <BaseDialog
              @close="this.closeModal()"
              :show="showRegModal"
              title="Huzzah!"
            >
              <h3 class="dialog-message">{{ message }}</h3>
              <BaseButton link="true" to="/addToFavPage"
                >Go To My Favs!</BaseButton
              >
            </BaseDialog>
            <h2>{{ item.name }}</h2>

            <font-awesome-icon
              @click.stop="addRecipeToFavorites(item)"
              icon="fa-solid fa-heart"
              :class="{ 'is-favorite': item.isFavorite }"
            />

            <img class="recipe-list-image" :src="item.image" :alt="item.name" />
          </BaseCard>
        </div>
      </li>
    </ul>
    <div v-else class="no-items-list">
      <h2>No Recipes Found</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
      showRegModal: false,
      message: "",
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
    addRecipeToFavorites(recipe) {
      this.message = `"${recipe.name}" has been added to your favorites!`;
      this.showRegModal = true;

      this.addToFavorites(recipe);
    },
    closeModal() {
      this.showRegModal = false;
      this.$router.replace("/");
    },
    goToRecipePage(id) {
      this.$router.replace(`${this.$route.path}/${id}`);
    },

    ...mapActions({
      addToFavorites: "recipes/addToFavorites",
    }),
  },
};
</script>
<style >
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.recipe-list {
  display: flex;
  margin: 2rem auto;
  max-width: 1000px;
  justify-content: space-evenly;
  padding: 2rem;
  background-color: #11f14ec4;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border: 6px ridge #005a00;
}
.recipe-items-list {
  padding: 0.5rem;
}

.recipe-items-list,
.no-items-list {
  width: 480px;
}
.no-items-list {
  color: #005a00;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-self: center;
  font-size: 2.5rem;
  -webkit-text-stroke: 1px black;
}
.recipe-item {
  text-align: center;
  background: white;
  transition: transform 0.3s, filter 1.5s ease-in-out;
  filter: grayscale(100%);
  transform: scale(1);
  margin: 2rem 0 2.5rem 0 !important;
  position: relative;
  z-index: 9;
}
.recipe-item:hover {
  filter: grayscale(0);
  transform: scale(1.1);
}

.item-is-fav {
  filter: grayscale(0) !important;
}

.recipe-item h2 {
  padding: 1rem 2rem;
}
.recipe-list-image {
  width: 100%;
  border-radius: 10%;
}
.dialog-message {
  margin-bottom: 1rem;
}
.fa-heart {
  position: absolute;
  background: unset;
  height: 2.125rem;
  right: 30px;
  top: 15px;
  width: 2.125rem;
  z-index: 10;
  color: #5d5d5b;
}
.fa-heart:hover {
  color: #11f14e;
  cursor: pointer;
}

.is-favorite {
  color: #11f14e !important;
}

.is-favorite:hover {
  color: #5d5d5b !important;
}
</style>

