<template>
  <div class="favorites-list">
    <ul class="favorites-items-list" v-if="favorites.length">
      <h1 class="favorites-items-header">Your Favorites!</h1>
      <li v-for="item in favorites" v-bind:key="item.name">
        <div @click.stop="goToRecipePage(item.id)">
          <BaseCard class="favorites-item">
            <BaseDialog
              @close="this.closeModal()"
              :show="showRegModal"
              title="Huzzah!"
            >
              <h3>{{ message }}</h3>
              <router-link to="/addToFavPage">Go To Favorites</router-link>
            </BaseDialog>
            <h2>{{ item.name }}</h2>

            <font-awesome-icon
              @click.stop="RemoveFromFavorites(item)"
              icon="fa-solid fa-heart"
            />
            <img
              class="favorites-list-image"
              :src="item.image"
              :alt="item.name"
            />
          </BaseCard>
        </div>
      </li>
    </ul>
    <div v-else class="no-items-list">
      <h2>No Favorites</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddToFavPage",
  data() {
    return {
      showRegModal: false,
      message: "",
    };
  },
  computed: {
    ...mapGetters({
      favorites: "recipes/getFavorites",
    }),
  },
  methods: {
    RemoveFromFavorites(recipe) {
      this.message = `"${recipe.name}" has now been removed from your favorites.`;
      this.showRegModal = true;

      if (this.favorites.length > 1) {
        this.removeFromFavorites(recipe.id);
      } else if (!this.favorites.length <= 1) {
        setTimeout(() => {
          this.removeFromFavorites(recipe.id);
          this.$router.replace(`/recipes`);
        }, 1900);
      }
    },
    goToRecipePage(id) {
      this.$router.replace(`/recipes/${id}`);
    },

    closeModal() {
      this.showRegModal = false;
    },

    ...mapActions({
      removeFromFavorites: "recipes/removeFromFavorites",
    }),
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.favorites-list {
  display: flex;
  margin: 2rem auto;
  width: 1000px;
  justify-content: space-evenly;
  padding: 2rem;
  background-color: #11f14e;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.favorites-items-list {
  padding: 0.5rem;
}

.favorites-items-list,
.no-items-list {
  width: 30rem;
}
.favorites-items-header {
  color: white;
  background-color: #005a00;
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
}
.favorites-item {
  text-align: center;
  background: white;
  transition: transform 0.3s, filter 1.5s ease-in-out;
  transform: scale(1);
  margin: 32px auto;
  position: relative;
  z-index: 9;
}

.favorites-item h2 {
  padding: 1rem 2rem;
}
.favorites-list-image {
  width: 100%;
  border-radius: 10%;
}
.fa-heart {
  position: absolute;
  background: unset;
  height: 2.125rem;
  right: 30px;
  top: 15px;
  width: 2.125rem;
  z-index: 10;
  color: #11f14e;
}
.fa-heart:hover {
  color: #5d5d5b;
}
</style>