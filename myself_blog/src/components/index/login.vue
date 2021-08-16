<template>
  <div class="login_box">
    <div class="login_inner" v-loading="login_loading"  element-loading-text="登录中...">
      <h1>用户登录</h1>
      <el-form :model="login_form" ref="login_form" :rules="rules" style="width: 100%">
          <el-form-item prop="name">
            <el-input v-model="login_form.name" placeholder="请输入账号" style="width: 100%"></el-input>
          </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="login_form.pwd" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit('login_form')" style="width: 100%;">登录</el-button>
        </el-form-item>
        <el-form-item>

          <el-button @click="reset('ruleForm')" style="width: 100%;">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import instance from "@/utils/api";
import {mapState} from 'vuex'
export default {
  name: "login",
  data(){
    return{
      login_form: {
          name:'',
          pwd:''
        },
      rules:{
        name: [
          {required:true,message:"请输入账号",trigger:'blur'},
          {min:3,max:5,message: "账号长度为:3-5",trigger:'blur'}
        ],
        pwd: [
          {required:true,message:"请输入密码",trigger:'blur'},
          {min:3,max:5,message: "密码长度为:3-5",trigger:'blur'}
        ]
      }

    }
  },
  computed:{
    ...mapState(['login_loading'])
  },
  methods:{
    submit(formName){
      this.$refs[formName].validate((valid) => {
        let params={
          uname:this.login_form.name,
          upwd:this.login_form.pwd
        }
        if (valid) {
              this.$store.commit('changLogin_loading',true);
              instance.post("/api/login",params).then(res=>{
              this.$store.commit('changLogin_loading',false);
              this.$store.commit('changeUser',params.uname);
              if (res.data.msg=="成功"){
                localStorage.setItem('Authorization',this.login_form.name)
                this.$router.replace('/');
              }else{
                return;
              }
            })

        } else {
          this.Message.error("请将信息输入完整！")
          return false;
        }
      });
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>