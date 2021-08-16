<template>
    <div class="read-main" v-loading="loading">
      <div style="width: 100%;height:auto;background: white;border-radius: 5px;padding: 20px;box-sizing: border-box;margin-top: 30px">
        <h2 style="word-wrap: break-word">{{ posts.ptitle }}</h2>
        <span>作者：{{posts.uname}}</span><br/><br/><span>时间：{{ posts.ptime }}</span>
        <div v-html="posts.pcontext" v-highlight class="readbox"></div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import instance from "@/utils/api";
import 'mavon-editor/dist/markdown/github-markdown.min.css';
export default {
  name: "read",
  data(){
    return{
      posts:[],
      loading:true,
    }
  },
  watch:{
  },
  computed:{
    ...mapState(['which_router'])
  },
  updated() {

  },
  mounted() {
    var that=this;
    instance.post('/api/find_post',{ptitle:that.$route.params.ptitle}).then(res=>{
      console.log(res.data);
      that.posts=res.data;
      that.loading=false;
      console.log(that.loading)
    })
  }
}
</script>

<style scoped>
</style>