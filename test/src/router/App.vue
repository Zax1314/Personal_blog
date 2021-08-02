<template>
  <div>
    <transition leave-active-class="animate__animated animate__fadeOutUp">
      <span v-if="show_span" :style="{color:span_color,top:span_top,left:span_left}" id="words_span">{{span_value}}</span>
    </transition>
    <div id="main-div" v-show="!isLoading">
      <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp" >
        <Main_header v-on:Child_event="C_selected" style="z-index: 3" v-if="show_header" :showback="showback" @show_back="show_back"/>
      </transition>
      <router-view :isbottom="isbottom" @loadimg="loadimg" @load_more="load_more" @show_back="show_back"></router-view>
      <transition enter-active-class="animate__animated animate__fadeInUp" leave-active-class="animate__animated animate__fadeOutUp" >
        <rocket v-if="show_rocket" @scroll_top="fresh"></rocket>
      </transition>
      <bottom></bottom>
    </div>
  </div>
</template>

<script>
import Main_header from '../components/Main-header.vue'
import Liuyan from "@/components/Liuyan";
import Suiyu from "@/components/Suiyu";
import Quanzi from "@/components/Quanzi";
import Youlin from "@/components/Youlin";
import Loading from "@/components/Loading";
import main_text from "@/components/main_text";
import animate from 'animate.css'
import Main from "@/components/Main";
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import LoginBox from "@/components/LoginBox";
import Bottom from "@/components/Bottom";
import Rocket from "@/components/rocket";
export default {
  name: 'app',
  data(){
    return{
      showback:false,
      show_rocket:false,
      show_header:true,
      now_hight:0,
      Childselected:'Main',
      isLoading:false,
      isbottom:3,
      load_img:true,
      show_span:false,
      span_value:null,
      span_color:null,
      span_left:0,
      span_top:0,
      colors:["#ea66a6","#009ad6","#d71345","#45b97c"],
      words:["富强💪","民主❀","文明♥","和谐♥"],
      scroll_top:0,
    }

  },
  components: {
    Rocket,
    Bottom,
    LoginBox,
    Main_header,
    Liuyan,
    Youlin,
    Main,
    Suiyu,
    Quanzi,
    Loading,
    main_text
  },
  methods:{

    show_back(val){
      this.showback=val;
    },
    load_more(val){
      this.isbottom+=val;
    },
    loadimg(val){
      this.load_img=val
    },
    showButton(){
      alert(111);
    },
    fresh(){
      this.$refs.app.scrollTo(0,0);
    },
    C_selected:function f(data) {
      switch (data){
        case 1:
          this.Childselected="Main";
          break;
        case 2:
          this.Childselected="Suiyu";
          break;
        case 3:
          this.Childselected="Liuyan";
          break;
        case 4:
          this.Childselected="Youlin";
          break;
        case 5:
          this.Childselected="Quanzi";
          break;
      }
    },
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight
      if(scrollTop>400){
        this.show_rocket=true;
      }else{
        this.show_rocket=false;
      }
      if (this.now_hight<=0||this.now_hight>scrollTop){
        this.show_header=true;
      }else if(this.now_hight<scrollTop){
        this.show_header=false;
      }
      this.now_hight=scrollTop;
      if(parseInt(scrollHeight-(scrollTop+windowHeight))<5 &&this.load_img){
        //到了这个就可以进行业务逻辑加载后台数据了
        if(this.isbottom<4)
          this.isbottom=this.isbottom+1;
      }

    },
    create_div(e){
      this.show_span=false;
      const num=Math.round(Math.random()*3);
      this.span_left=e.pageX+"px";
      this.span_top=e.pageY+"px";
      this.span_color=this.colors[num];
      this.span_value=this.words[num];
      this.show_span=true;
      setTimeout(()=>{
        this.show_span=false;
      },100);
    }
  },
  mounted() {

    const _this=this;
    window.addEventListener("beforeunload", _this.fresh);
    window.addEventListener("click",_this.create_div);
    window.addEventListener("scroll",_this.handleScroll);
  },
}
</script>
<style>
*{
  margin: 0px;
  padding: 0px;
}
body{
  background: #f4f4f4;
}
</style>