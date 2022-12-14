<template>
  <div class="recipe-list">
    <SideBar
      @clearSelections="updateRecipeList"
      @filteredRecipes="updateRecipeList"
    />
    <div v-if="selectedTags.length">
      <ul class="recipe-items-list" v-if="selectedRecipes.length">
        <RecipeSort @sortType="sortRecipes" />
        <BaseDialog
          @close="this.closeModal()"
          :show="showRegModal"
          title="Huzzah!"
        >
          <h3 class="dialog-message">{{ message }}</h3>
          <BaseButton link="true" to="/addToFavPage">Go To My Favs!</BaseButton>
        </BaseDialog>
        <li v-for="item in selectedRecipes" v-bind:key="item.name">
          <div @click.stop="goToRecipePage(item.id)">
            <BaseCard
              class="recipe-item"
              :class="{ 'item-is-fav': item.isFavorite }"
            >
              <h2 class="recipe-item-name">{{ item.name }}</h2>

              <font-awesome-icon
                @click.stop="toggleItemFavorites(item, item.isFavorite)"
                icon="fa-solid fa-heart"
                :class="{ 'is-favorite': item.isFavorite }"
              />

              <img
                class="recipe-list-image"
                :src="item.image"
                :alt="item.name"
              />
            </BaseCard>
          </div>
        </li>
      </ul>
      <div v-else class="no-items-list">
        <h2>No Recipes Found</h2>
      </div>
    </div>
    <div v-else>
      <ul class="recipe-items-list">
        <RecipeSort @sortType="sortRecipes" />
        <BaseDialog
          @close="this.closeModal()"
          :show="showRegModal"
          title="Huzzah!"
        >
          <h3 class="dialog-message">{{ message }}</h3>
          <BaseButton link="true" to="/addToFavPage">Go To My Favs!</BaseButton>
        </BaseDialog>
        <li v-for="item in recipes" v-bind:key="item.name">
          <div @click.stop="goToRecipePage(item.id)">
            <BaseCard
              class="recipe-item"
              :class="{ 'item-is-fav': item.isFavorite }"
            >
              <h2 class="recipe-item-name">{{ item.name }}</h2>

              <font-awesome-icon
                @click.stop="toggleItemFavorites(item, item.isFavorite)"
                icon="fa-solid fa-heart"
                :class="{ 'is-favorite': item.isFavorite }"
              />

              <img
                class="recipe-list-image"
                :src="item.image"
                :alt="item.name"
              />
            </BaseCard>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SideBar from "../../components/layout/SideBar.vue";
import RecipeSort from "../../Pages/recipes/RecipeSort.vue";
export default {
  name: "RecipeList",
  components: {
    SideBar,
    RecipeSort,
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
    arrayToSort() {
      return this.selectedRecipes.length ? "selectedRecipes" : "recipes";
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
    toggleItemFavorites(recipe, isFavorite) {
      if (!isFavorite) {
        this.message = `"${recipe.name}" has been added to your favorites!`;
        this.showRegModal = true;
        recipe.isFavorite = isFavorite;
        this.addToFavorites(recipe);
      } else {
        this.message = `"${recipe.name}" has been removed from your favorites!`;
        this.showRegModal = true;
        recipe.isFavorite = isFavorite;
        this.removeFromFavorites(recipe);
      }
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
      removeFromFavorites: "recipes/removeFromFavorites",
    }),

    sortRecipes(sortType) {
      if (
        this.arrayToSort === "selectedRecipes" &&
        sortType === "alphabetical"
      ) {
        this.selectedRecipes.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (this.arrayToSort === "recipes" && sortType === "alphabetical") {
        this.recipes.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (sortType === "smallestSize") {
        this.recipes.sort(
          (a, b) => parseFloat(a.num_servings) - parseFloat(b.num_servings)
        );
      }

      if (sortType === "largestSize") {
        this.recipes.sort(
          (a, b) => parseFloat(b.num_servings) - parseFloat(a.num_servings)
        );
      }
    },
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

.recipe-item-name {
  padding: 1rem 2rem;
  max-width: 350px;
  margin: 0 auto;
}
.item-is-fav {
  filter: grayscale(0) !important;
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

