<template>
<div id="main-text">
  <el-row :gutter="20">
    <el-col :md="change_width?16:24">
  <main-text-left :isbottom="isbottom" @loadimg="loadimg" @load_more="load_more"></main-text-left>
    </el-col>
    <transition enter-active-class="animate__animated animate__fadeIn">
    <el-col :md="8" v-if="change_width" >
      <main-text-right></main-text-right>
    </el-col>
    </transition>
  </el-row>
</div>
</template>

<script>
import MainTextLeft from "@/components/main-text-left";
import MainTextRight from "@/components/main-text-right";
import Bottom from "@/components/Bottom";
export default {
  name: "main_text",
  components: {Bottom, MainTextRight, MainTextLeft},
  props:["isbottom"],
  data(){
    return{
      change_width:true,
      window_width:document.body.clientWidth
    }
  },
  methods:{
    load_more(val){
      this.$emit("load_more",val);
    },
    loadimg(val){
        this.$emit("loadimg",val);
    }
  },
  watch:{
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
    _this.window_width=document.body.clientWidth;
    if (_this.window_width<=1300){
      _this.change_width=false;
    }
    window.addEventListener('resize',()=>{ _this.window_width=document.documentElement.clientWidth;

    });

  },
}
</script>

<style scoped>

</style>