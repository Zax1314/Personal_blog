<template>
<div id="comment" >
  <ul style="list-style: none;">
    <li><i class="el-icon-link"></i></li>
    <li><i class="el-icon-picture-outline-round"></i></li>
    <li><i class="el-icon-location-outline"></i></li>
    <li><i class="el-icon-delete"></i></li>
    <li><i class="fa fa-eye"></i></li>
    <li><i class="el-icon-question"></i></li>
  </ul>
  <el-input
      type="textarea"
      :autosize="{minRows: 7, maxRows: 7}"
      placeholder="随便说些什么吧😀"
      v-model="textarea"
      maxlength="30"
  >
  </el-input>
  <button style="width: 80px;height: 35px;border-radius: 6px;background: dodgerblue;color: white;border: none;float: right;position: relative;top: -50px;right: 10px">{{btn_value}}</button>
</div>
</template>

<script>
export default {
  name: "comment",
  data(){
    return{
      textarea:'',
      btn_value:'请先登录'
    }
  },
  methods:{
    getCookie(name)
    {
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

      if(arr=document.cookie.match(reg))
        return (arr[2]);
      else
        return null;
    },
  },
  mounted() {
    const _this=this;
    if(_this.getCookie("userInfo")!=null){
      _this.btn_value='发表';
    }else{
      _this.btn_value='请先登录';
    }
  }
}
</script>

<style scoped>

</style>