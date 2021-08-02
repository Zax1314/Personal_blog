<template>
  <div id="suiyu-main-div">
    <SuiyuCom v-for="count in alldata.length" :whos="alldata[count-1].who" :time="alldata[count-1].time" :resume="alldata[count-1].resume" :content="alldata[count-1].content" :url="alldata[count-1].url" :like="alldata[count-1].like" :key="count"></SuiyuCom>
  </div>
</template>

<script>
import SuiyuCom from "@/components/SuiyuCom";
import Bottom from "@/components/Bottom";
export default {
  name: "Suiyu",
  props:["scroll_name"],
  components: {Bottom, SuiyuCom},
  data(){
    return{
      alldata:[{who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:10,content:"Unbreakable growing！=sustainable development !!!!!",url:"https://oss-cdn.yevpt.com/say/1/930395bee16c337f9163946e113e4192.jpg?a=cb1af3e7b563d58320fc2d61e6cae7c5&b=60c2fee1"},
        {who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:5,content:"第二条碎语!!!",url:""},
        {who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:4,content:"第一条碎语!!!",url:""},
        {who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:4,content:"第一条碎语!!!",url:""},
        {who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:4,content:"第一条碎语!!!",url:""},
        {who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:4,content:"第一条碎语!!!",url:""},
        {who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:4,content:"第一条碎语!!!",url:""},
        {who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:4,content:"第一条碎语!!!",url:""},
        {who:"Tyyds",time:"4天前",resume:"I am The King of The World!",like:4,content:"第一条碎语!!!",url:""},

      ]
    }
  },

}
</script>

<style scoped>

</style>