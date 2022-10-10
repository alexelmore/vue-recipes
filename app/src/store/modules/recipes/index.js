import recipeGetters from './getters'
import recipeActions from './actions'
import recipeMutations from './mutations'
export default {
    namespaced: true,
    state() {
        return {
            recipes: [],
            favorites: []
        }

    },
    getters: recipeGetters,
    actions: recipeActions,
    mutations: recipeMutations

}