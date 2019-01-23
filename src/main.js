import Vue from 'vue'

import VueResource from 'vue-resource'

import App from './App.vue'
import ChartContainer from './components/ChartContainer.vue'

import router from './router'

Vue.use(VueResource)

Vue.config.productionTip = false

//Vue.component('line-chart', ChartContainer)
Vue.component('chart-container', ChartContainer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
