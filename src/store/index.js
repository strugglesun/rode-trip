import Vue from 'vue'
import Vuex from 'vuex'
import travelModule from './modules/travel'
import orderModule from './modules/order'
import searchModule from './modules/search'
import touristModule from './modules/tourist'
import checkedModule from './modules/checked'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    travelModule,
    orderModule,
    searchModule,
    touristModule,
    checkedModule
  }
})
