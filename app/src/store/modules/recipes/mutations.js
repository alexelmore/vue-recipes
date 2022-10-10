export default {
    loadRecipes(state, payload) {
        state.recipes = payload
    },
    addToFavorites(state, payload) {
        state.favorites.push(payload)
    },

    removeFromFavorites(state, payload) {
        let newArray = state.favorites.filter((item) => item.id !== payload)
        state.favorites = [...newArray]
    }
}