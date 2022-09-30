//const BASE_URL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20';
export default {
    async fetchRecipes(context) {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f3478cccd7msh75938827c7a4860p19c339jsnb3a8e7cdbe57',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };

        const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20', options)

        const data = await response.json()

        try {
            if (response.ok && response.status === 200) {
                const recipes = []
                for (const key in data.results) {
                    console.log(key)
                    const recipe = {
                        id: data.results[key].id,
                        name: data.results[key].name
                    }
                    recipes.push(recipe)
                }
                context.commit('loadRecipes', recipes)
            } else {
                throw new Error('Something went wrong')
            }

        } catch (error) {
            console.log(error)
        }
    }


}



// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'f3478cccd7msh75938827c7a4860p19c339jsnb3a8e7cdbe57',
//         'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//     }
// };

// fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20', options)
//     .then(response => response.json())
//     .then(response => console.log('res:', response))
//     .catch(err => console.error(err));