webpackJsonp([2],{"1ByF":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"view_container"},[o("router-view")],1),t._v(" "),o("div",{staticStyle:{position:"fixed",top:"0",width:"100%"}},[o("mu-bottom-nav",{attrs:{value:t.bottomNav,shift:""},on:{change:t.handleChange}},[o("mu-bottom-nav-item",{attrs:{value:"",title:"发现音乐",icon:"hearing",to:"/"}}),t._v(" "),o("mu-bottom-nav-item",{attrs:{value:"myMusic",title:"我的音乐",icon:"music_note",to:"/myMusic"}}),t._v(" "),o("mu-bottom-nav-item",{attrs:{value:"friends",title:"朋友",icon:"supervisor_account",to:"/friends"}}),t._v(" "),o("mu-bottom-nav-item",{attrs:{value:"myself",title:"自己",icon:"accessibility"}})],1)],1)])},n=[],a={render:i,staticRenderFns:n};e.a=a},"1hL2":function(t,e,o){e=t.exports=o("FZ+f")(!0),e.push([t.i,".view_container[data-v-2644ec06]{padding-top:66px;padding-bottom:66px}","",{version:3,sources:["E:/webWorks/pig-music/src/views/First.vue"],names:[],mappings:"AACA,iCAEE,iBAAkB,AAClB,mBAAqB,CACtB",file:"First.vue",sourcesContent:["\n.view_container[data-v-2644ec06]\n{\n  padding-top: 66px;\n  padding-bottom: 66px;\n}\n"],sourceRoot:""}])},"5iJx":function(t,e,o){var i=o("1hL2");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("2d3c0280",i,!0)},MMY3:function(t,e,o){"use strict";function i(t){o("5iJx")}Object.defineProperty(e,"__esModule",{value:!0});var n=o("vLpq"),a=o("1ByF"),s=o("VU/8"),r=i,c=s(n.a,a.a,r,"data-v-2644ec06",null);e.default=c.exports},vLpq:function(t,e,o){"use strict";e.a={data:function(){return{bottomNav:"",bottomNavColor:this.$route.path.replace("/","")}},methods:{handleChange:function(t){this.bottomNav=t},InItBottomNav:function(){var t=this,e=this.$route.path.replace("/",""),o=e.indexOf("/");t.bottomNav=o>0?e.substr(0,o):e}},mounted:function(){this.InItBottomNav()}}}});
//# sourceMappingURL=2.0cf6670c44c3e5aa2974.js.map