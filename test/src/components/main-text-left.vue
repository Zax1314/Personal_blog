<template>
<div id="main-text-left" class="animate__animated animate__slideInUp">
  <span class="spanset" >全部文章</span>
  <main-text-left-com v-for="index in isbottom" :indexs="index" @loadimg="loadimg"></main-text-left-com>
  <button v-if="show_btn" id="look-more-left" @click="load_more" class="animate__animated animate__fadeInUp"><h4>加载更多</h4></button>
  <h3 v-if="show_btn==false" style="text-align: center;margin-top: 20px" class="">木有了~~</h3>
  <span v-if="change_width" class="spanset" style="float: left;top: 40px;display: block;width: 100%">全部标签</span>
  <labels v-if="change_width" style="float: left;width: 100%"></labels>
</div>
</template>

<script>
import MainTextLeftCom from "@/components/main-text-left-com";
import Bottom from "@/components/Bottom";
import Labels from "@/components/labels";
export default {
  data(){
    return{
          items:3,
          show_btn:true,
          change_width:false,
          window_width:0
    }
  },
  name: "main-text-left",
  components: {Labels, Bottom, MainTextLeftCom},
  props:["isbottom"],
  methods:{
    loadimg(val){
        this.show_btn=false;
        this.$emit("loadimg",val);
    },
    load_more(){
      this.$emit("load_more",1);
    },
  },
  watch:{
    window_width(val){
      const _this=this;
      if (val>1300){
        _this.change_width=false;

      }else{
        _this.change_width=true;
      }
    }
  },
  mounted() {
    const _this=this;
    _this.window_width=document.body.clientWidth;
    if (_this.window_width<=1300){
      _this.change_width=true;
    }
    window.addEventListener('resize',()=>{ _this.window_width=document.documentElement.clientWidth;
    });
  }
}
</script>

<style scoped>

</style>