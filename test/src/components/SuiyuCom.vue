<template>
  <div id="suiyu">
    <div id="suiyu-main" class="animate__animated animate__fadeIn">
      <div style="width: 100%;height: 50px">
        <div id="suiyucom-icon"></div>
        <div id="suiyu-text">
          <h4>{{whos}}</h4><span>{{time}}</span>
        </div>
        <i class="el-icon-more" style="float: right"/>
        <br/>
        <div id="resume_span">{{resume}}</div>
      </div>
      <div id="suiyu-main-text">{{content}}</div>
      <div style="width: 100%;overflow: hidden;display: flex; margin-top: 20px;">
      <div :style="{'backgroundImage':'url('+url+')'}" id="suiyu-img" :class="url!=''?'suiyu-img-y':null"></div>
      </div>
      <span class="suiyu-bottom-span">{{like}}个喜欢</span>
      <el-row :gutter="10" style="margin-top: 10px">
        <el-col :span="8" ><div class="suiyu-ul-div" ><i class="el-icon-star-on"> 收藏</i></div></el-col>
        <el-col :span="8" ><div class="suiyu-ul-div" @click="chang_comment"><i class="el-icon-chat-line-square"> 评论</i></div></el-col>
        <el-col :span="8"><div class="suiyu-ul-div" ><i class="el-icon-share"> 分享</i></div></el-col>
      </el-row>
      <transition enter-active-class="animate__animated animate__fadeIn" >
      <comment v-if="comment_on"></comment>
      </transition>
      </div>

  </div>
</template>

<script>
import Comment from "@/components/comment";
export default {
  name: "SuiyuCom",
  components: {Comment},
  props:["whos","resume","time","content","url","like"],
  data(){
    return{
      comment_on:false,
    }
  },
  methods:{
    chang_comment(){
     this.comment_on=!this.comment_on;
    }
  },
  mounted() {
    window.scrollBy(0,0);
    window.scrollTo(0,0);
  }
}
</script>

<style scoped>

</style>