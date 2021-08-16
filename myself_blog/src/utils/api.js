import axios from "axios";
import {Message} from "element-ui";
let instance=axios.create({
    headers:{
        'Content-Type': 'application/json;charset=UTF-8'
    }
})
instance.interceptors.response.use(data=>{
    if (data.status && data.status == 200 && data.data.status == 500) {
        Message.error({message: data.data.msg});
        return;
    }
    if (data.data.msg) {
        if(data.data.msg=="成功")
        Message.success({message: data.data.msg});
        else if(data.data.msg=="失败"){
            Message.error({message: data.data.msg});
        }
    }
    return data;
}, err => {
    if (err.response.status == 504 || err.response.status == 404) {
        Message.error({message: '服务器被吃了⊙﹏⊙∥'});
    } else if (err.response.status == 403) {
        Message.error({message: '权限不足,请联系管理员!'});
    } else if (err.response.status == 401) {
        Message.error({message: err.response.data.msg});
    } else if (err.response.status == 415) {
            Message.error({message: "类型错误！"});
        }else {
        if (err.response.data.msg) {
            Message.error({message: err.response.data.msg});
        }else{
            Message.error({message: '未知错误!'});
        }
    }
});
let urlBase="http://121.4.51.70:8080/ssm_web-1.0-SNAPSHOT/";
instance.defaults.baseURL=urlBase;
instance.interceptors.request.use(config=>{
    config.url=urlBase+config.url.split(/\/api\//)[1];
    return config;
}),error=>{
    Message.error("请求超时");
    console.log(error);
}
export default instance