import Vue from 'vue'
import App from './router/App.vue'
import VueRouter from 'vue-router'
import routers from "./router/routers";
import animate from 'animate.css'
import font from 'font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Loginflag from "@/components/Loginflag";
import {postRequest} from "@/utils/api";
import {Message} from "element-ui";

Vue.prototype.postRequest=postRequest
Vue.prototype.$message=Message
Vue.prototype.$mylogin=Loginflag
import Axios from "axios";
import NProgress from "nprogress";
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(font)
Vue.use(ElementUI)
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
const router=new VueRouter({
  mode:"history",
  routes:routers
})
new Vue({
  el:"#app",
  router,
  render:h=>h(App)
})
router.beforeEach((to,from,next)=>{
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
