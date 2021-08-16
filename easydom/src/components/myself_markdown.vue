<template>
<div>
  <mavon-editor v-model="mark_value"></mavon-editor>
</div>
</template>

<script>
export default {
  name: "myself_markdown",
  data(){
    return{
      mark_value:'',
    }
  }
}
</script>

<style scoped>

</style>