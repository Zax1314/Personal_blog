import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        login_loading:false,
        user:'',
        which_router:'n',
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
        }
    },
    //异步请求
    actions:{

    },
    getters:{}
})
export default store