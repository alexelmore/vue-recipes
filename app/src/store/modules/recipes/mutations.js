export default {
    loadRecipes(state, payload) {
        state.recipes = payload
    },
    addToFavorites(state, payload) {
        state.recipes = [...payload]
        state.favorites = state.recipes.filter(rec => rec.isFavorite)
    },

    removeFromFavorites(state, payload) {
        let newArray = state.favorites.filter((item) => item.id !== payload.id)
        let updatedArray = state.recipes.filter((item) => item.id !== payload.id)
        payload.isFavorite = false;
        updatedArray.push(payload)
        state.recipes = [...updatedArray]
        state.favorites = [...newArray]
    }
}