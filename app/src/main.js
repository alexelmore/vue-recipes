import { createApp, defineAsyncComponent } from 'vue'
import router from './router.js'
import App from './App.vue'

import BaseCard from './components/BaseComponents/BaseCard.vue';
import BaseButton from './components/BaseComponents/BaseButton.vue';

// Load below components only when they are needed
const BaseDialog = defineAsyncComponent(() => import('./components/BaseComponents/BaseDialog.vue'))
const BaseBadge = defineAsyncComponent(() => import('./components/BaseComponents/BaseBadge.vue'))
const BaseSpinner = defineAsyncComponent(() => import('./components/BaseComponents/BaseSpinner.vue'))

// Vue app initialization
const app = createApp(App);

// Inject Vue router into our Vue App
app.use(router);

// Add the below as Global app wide components
app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)
app.component('BaseBadge', BaseBadge)
app.component('BaseSpinner', BaseSpinner)
app.component('BaseDialog', BaseDialog)

// Mount our Vue app to the DOM
app.mount('#app')
