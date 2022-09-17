import { createApp } from 'vue'
import App from './App.vue'

import BaseCard from './components/BaseComponents/BaseCard.vue';
import BaseButton from './components/BaseComponents/BaseButton.vue';

// Load below components only when they are needed
const BaseDialog = defineAsyncComponent(() => import('./components/ui/BaseDialog.vue'))
const BaseBadge = defineAsyncComponent(() => import('./components/ui/BaseBadge.vue'))
const BaseSpinner = defineAsyncComponent(() => import('./components/ui/BaseSpinner.vue'))


// Add the below as Global app wide components
app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)
app.component('BaseBadge', BaseBadge)
app.component('BaseSpinner', BaseSpinner)
app.component('BaseDialog', BaseDialog)


createApp(App).mount('#app')
