import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  // methods: {
  //   increment() {
  //     store.commit('increment');
  //   }
  // },
}).$mount('#app')
