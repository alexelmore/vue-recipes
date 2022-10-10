import { createApp, defineAsyncComponent } from 'vue'
import router from './router.js'
import App from './App.vue'
import store from './store/index.js';
import BaseCard from './components/BaseComponents/BaseCard.vue';
import BaseButton from './components/BaseComponents/BaseButton.vue';
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(solidHeart, emptyHeart)



// Load below components only when they are needed
const BaseDialog = defineAsyncComponent(() => import('./components/BaseComponents/BaseDialog.vue'))
const BaseBadge = defineAsyncComponent(() => import('./components/BaseComponents/BaseBadge.vue'))
const BaseSpinner = defineAsyncComponent(() => import('./components/BaseComponents/BaseSpinner.vue'))

// Vue app initialization
const app = createApp(App);

// Inject Vue router and store into our Vue App
app.use(store);
app.use(router);

// Add the below as Global app wide components
app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)
app.component('BaseBadge', BaseBadge)
app.component('BaseSpinner', BaseSpinner)
app.component('BaseDialog', BaseDialog)
app.component('font-awesome-icon', FontAwesomeIcon)
// Mount our Vue app to the DOM
app.mount('#app')
