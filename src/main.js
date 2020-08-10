import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import fastClick from 'fastclick'

Vue.use(toast)

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
