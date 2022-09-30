
import authGetters from './getters'
export default {
    state() {
        return {
            token: process.env.VUE_APP_RECIPIE_API_KEY
        }
    },
    getters: authGetters
}