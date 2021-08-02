<template>

<div  v-if="show" style="width: 100%;height: 100vh;">
  <aside style="background-color: rgba(33, 33, 33,.3);height: 100vh" @click="chang_box">
  <div v-if="show" id="left_menu" class="animate__animated animate__slideInLeft">
    <h3>Welcome！</h3>
    <h3>Have a Nice Day</h3>
    <div style="min-height: 100px;height: 40%;display: flex;justify-content: center;align-items: center">
    <div id="suiyucom-icon" style="height:80px;width: 80px;bottom: 60px "></div>

    </div>
      <ul id="left_menu_context">
      <li @click="select(1);sendMessageToP();chang_box" :class="active_route=='/'?'left_active':'left_unactive'"><i class="el-icon-house"></i><span>首页</span></li>
      <li @click="select(2);sendMessageToP();chang_box" :class="active_route=='/Suiyu'?'left_active':'left_unactive'"><i class="el-icon-collection"></i><span>碎语</span></li>
      <li @click="select(3);sendMessageToP();chang_box" :class="active_route=='/comments'?'left_active':'left_unactive'"><i class="el-icon-chat-dot-round"></i><span>留言</span></li>
      <li @click="select(4);sendMessageToP();chang_box" :class="active_route=='/links'?'left_active':'left_unactive'"><i class="el-icon-user"></i><span>友邻</span></li>
      <li @click="select(5);sendMessageToP();chang_box" :class="active_route=='/friends'?'left_active':'left_unactive'"><i class="el-icon-coffee-cup"></i><span>圈子</span></li>
        <li @click="select(5);sendMessageToP();chang_box" :class="active_route=='/none'?'left_active':'left_unactive'"><i class="el-icon-user" style="position: relative;left: 13px"></i><span>个人主页</span></li>
      </ul>
    <div v-if="logininfo==null" style="padding: 10px;position: absolute;bottom: 0px;left: 0px;right: 0px;margin: auto;width:210px "><input type="button" value="登录" @click="changshow(false)" class="left_btn"/></div>
    <div v-if="logininfo!=null" style="padding: 10px;position: absolute;bottom: 0px;left: 0px;right: 0px;margin: auto;width:210px "><input type="button" value="退出登录" @click="login_out" class="left_btn" style="background: orangered"/></div>
  </div>
  </aside>
</div>
</template>

<script>
import LoginBox from "@/components/LoginBox";
export default {
  name: "LefMenu",
  components: {LoginBox},
  props:["show","active_route","user_name"],
  data() {
    return {
      logininfo:'',
      login_flag:true,
      url:"https://oss-cdn.yevpt.com/say/1/930395bee16c337f9163946e113e4192.jpg?a=cb1af3e7b563d58320fc2d61e6cae7c5&b=60c2fee1",

    }
  },
  methods:{
    login_out(){
      this.$emit('login_out','login_out');
      this.$emit("changeshow",false);
    },
    chang_box(){
        this.$emit("update:show",false);
    },
    changshow(val){
      this.$emit("changeshow",val);
    },
    select(i){
      this.index=i;
      this.key+=1;
      this.chang_box();
      switch (i){
        case 1:
          this.$router.replace('/')
          break;
        case 2:
          this.$router.push('/Suiyu')
          break;
        case 3:
          this.$router.replace('/comments')
          break;
        case 4:
          this.$router.replace('/links')
          break;
        case 5:
          this.$router.replace('/friends')
          break;
        default:
          this.$router.replace('/')
          break;
      }

    },
    sendMessageToP() {
      this.$emit("Child_event",this.index);
    },
    getCookie(name)
    {
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

      if(arr=document.cookie.match(reg))
        return (arr[2]);
      else
        return null;
    },
  },
mounted() {
  let _this=this;
  _this.logininfo=_this.getCookie("userInfo");

}

}
</script>

<style scoped>

</style>