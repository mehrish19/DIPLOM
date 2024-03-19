import './assets/styles/main.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueAwesomePaginate from 'vue-awesome-paginate';
import "vue-awesome-paginate/dist/style.css";

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(VueAwesomePaginate)
app.use(pinia)
app.use(router)
app.mount('#app')
