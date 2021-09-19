<template>
  <div class="container">
    <view-img :img="view_imgUrl" v-if="dialogState" ></view-img>
<!--      首页头部-->
      <div class="header">
        <el-row style="width: 100%">
          <el-col :span="8" style="height: 50px;">
            KOTW
          </el-col>
          <el-col :span="8" style="height: 50px;">
            <el-row :gutter="8">
              <el-col :span="6">
                  <router-link :to="{path:'/'}" :class="which_router=='/'?'select_items':'header_items'"><span>首页</span></router-link>
              </el-col>
              <el-col :span="6">
                <router-link :to="{path:'/'}" :class="which_router=='/gd'?'select_items':'header_items'"><span>归档</span></router-link>
              </el-col>
              <el-col :span="6">
                <router-link :to="{path:'/'}" :class="which_router=='/labslo'?'select_items':'header_items'"><span>标签</span></router-link>
              </el-col>
              <el-col :span="6">
                <router-link :to="{path:'/md'}" :class="which_router=='/md'?'select_items':'header_items'"><span>md</span></router-link>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8" style="height: 50px;">
            <el-dropdown>
            <el-avatar> {{user}}
              <i class="el-icon-arrow-down"></i>
            </el-avatar>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>安全退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>
    <div class="main">
      <keep-alive include="main-page,myself_markdown">
      <router-view class="animate__animated animate__fadeIn"></router-view>
      </keep-alive>
    </div>
    <!--    首页页脚-->
    <div class="footer">
      © 2021 kotw.com All Rights Reserved.
    </div>


  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapState} from 'vuex'
import ViewImg from "@/components/img-view/view-img";
export default {
  name: 'home',
  components: {ViewImg},
  data(){
    return{
      input:'',
      user:'',
    }
  },
  methods:{
    ...mapMutations(['chang_router'])
  },
  watch:{
    $route(to){
          this.chang_router(to.path);
    }
  },
  computed:{
    ...mapState(['which_router']),
    ...mapState(["view_imgUrl"]),
    ...mapState(["dialogState"]),
  },
  props: {
    msg: String
  },
  mounted() {
    var that=this;
    that.user=localStorage.getItem("Authorization");
    that.chang_router(that.$route.path);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
