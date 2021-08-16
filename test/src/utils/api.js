import axios from "axios";
import {Message} from "element-ui";

//响应拦截器
axios.interceptors.response.use(success=>{
    if (success.status&&success.status==200){
        if(success.data.code==404||success.data.code==401||success.data.code==403||success.data.code==500){
            Message.error({message:success.data.code});
            return;
        }
        if (success.data.message){
            Message.success({message:success.data.message});
        }
        return success.data;
    }
},error => {
    if (error.response.code==504||error.response.code==403||error.response.code==500){
        Message.error({message:"服务器被吃了( ╯□╰ )"});
    }else if(error.response.code==403){
        Message.error({message:"权限不足，请联系管理员！"});
    }else if(error.response.code==401){
        Message.error({message:"还未登录，请先登录！"});
    }else{
        if (error.response.message){
            Message.error({message:error.response.message});
        }else
            Message.error({message:"未知错误！"});
    }
    return;
    });

let base="";
export const postRequest=(url,params)=>{
    return axios({
        method:"post",
        url:`${base}${url}`,
        data:params,
    });
}