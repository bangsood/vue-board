webpackJsonp([0],{EJZr:function(t,e){},F01i:function(t,e){},JCiX:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},a,!1,function(t){n("JCiX")},null,null).exports,o=n("/ocq"),s=[{index:0,title:"안녕하세요",writer:"루피",content:"방갑습니다. 저는 루피입니다."},{index:1,title:"커뮤니티네요.",writer:"키티",content:"커뮤니티에서는 무슨 내용을"},{index:2,title:"헬로입니다.",writer:"헬로",content:"사이좋게 지내보아요"}],c={name:"Read",data:function(){return{data:s}},methods:{write:function(){this.$router.push({path:"create"})},detail:function(t){this.$router.push({name:"Detail",params:{contentId:t}})}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("사용자게시판")]),t._v(" "),t._l(t.data,function(e,i){return n("div",{key:i,staticClass:"container",on:{click:function(e){return t.detail(i)}}},[n("div",{staticClass:"f_wrap"},[n("div",{staticClass:"title"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"name"},[t._v("\n        "+t._s(e.writer)+"\n      ")])]),t._v(" "),n("div",{staticClass:"content"},[t._v("\n      "+t._s(e.content)+"\n    ")])])}),t._v(" "),n("button",{on:{click:t.write}},[t._v("글쓰기")])],2)},staticRenderFns:[]};var u=n("VU/8")(c,d,!1,function(t){n("F01i")},"data-v-e8618abc",null).exports,l={name:"Create",data:function(){var t=this.$route.params.contentId;return{index:t,data:s,writer:void 0!==t?s[t].writer:"",title:void 0!==t?s[t].title:"",content:void 0!==t?s[t].content:""}},methods:{write:function(){this.data.push({writer:this.writer,title:this.title,content:this.content}),this.$router.push({path:"/"})},update:function(){s[this.index].writer=this.writer,s[this.index].title=this.title,s[this.index].content=this.content,this.$router.push({path:"/"})}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("\n    "+t._s(void 0!==t.index?"수정하기":"글쓰기")+"\n   ")]),t._v(" "),n("div",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.writer,expression:"writer"}],attrs:{type:"text",placeholder:"글쓴이"},domProps:{value:t.writer},on:{input:function(e){e.target.composing||(t.writer=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"제목"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{name:"",id:"",cols:"30",placeholder:"내용을 입력하세요",rows:"10"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),n("button",{on:{click:function(e){void 0!==t.index?t.update():t.write()}}},[t._v("\n        "+t._s(void 0!==t.index?"수정하기":"글쓰기")+"\n    ")])])])},staticRenderFns:[]};var p=n("VU/8")(l,v,!1,function(t){n("EJZr")},"data-v-667440d7",null).exports,h={name:"Detail",data:function(){var t=this.$route.params.contentId;return{data:s[t],index:t}},methods:{deleteData:function(){s.splice(this.index,1),this.$router.push({path:"/"})},updateData:function(){this.$router.push({name:"Create",params:{contentId:this.index}})}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("상세페이지")]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"f_wrap"},[n("div",{staticClass:"title"},[t._v(t._s(t.data.title))]),t._v(" "),n("div",{staticClass:"writer"},[t._v(t._s(t.data.writer))])]),t._v(" "),n("div",{staticClass:"content"},[t._v("\n        "+t._s(t.data.content)+"\n    ")])]),t._v(" "),n("button",{on:{click:t.updateData}},[t._v("수정")]),t._v(" "),n("button",{on:{click:t.deleteData}},[t._v("삭제")])])},staticRenderFns:[]};var m=n("VU/8")(h,_,!1,function(t){n("xXyZ")},"data-v-be47bcde",null).exports;i.a.use(o.a);var f=new o.a({routes:[{path:"/",name:"Read",component:u},{path:"/create",name:"Create",component:p},{path:"/detail/:contentId?",name:"Detail",component:m}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:f,components:{App:r},template:"<App/>"})},xXyZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0847ba43a733c37ed652.js.map