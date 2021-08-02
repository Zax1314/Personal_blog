<template>
<div id="main-text-right" class="animate__animated animate__slideInUp">
  <span class="spanset" >全部标签</span>
  <labels></labels>
  <span class="spanset" style="margin-top: 20px;display: block">最近碎语</span>
  <SuiyuCom v-for="count in 3" :whos="alldata[count-1].who" :time="alldata[count-1].time" :resume="alldata[count-1].resume" :content="alldata[count-1].content" :url="alldata[count-1].url" :like="alldata[count-1].like" :key="count"></SuiyuCom>
  <button id="create-suiyu"><h4>发表碎语</h4></button>
  <button id="look-more" @click="change_router"><h4>查看更多</h4></button>


</div>
</template>

<script>
import MainTextRightCom from "@/components/main-text-right-com";
import SuiyuCom from "@/components/SuiyuCom";
import Labels from "@/components/labels";
export default {
  name: "main-text-right",
  components: {Labels, SuiyuCom, MainTextRightCom},
  data(){
    return{
      alldata:[{who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:10,content:"Unbreakable growing！=sustainable development !!!!!",url:"https://oss-cdn.yevpt.com/say/1/930395bee16c337f9163946e113e4192.jpg?a=cb1af3e7b563d58320fc2d61e6cae7c5&b=60c2fee1"},
        {who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:5,content:"第二条碎语!!!",url:""},
        {who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:4,content:"第一条碎语!!!",url:""}
      ]
    }
  },
  methods:{
    change_router(){
      this.$router.push('/Suiyu');
    }
  }
}
</script>

<style scoped>

</style>