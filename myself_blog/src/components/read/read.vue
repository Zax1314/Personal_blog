<template>
    <div class="read-main" v-loading="loading">
      <el-dialog></el-dialog>
      <div style="width: 100%;height:auto;background: white;border-radius: 5px;padding: 20px;box-sizing: border-box;margin-top: 30px">
        <h2 style="word-wrap: break-word">{{ posts.ptitle }}</h2>
        <span>作者：{{posts.uname}}</span><br/><br/><span>时间：{{ posts.ptime }}</span>
        <div v-html="posts.pcontext" v-highlight class="readbox"></div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import instance from "@/utils/api";
import 'mavon-editor/dist/markdown/github-markdown.min.css';
export default {
  name: "read",
  data(){
    return{
      posts:[],
      loading:true,
      open:true
    }
  },
  watch:{
  },
  computed:{
    ...mapState(['which_router']),
  },
  methods:{
    ...mapMutations(['chang_ImgUrl']),
    ...mapMutations(['change_dialog'])
  },
  updated() {

  },
  mounted() {
    var that=this;

    instance.post('/api/find_post',{ptitle:that.$route.params.ptitle}).then(res=>{
      console.log(res.data);
      that.posts=res.data;
      that.loading=false;
      if(!that.loading){
        that.$nextTick(()=>{
          const images=document.getElementsByTagName("img");
          for (let i of images){
            i.addEventListener("click",()=>{
              let imgsrc=i.src;
              that.change_dialog(true);
              that.chang_ImgUrl(imgsrc);
            })
          }
        })
      }
    });



  }
}
</script>

<style scoped>
</style>