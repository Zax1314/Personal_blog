(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fda9bb46"],{"99af":function(t,n,e){"use strict";var o=e("23e7"),i=e("d039"),a=e("e8b5"),r=e("861d"),c=e("7b0b"),d=e("50c4"),s=e("8418"),u=e("65f0"),p=e("1dde"),l=e("b622"),h=e("2d00"),f=l("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",g=h>=51||!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),_=p("concat"),m=function(t){if(!r(t))return!1;var n=t[f];return void 0!==n?!!n:a(t)},w=!g||!_;o({target:"Array",proto:!0,forced:w},{concat:function(t){var n,e,o,i,a,r=c(this),p=u(r,0),l=0;for(n=-1,o=arguments.length;n<o;n++)if(a=-1===n?r:arguments[n],m(a)){if(i=d(a.length),l+i>b)throw TypeError(v);for(e=0;e<i;e++,l++)e in a&&s(p,l,a[e])}else{if(l>=b)throw TypeError(v);s(p,l++,a)}return p.length=l,p}})},b946:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{width:"60%"}},[e("ul",{staticStyle:{width:"100%",padding:"10px"}},[t._l(t.count,(function(n){return e("li",{key:n,staticStyle:{width:"100%",height:"auto"}},[e("div",{staticStyle:{width:"100%",height:"auto",background:"white","border-radius":"5px",padding:"20px","box-sizing":"border-box","margin-top":"30px"}},[e("h2",[t._v(t._s(t.posts[n-1].ptitle))]),e("span",[t._v("作者："+t._s(t.posts[n-1].uname))]),t._v(" "),e("span",[t._v("时间："+t._s(t.posts[n-1].ptime))]),e("button",{staticStyle:{float:"right",width:"100px",height:"30px","border-radius":"4px",background:"white",color:"orangered",border:"none",cursor:"pointer"},on:{click:function(e){return t.read(t.posts[n-1].ptitle)}}},[t._v("复习")])])])})),1==t.btn_active?e("el-button",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{type:"primary",disabled:!1},on:{click:t.loadmore}},[t._v("加载更多")]):t._e(),0==t.btn_active?e("el-button",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{type:"primary",disabled:!0}},[t._v("没有了")]):t._e()],2)])},i=[],a=(e("99af"),e("7c15")),r={name:"main-page",data:function(){return{count:0,loading:!1,posts:[],btn_active:!0}},computed:{},methods:{read:function(t){this.$router.push({name:"read",params:{ptitle:t}})},load:function(t){var n=this;a["a"].post("/find_postById",t).then((function(t){n.count+=t.data.length,n.posts=n.posts.concat(t.data),console.log(n.posts),t.data.length<2&&(n.btn_active=!1)}))},loadmore:function(){var t={id:this.count,end_id:this.count+2};this.load(t)}},beforeMount:function(){var t=this,n={id:t.count,end_id:t.count+5};t.load(n)},mounted:function(){}},c=r,d=e("2877"),s=Object(d["a"])(c,o,i,!1,null,"4accfaa0",null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-fda9bb46.c713b369.js.map