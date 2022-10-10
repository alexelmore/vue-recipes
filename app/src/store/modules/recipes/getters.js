export default {
    // Basic getter to retrieve recipes from State
    getRecipes(state) {
        return state.recipes
    },

    getRecipeById: (state) => (id) => {
        return state.recipes.find(recipe => +recipe.id === +id)
    },

    getFavorites(state) {
        return state.favorites
    }
}