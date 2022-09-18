import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            recipes: [
                {
                    name: 'Pizza',
                    ingredients: [
                        { name: 'cheese', amount: '3 cups' },
                        { name: 'dough', amount: 'One tube' },
                        { name: 'pasta sauce', amount: 'one can' }
                    ],
                    directions: ['step one...', 'step two...', 'step three...'],
                    type: ['lunch', 'dinner'],
                    cook_time: '30 minutes',
                    id: 'pizza'
                },
                {
                    name: 'Quesadilla',
                    ingredients: [
                        { name: 'cheese', amount: '3 cups' },
                        { name: 'tortilla', amount: '2 wraps' },
                        { name: 'chipolte sauce', amount: 'one can' }
                    ],
                    directions: ['step one...', 'step two...', 'step three...'],
                    type: ['lunch', 'dinner'],
                    cook_time: '10 minutes',
                    id: 'quesadilla'
                }
            ],
        }
    },
    getters: {
        // 
        getRecipes(state) {
            return state.recipes
        }
    }
})

export default store