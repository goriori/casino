import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import VClickOutside from '@/directives/vClickOutside'
import vRipple from '@/directives/vRipple'
import VueSplide from '@splidejs/vue-splide'
import { vMaska } from 'maska/vue'
import '@/assets/scss/main.scss'

const app = createApp(App)
  .directive('ripple', vRipple)
  .directive('outside', VClickOutside)
  .directive('maska', vMaska)
  .use(createPinia())
  .use(router)
  .use(VueSplide)
  .mount('#app')
