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

        const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=130&size=200', options)

        const data = await response.json()

        try {
            if (response.ok && response.status === 200) {
                const recipes = []
                console.log(data.results)
                for (const key in data.results) {
                    const recipe = {
                        id: data.results[key].id,
                        name: data.results[key].name,
                        description: data.results[key].description,
                        total_time_minutes: data.results[key].total_time_minutes,
                        num_servings: data.results[key].num_servings,
                        yields: data.results[key].yields,
                        instructions: data.results[key].instructions,
                        ingredients: data.results[key].sections,
                        tags: data.results[key].tags,
                        image: data.results[key].thumbnail_url,
                        canonical_id: data.results[key].canonical_id
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

