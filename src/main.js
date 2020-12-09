import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './pages/router.js'

Vue.use(ElementUI)

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app")
