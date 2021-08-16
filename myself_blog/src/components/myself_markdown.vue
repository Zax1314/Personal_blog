<template>
<div v-highlight>
  <el-input placeholder="标题" v-model="ptitle"></el-input>
  <el-input placeholder="背景图地址" v-model="pic" style="width: 50%"></el-input>
  <el-select v-model="ptype" placeholder="请选择类型" style="float: right">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <mavon-editor ref=md
                v-model="mark_value"
                :toolbars="toolbars"
                style="margin-top: 10px"
                :ishljs = "true"
                :codeStyle="codeStyle"
  ></mavon-editor>
  <el-button type="primary" @click="submit" style="float: right;margin-top: 5px">上传文章</el-button>
</div>

</template>

<script>
import instance from "@/utils/api";
import {mapState} from 'vuex'
import 'mavon-editor/dist/markdown/github-markdown.min.css'
export default {
  name: "myself_markdown",
  data(){
    return{
      mark_value:'',
      pic: '图片暂无',
      ptitle:'',
      ptype:'',
      codeStyle:'googlecode',
      pcontext:'',
      options: [{
        value: 'JS',
        label: 'JS'
      }, {
        value: 'VUE',
        label: 'VUE'
      }, {
        value: 'HTTP',
        label: 'HTTP'
      },
        {
          value: 'CSS',
          label: 'CSS'
        },

    ],
        toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        preview: true,
        htmlcode: true,
          fullscreen: true, // 全屏编辑
      }
    }
  },
  computed:{
    ...mapState(['user'])
  },
  methods:{
    submit(){
     this.pcontext= this.$refs.md.d_render;
      let params={
        pic:this.pic,
        ptitle:this.ptitle,
        ptime:this.getNowTime(),
        pcontext:this.pcontext,
        uname:localStorage.getItem("Authorization")
      }
      instance.post('/api/insert_post',params).then(res=>{
        console.log(res);
      })
    },
  }
}
</script>

<style scoped>

</style>