import { createStore } from 'vuex'

export default createStore({
  state: {

  },
  mutations: {//sync
    
  },
  actions: {//async
  },
  modules: {
  },
  getters: {
    routerParams(state) {
      return {
        // fun: this.$route.path.split("/")[1]
      }
    }
  }
})
