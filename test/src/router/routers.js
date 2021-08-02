import Suiyu from "@/components/Suiyu";
import Liuyan from "@/components/Liuyan";
import Quanzi from "@/components/Quanzi";
import Youlin from "@/components/Youlin";
import VueRouter from "vue-router";
import Main from "@/components/Main";
import Read from "@/components/Read";
import comment from "@/components/comment";
import 'nprogress/nprogress.css'
const routers=[
    {
        path:"/",
        name:"Index",
        component:Main
    },
    {
        path:"/Suiyu",
        name:"Suiyu",
        component:Suiyu
    },
    {
        path:"/comments",
        name:"comments",
        component:Liuyan
    },
    {
        path:"/links",
        name:"links",
        component:Youlin
    },
    {
        path:"/friends",
        name:"friends",
        component:Quanzi
    },
    {
        path:"/post/:ptitle",
        name:"post",
        component:Read
    },
    {
        path:"/comment",
        name:"comment",
        component:comment
    },
]
const router=new VueRouter({
    routers
});
export default routers
