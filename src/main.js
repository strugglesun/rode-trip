import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
import '../node_modules/swiper/css/swiper.min.css'
import './map'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
