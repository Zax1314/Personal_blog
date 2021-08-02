<template>
<div id="main-text-left-com" class="animate__animated animate__slideInUp" v-if="load_com">
<div style="width: 100%;display: flex; overflow: hidden">
  <div id="main-text-left-com-pic" :style="{'backgroundImage':loading?'url('+backimg+')':'url('+this.content[0].pic+')'}" class="animate__animated animate__fadeIn"></div>
</div>
  <div id="main-text-left-com-title" class="animate__animated animate__slideInUp animate__delay-1s" v-if="!loading">{{this.content[0].ptitle}}</div>
  <div id="main-text-left-com-time" class="animate__animated animate__slideInUp " v-if="!loading">{{ this.content[0].ptime}}</div>
  <div id="main-text-left-com-content" class="animate__animated animate__slideInUp " v-if="!loading">{{this.content[0].pcontext|texts}}</div>
  <div id="main-text-left-com-bottom" class="animate__animated animate__slideInUp " v-if="!loading">
    <button id="btn-read" @click="read_post(content[0].ptitle)">开始阅读</button>
    <ul  id="main-text-left-com-bottom-ul">
      <li>
        <div class="fa fa-eye" style="color: darkgray"><span> 123</span></div>
      </li>
      <li>
        <div class="fa fa-heart" style="color: darkgray"><span> 520</span></div>
      </li>
      <li>
        <div class="fa fa-comment" style="color: darkgray"><span> 123</span></div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "main-text-left-com",
  props:["indexs"],
  filters:{
    texts(value){
      if(!value) return'';
      if(value.length>60)
        return value.slice(0,60)+'  . . .';
      return value;
    }
  },
  data(){
    return{
      load_com:true,
      loading:true,
      backimg:require("@/assets/v2-1dc5cf6d1e46017bfef7b5788c6d7550_b.gif"),
      content:[],
    };
  },
  methods:{
    read_post(val){
      this.$router.push({name:'post',params:{ptitle:val}});
    },
  },
  mounted() {
    var _this=this;
    let params={
      id:_this.indexs+2,
      end_id:_this.indexs+3,
    }
    _this.postRequest("/api/find_postById",params).then(res=>{
      if(res.length>0){
        _this.content=res;
        var img=new Image();
        img.src=_this.content[0].pic;
        img.onload=function (){
          _this.loading=false;
        }
      }
      else{
            _this.$emit("loadimg",false);
            _this.load_com=false;
      }

    })
  }
}
</script>

<style scoped>

</style>