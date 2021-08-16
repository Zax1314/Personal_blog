import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    //唯一公共数据源
    state:{
        count:0
    },
    //用于改变store中的数据，只能通过mutations改变，不可直接改变store中的值
    mutations:{
        increment(state){
            state.count++;
        },
        incrementByN(state,n){
            state.count+=n;
        }
    },
    //异步任务处理，如果通过异步处理数据只能通过actions
    actions:{
        incrementAsync(context){
            setTimeout(()=>{
                context.commit("increment");
            },1000)
        },
        incrementByNAsync(context,n){
            setTimeout(()=>{
                context.commit("incrementByN",n);
            },1000)
        },
    },
    //Getter 用于对 Store 中的数据进行加工处理形成新的数据。
    // Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性 。
    // Store 中数据发生变化，Getter 的数据也会跟着变化。
    getters:{
            NumText(state){
                return "当前num的值为："+state.count;
            }
    }
})
export default store