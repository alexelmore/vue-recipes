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
                    id: 'pizza',
                    details: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
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
                    id: 'quesadilla',
                    details: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
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