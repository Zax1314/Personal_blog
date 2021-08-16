<template>
    <div class="main-page">
<!--      <div style="float: left;width: 100%;height: 50px"><h3>猜你喜欢</h3></div>-->
<!--      <el-carousel height="calc(100vh - 120px)" style="background: red;width: 100%;border-radius: 10px">-->
<!--        <el-carousel-item v-for="index in 4" :key="index">-->

<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
      <ul style="width: 100%;padding: 10px;box-sizing: border-box" class="main_box">
        <li v-for="index in count" style="width: 100%;height: auto;" :key="index" class="animate__animated animate__fadeInUp" >
          <div style="width: 100%;height:auto;background: white;border-radius: 5px;padding: 20px;box-sizing: border-box;margin-top: 30px" >
            <button style="float: right;width: 90px;height: 30px;border-radius: 4px;border: none;cursor: pointer;" class="del_btn" @click="read(posts[index-1].ptitle)">删除</button>
            <button style="float: right;width: 90px;height: 30px;border-radius: 4px;border: none;cursor: pointer;" class="update_btn" @click="read(posts[index-1].ptitle)">修改</button>
            <span class="main_title">{{ posts[index-1].ptitle }}</span>
            <br/><br/>
            <span>作者：{{posts[index-1].uname}}</span> <span>时间：{{ posts[index-1].ptime }}</span>

            <button style="float: right;width: 90px;height: 30px;border-radius: 4px;border: none;cursor: pointer" class="review_btn" @click="read(posts[index-1].ptitle)">复习</button>
          </div>
        </li>
        <el-button v-if="btn_active==true" type="primary" style="width: 100%;margin-top: 10px" @click="loadmore" :disabled="false" :loading="btn_loading">加载更多</el-button>
        <el-button v-if="btn_active==false" type="primary" style="width: 100%;margin-top: 10px" :disabled="true">没有了</el-button>
      </ul>
    </div>
</template>

<script>
import instance from "@/utils/api";

export default {
  name: "main-page",
  data(){
    return{
      btn_loading:false,
      count:0,
      loading:false,
      posts:[],
      btn_active:true,
    }
  },
  computed:{
  },
  methods:{
    read(title){
      this.$router.push({name:'read',params:{ptitle:title}})
    },
    load(params){
      this.btn_loading=true;
      instance.post("/api/find_postById",params).then(res=>{
        this.count+=res.data.length;
        this.posts=this.posts.concat(res.data);
        console.log(this.posts)
        this.btn_loading=false;
        if (res.data.length<=2){
              this.btn_active=false
        }
      })
    },
    loadmore(){
      let params={
        id:this.count,
        end_id:3
      }
      this.load(params);
    }
  },
  beforeMount() {
    var that=this;
    let params={
      id:that.count,
      end_id:that.count+3
    }
    that.load(params)
  },
  mounted() {

  }
}
</script>

<style scoped>
li{
  float: left;
}
</style>