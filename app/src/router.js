import { createRouter, createWebHistory } from 'vue-router';


// Load Below components and their paths only when they are needed
const RecipeDetail = () => import('./Pages/recipes/AddRecipeForm.vue');
const AddRecipeForm = () => import('./Pages/recipes/AddRecipeForm.vue');
const RecipeList = () => import('./Pages/recipes/RecipeList.vue');
const NotFound = () => import('./Pages/NotFound.vue');



// Init and store ref to Vue Router object in a constant
const router = createRouter({// Set history property to the createWebHistory method
    history: createWebHistory(),
    // Routes registration and config
    routes: [
        {
            path: '/', redirect: '/recipes'
        },

        {
            path: '/recipes', component: RecipeList
        },
        {
            path: '/recipes/:id', props: true, component: RecipeDetail

        },
        {
            path: '/addRecipe', component: AddRecipeForm
        },
        {
            path: "/:notFound(.*)", component: NotFound
        }
    ]
})

// Export router const to use throughout the app
export default router