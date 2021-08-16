<template>
  <div>
    <h1>{{this.$store.getters.NumText}}</h1>
    <h1>{{NumText}}</h1>
    <button @click="addNum">+1</button>
    <button @click="addNumAsync">+1Async</button>
    <button @click="incrementByN(3)">+n</button>
    <button @click="incrementByNAsync(3)">+nAsync</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['NumText'])
  },
  methods:{
    ...mapMutations(['incrementByN']),
    addNum(){
      this.$store.commit("increment");
    },
    ...mapActions(["incrementByNAsync"]),
    addNumAsync(){
      this.$store.dispatch("incrementAsync");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
