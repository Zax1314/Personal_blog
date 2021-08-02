<template>
<div style="margin-top: 20px;" >
  <div id="ladels_main">
    <span class="labels_items" v-for="index in items" :id="index">{{list_labels[index-1].name}}[{{list_labels[index-1].nums}}]</span>
  </div>
</div>
</template>

<script>
export default {
  name: "labels",

  data(){
    return{
      list_labels:[
        {name:"⚙随笔",nums:10},
        {name:"📚内网穿透",nums:6},
        {name:"⚙随笔",nums:10},
        {name:"📚内网穿透",nums:6},
        {name:"⚙内网穿透",nums:10},
        {name:"📚考公",nums:6},
        {name:"⚙随笔",nums:10},
        {name:"📚考公",nums:6},
        {name:"⚙内网穿透",nums:10},
        {name:"📚考公",nums:6},
      ],
      items:7
    }
  }
}
</script>

<style scoped>

</style>