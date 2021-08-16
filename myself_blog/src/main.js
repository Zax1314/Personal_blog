import Vue from 'vue'
import App from './App.vue'
import './utils/hljs'
import 'highlight.js/styles/googlecode.css'
import 'animate.css'
Vue.config.productionTip = false
import store from "@/store";
import router from "@/router";
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/style.css';
import {Message} from "element-ui";
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
Vue.prototype.Message=Message
Vue.prototype.getNowTime= function (){
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var strdate=date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strdate >= 0 && strdate <= 9) {
      strdate = "0" + strdate;
    }
    return year+"-"+month+"-"+strdate;
}
Vue.use(element)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
