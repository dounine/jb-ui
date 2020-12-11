import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element.js'
import axios from './plugins/axios'

const app = createApp(App).use(store).use(router).use(axios)
installElementPlus(app)
app.mount('#app')
