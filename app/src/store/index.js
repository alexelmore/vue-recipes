import { createStore } from 'vuex';
import recipeModule from './modules/recipes/index'
const store = createStore({
    modules: {
        recipes: recipeModule
    }
})

export default store