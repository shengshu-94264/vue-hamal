webpackJsonp([0],{Ay7W:function(e,n){},C49q:function(e,n){},s7H6:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={name:"",mixins:[],components:{},data:function(){return{pagination:{pageNum:1,pageSize:10,total:0}}},computed:{},props:{},watch:{},created:function(){},mounted:function(){},updated:function(){},filters:{},methods:{onRefresh:function(){var e=this;console.log("触发刷新"),setTimeout(function(){e.sum=15,e.$refs.vhScroller.onReset()},1e3)},onLoading:function(){var e=this;console.log("触发加载更多"),setTimeout(function(){e.sum=e.sum+10,e.$refs.vhScroller.onReset()},1e3)}}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("vh-scroller",{ref:"vhScroller",on:{"on-loading":this.onLoading,"on-refresh":this.onRefresh}},[this._t("default")],2)},staticRenderFns:[]};var s={name:"demo-1",mounted:function(){this.$nextTick(function(){})},data:function(){return{sum:15,msg:"Hello Vue 1!",options:{back:!1,backgroundColor:"#eee",header:{title:"页面-1",back:!1,backgroundColor:"#fff",color:"#000"}}}},components:{vhTabel:t("VU/8")(o,r,!1,function(e){t("Ay7W")},"data-v-04454f9a",null).exports},methods:{}},i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("vh-page",{attrs:{options:e.options}},[t("vhTabel",[t("router-link",{attrs:{to:"/Hello-2",tag:"a"}},e._l(e.sum,function(n){return t("h1",{key:n},[e._v(e._s(e.msg))])}))],1)],1)],1)},staticRenderFns:[]};var a=t("VU/8")(s,i,!1,function(e){t("C49q")},"data-v-296f981c",null);n.default=a.exports}});
//# sourceMappingURL=0.f6ce02480ec8658b5f9a.js.map