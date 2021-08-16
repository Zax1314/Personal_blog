import Vue from 'vue'
import App from './App.vue'
import store from "@/store"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false
Vue.use(mavonEditor)
new Vue({
  render: h => h(App),
  //将创建的共享数据对象，挂载到vue实例中
  //这样vue中所有的粗剪可以通过store访问
  store
}).$mount('#app')
