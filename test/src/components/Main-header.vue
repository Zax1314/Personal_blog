<template>
  <div id="main-header"  :key="key">
      <div id="main-header-content" >
        <el-row>
        <el-col id="main-header-content-name"  :lg="change_width?3:24" :md="change_width?3:24" style="display: flex;justify-content: center;align-items: center">
          <transition enter-active-class="animate__animated animate__fadeIn">
            <i style="float: left;top: 0px;left: 0px;" class="fa fa-arrow-left" v-if="showback&&change_width==false" @click="go_back"></i>
          </transition>
          <h3 style="display: block;">TYYDS</h3>
          <transition enter-active-class="animate__animated animate__fadeIn">
          <i style="float: left;display: flex;justify-content: center;align-items: center; right:  0px;height: 50px;width: 20px; text-align: center;" class="fa fa-bars" v-if="change_width==false" @click="open_left_login"></i>
          </transition>
        </el-col>
        <el-col id="main-header-content-select" :lg="18" :md="18" v-if="change_width">
          <div>
          <span :class="now_router=='/'?'selected':'unselect'" @click="select(1);sendMessageToP()" ><h4>首页</h4></span>
          <span :class="now_router=='/Suiyu'?'selected':'unselect'" @click="select(2);sendMessageToP()"><h4>碎语</h4></span>
          <span :class="now_router=='/comments'?'selected':'unselect'" @click="select(3);sendMessageToP()"><h4>留言</h4></span>
          <span :class="now_router=='/links'?'selected':'unselect'" @click="select(4);sendMessageToP()"><h4>友邻</h4></span>
          <span :class="now_router=='/friends'?'selected':'unselect'" @click="select(5);sendMessageToP()"><h4>圈子</h4></span>
            <input class="search_btn" @focusout="clear_search" v-model="search_value">
            </input>
            <i class="fa fa-search" style="position: absolute;color: gray; top: 17px;bottom: 0px;margin: auto;right: 170px;z-index: 81"></i>

          </div>
          </el-col>
        <el-col :lg="change_width?3:4" :md="change_width?3:4" id="main-header-content-login">
          <el-row v-if="change_width">
            <el-col :span="10"><h4 style="display: block;height: 50px;line-height: 50px;text-align: center">Hi</h4></el-col>
            <el-col :span="14" v-if="!islogin"><input type="button" value="登录" @click="changlogin"/></el-col>
            <el-col :span="14" v-if="islogin">
              <el-dropdown trigger="click" @command="user_command">
                <span class="username">{{user_name}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人主页</el-dropdown-item>
                  <el-dropdown-item>好友</el-dropdown-item>
                  <el-dropdown-item>信息</el-dropdown-item>
                  <el-dropdown-item divided style="color: red" command="login_out">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>

          </el-row>
        </el-col>
        </el-row>
      </div>
    <login-box :show.sync="login_flag" @login_status="login_status"></login-box>
    <lef-menu :active_route="now_router" :show.sync="left_login" @changeshow="changeshow" @login_out="user_command" :user_name="user_name"></lef-menu>
  </div>
</template>

<script>
import LoginBox from "@/components/LoginBox";
import LefMenu from "@/components/LefMenu";
export default {
  name:'Main-header',
  components: {LefMenu, LoginBox},
  props:["message","showback"],
  data(){
    return{
      search_value:'',
      now_router:this.now_router,
      key:0,
      index:"1",
      login_flag:false,
      left_login:false,
      change_width:true,
      window_width:document.documentElement.clientWidth,
      islogin:false,
      user_name:'',
      supportsPassive:false,
      wheelOpt:false,
      keys:{37: 1, 38: 1, 39: 1, 40: 1},
    };
  },
  watch:{
    login_flag(val){
      if(this.login_flag==false&&val==false){
        this.disable_scroll(false);
      }
    },
    left_login(val){
      if(this.login_flag==false&&val==false){
        this.disable_scroll(false);
      }
    },
    $route(to, from) {
      this.now_router=this.$route.path;

    },
    window_width(val){
      const _this=this;
      if (val>1300){
        _this.change_width=true;

      }else{
        _this.change_width=false;
      }
    }
  },
  mounted() {
    const _this=this;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { _this.supportsPassive = true; }
      }));
    } catch(e) {}
    _this.wheelOpt=_this.supportsPassive?{ passive: false } : false;
    if(_this.getCookie("userInfo")!=null){
      _this.login_status(_this.getCookie("userInfo"));
    }
    _this.now_router=_this.$route.path;
    _this.window_width=document.body.clientWidth;
    if (_this.window_width<=1300){
      _this.change_width=false;
    }
    window.addEventListener('resize',()=>{ _this.window_width=document.documentElement.clientWidth;
      });

  },
  methods:{
    preventDefault(e) {
      e.preventDefault();
    },
    preventDefaultForScrollKeys(e) {
      if (this.keys[e.keyCode]) {
        this.preventDefault(e);
        return false;
      }
    },
    disable_scroll(val){
      if(val) {
        window.addEventListener('DOMMouseScroll', this.preventDefault, false); // older FF
        window.addEventListener('wheel', this.preventDefault, this.wheelOpt); // modern desktop
        window.addEventListener('touchmove', this.preventDefault, this.wheelOpt); // mobile
        window.addEventListener('keydown', this.preventDefaultForScrollKeys, false);

      }
      else{
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.removeEventListener('wheel', this.preventDefault, this.wheelOpt);
        window.removeEventListener('touchmove', this.preventDefault, this.wheelOpt);
        window.removeEventListener('keydown', this.preventDefaultForScrollKeys, false);      }
    },
    go_back(){
      this.$router.push('/');
      this.$emit("show_back",false);
    },
    clear_search(){
      this.search_value='';
    },
    getCookie(name)
    {
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

      if(arr=document.cookie.match(reg))
        return (arr[2]);
      else
        return null;
    },

    setCookie(userInfo,exdays) {
      let exdate=new Date();
      exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
      //字符串拼接cookie
      window.document.cookie="userInfo" + "=" + userInfo + ";path=/;expires=" + exdate.toUTCString();
    },
    //清除cookie
    clearCookie(){
      this.setCookie("","",-1)
    },
    login_status(val){
      this.islogin=true;
      this.user_name=val;
      this.setCookie(this.user_name,7);
    },
    user_command(val){
      if(val=="login_out"){
      this.clearCookie();
      this.islogin=false;
      location.reload();
      }
    },
    changeshow(val){
      this.left_login=val;
      this.login_flag=!val;
    },
    open_left_login(){
      this.left_login=true;
      this.disable_scroll(true);
    },
      select(i){
        this.index=i;
        this.key+=1;
        switch (i){
          case 1:
            this.$router.push('/')
            break;
          case 2:
            this.$router.push('/Suiyu')
            break;
          case 3:
            this.$router.push('/comments')
            break;
          case 4:
            this.$router.push('/links')
            break;
          case 5:
            this.$router.push('/friends')
            break;
            default:
              this.$router.push('/')
              break;
        }

      },
    changlogin(){
        this.login_flag=true;
        this.disable_scroll(true);
        },
    sendMessageToP() {
      this.$emit("Child_event",this.index);
    }
  }
}



</script>

<style scoped>
@import '../style/main.css';
</style>