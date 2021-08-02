<template>
<div id="read_main"  class="animate__animated animate__fadeIn">
  <div style="width: 100%;display: flex; overflow: hidden" class="animate__animated animate__zoomIn">
    <div id="main-text-left-com-pic" :style="{'backgroundImage':loading?'url('+backimg+')':'url('+list_image.pic+')'}" ></div>
  </div>
  <div style="padding: 20px;box-sizing: border-box;height: auto;background: white" v-if="!loading">
  <span style="font-size: 30px">{{list_image.ptitle}}</span>
    <div id="read_header">
        <div id="suiyucom-icon" style="min-width: 45px"></div>
  <ul style="margin-left: 15px;width: 90%">
    <li><h3>{{list_image.uname}}</h3></li>
     <li><span style="color: gray">{{list_image.ptime}}</span></li>
  </ul>
  <div  class="fa fa-eye" style="color: black;letter-spacing: 1px;position: relative;right: 0px;min-width: 70px"> 123</div>
    </div>
    <div style="white-space:pre-line;margin-top: 60px;color: #4c4e4d;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-size: 16px;
    line-height: 2;
    height: auto" class="animate__animated animate__fadeIn">
      <p v-html="list_image.pcontext"></p>
    </div>
  </div>
  <comment></comment>
  </div>

</template>

<script>
import axios from "axios";
import Comment from "@/components/comment";

export default {
  name: "Read",
  components: {Comment},
  props:["scroll_name"],
  data(){
    return{
      backimg:require("@/assets/v2-1dc5cf6d1e46017bfef7b5788c6d7550_b.gif"),
      list_image: {},
      loading:true,
    }
  },
  methods:{
  },
  mounted() {
    const  _this=this;
    window.scrollBy(0,0);
    _this.$emit("show_back",true);
    window.scrollTo(0,0);
    let params={
      ptitle:_this.$route.params.ptitle
    }
    this.postRequest("/api/find_post",params)
        .then(response => {
          if (response.length != 0) {
            _this.list_image = response;
            const img=new Image();
            img.src=_this.list_image.pic;
            img.onload=function (){
              _this.loading=false;
            }
             img.onerror=function (){
               _this.loading=true;
             }
          } else {
            _this.loading=false;
          }
        });
  }
}
</script>

<style scoped>

</style>