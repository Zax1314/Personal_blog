import VueRouter from "vue-router";
import Vue from "vue";
const home = ()=>import("@/components/index/home")//import引入组件，组件懒加载
const login=()=>import("@/components/index/login")
const myself_markdown=()=>import("@/components/myself_markdown")
const main=()=>import("@/components/index/main-page")
const read=()=>import("@/components/read/read")
Vue.use(VueRouter)
const routers=new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/',
            component: home,
            children:[
                {
                    path:'/',
                    component:main
                },
                {
                  path:'/read/:ptitle' ,
                  name:"read",
                    component:read
                },

                {
                    path:'/md',
                    name:'myself_markdown',
                    component:myself_markdown
                }
            ]
        },
        {
            path:'/login',
            name:'login',
            component:login
        }
    ]
})
routers.beforeEach((to,from,next)=>{
    if(to.path=="/login")
        next();
    else{
        let token=localStorage.getItem("Authorization");
        console.log(token)
        if (token===''||token===null){
            next('/login');
        }else {
            next();
        }
    }
})
export default routers