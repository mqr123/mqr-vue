import Vue from 'vue'
import App from './App.vue'
import Create from "@/utils/create";
import router from './router'

Vue.prototype.$create = Create; //将create独立渲染DOM的方法挂载到实例上，方便调用
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
