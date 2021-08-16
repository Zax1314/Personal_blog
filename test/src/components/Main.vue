<template>
  <div>
    <div id="main-page">
     <div id="main-page-recomm">
      <div>
        <h4  style="font-family: Roboto, sans-serif; display: block;float: left;font-size: 17px">猜你喜欢</h4>
        <h4 style="font-family: Roboto, sans-serif; display: block;float: right;color: rgba(0,0,0,.4);">自动播放</h4>
        <div :class="staus==true?'main-page-recomm-button-on':'main-page-recomm-button-off'" style="cursor: pointer;position: relative;right: -20px" @click="staus==true?puash():star()">
          <div :class="staus==true?'main-page-recomm-button-inside-on':'main-page-recomm-button-inside-off'"></div>
        </div>
      </div>
      <ul>
        <li id="main_img" ref="li_bg"  :style="{'backgroundImage':isLoading?'url('+backimg+')':'url('+list_image[index-1].pic+')'}" class="animate__animated animate__fadeIn" :class="is_hovered?'hovered':null" ></li>
      </ul>
    <div id="main-page-recomm-div" @mouseenter="div_puash" @mouseout="div_star" ></div>
      <div id="main-page-recomm-div-content" v-show="isLoading==false" >
        <div id="main-page-recomm-div-content-title">{{isLoading?null:list_image[index-1].ptitle}}</div>
        <input type="button" id="main-page-recomm-div-content-button" value="开始阅读" @click="read_post(list_image[index-1].ptitle)"/>
      </div>
      <ul id="main-page-recomm-select" v-show="isLoading==false">
        <li v-for="count in 3" :class="index==count?'main-select-li-selected':'main-select-li-unselected'" @click="selectimage(count)" :id="ptitle">
          <i class="fa fa-tint fa-2x" style="margin-top: 5px"></i>
        </li>
      </ul>
    </div>
  </div>
    <main_text :isbottom="isbottom" @loadimg="loadimg" @load_more="load_more"></main_text>
  </div>
</template>

<script>
import "font-awesome/css/font-awesome.min.css"
import Loading from "@/components/Loading";
import Main_text from "@/components/main_text";
import axios from "axios";
import Bottom from "@/components/Bottom";
export default {
  name: "Main",
  components: {Bottom, Main_text, Loading},
  data(){
    return{
      backimg:require("@/assets/v2-1dc5cf6d1e46017bfef7b5788c6d7550_b.gif"),
      loadimg1:"http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif",
      isLoading:true,
      show:false,
      staus:false,
      dt:0,
      times:0,
      index:1,
      bimage:null,
      images_list:null,
      list_image:[],
      is_hovered:false,
      ptitle:null,
    };

  },
  props:["isbottom"],
  methods: {
    load_more(val){
      this.$emit("load_more",val);
    },
    loadimg(val){
      this.$emit("loadimg",val);
    },
    read_post(val){
      this.$router.push({name:'post',params:{ptitle:val}});
    },
    player(){
      if(this.index==3){
        this.index=1;
      }else
      this.index+=1;

    },
    selectimage(data){
      this.index=data;
    },
    star(val){
      this.dt=setInterval(this.player, val);
      this.staus=true;
    },
    puash(){
      clearInterval(this.dt);
      this.staus=false;
    },
    div_star(){
      this.dt=setInterval(this.player, 3000);
      this.is_hovered=false;
    },
    div_puash(){
      clearInterval(this.dt);
      this.is_hovered=true;
    },
    load_img() {
      var _this = this;
      let params={
        id:0,
        end_id:3
      }
     _this.postRequest("/api/find_postById",params)
          .then(response => {
            console.log(response)
            if (response.length != 0) {
              _this.list_image = response;
              const imgs = new Image();
              imgs.src = _this.list_image[this.index-1].pic;
              console.log(imgs.src)
              imgs.onload = function () {
                  _this.isLoading = false;
              }
              imgs.onerror = function () {
              }
            } else {
            }
          });
    }
  },
  mounted() {
    const _this=this;
    _this.load_img();
    _this.$nextTick(()=>{
      _this.star(4000);
    })
  },
}
</script>

<style scoped>

</style>