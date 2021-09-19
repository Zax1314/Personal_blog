import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        login_loading:false,
        user:'',
        which_router:'n',
        view_imgUrl:'',
        dialogState:false,
    },
    mutations:{
        changLogin_loading(state,flag){
            state.login_loading=flag;
        },
        changeUser(state,who){
            state.user=who;
        },
        chang_router(state,route){
            state.which_router=route;
        },
        chang_ImgUrl(state,img){
            state.view_imgUrl=img;
        },
        change_dialog(state,e){
            state.dialogState=e;
        }
    },
    //异步请求
    actions:{

    },
    getters:{}
})
export default store