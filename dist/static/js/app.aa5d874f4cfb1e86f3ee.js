webpackJsonp([6],{Cpzh:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a});var i="SET_PLAYING_STATE",a="SET_FULL_SCREEN"},D4uH:function(t,n,e){"use strict";function i(t){e("gwEq")}var a=e("dXrS"),r=e("rvl/"),s=e("VU/8"),o=i,c=s(a.a,r.a,o,null,null);n.a=c.exports},E51W:function(t,n){},IcnI:function(t,n,e){"use strict";var i=e("7+uW"),a=e("NYxO"),r=e("lwq5"),s=e("ukYY"),o=e("mUbh"),c=(e.n(o),e("UjVw"));i.default.use(a.c),n.a=new a.c.Store({state:r.a,mutations:s.a,actions:o,getters:c})},KWv7:function(t,n,e){"use strict";n.a=[{path:"",component:function(t){return e.e(3).then(function(){var n=[e("MMY3")];t.apply(null,n)}.bind(this)).catch(e.oe)},children:[{path:"/",name:"",component:function(t){return e.e(4).then(function(){var n=[e("rHKG")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/myMusic",name:"myMusic",component:function(t){return e.e(1).then(function(){var n=[e("+LhE")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/friends",name:"friends",component:function(t){return e.e(2).then(function(){var n=[e("qrCB")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/myMusic/songlist/:id",name:"songlist",component:function(t){return e.e(0).then(function(){var n=[e("CUnU")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]}]},M93x:function(t,n,e){"use strict";var i=e("xJD8"),a=e("PPPy"),r=e("VU/8"),s=r(i.a,a.a,null,null,null);n.a=s.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),a=e("M93x"),r=e("YaEn"),s=e("IcnI"),o=(e("oD7Z"),e("D/PP"),e("D4uH")),c=e("v5o6"),u=e.n(c),l=e("wRhW"),h=e.n(l),d=e("bY4T"),p=(e.n(d),e("u64Q")),f=e.n(p),m=e("E51W");e.n(m);i.default.config.productionTip=!1,i.default.use(f.a),i.default.component("icon",o.a);var v={duration:.3,shadow:!1};i.default.use(h.a,r.a,v),"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){u.a.attach(document.body)},!1),new i.default({el:"#app",router:r.a,store:s.a,template:"<App/>",components:{App:a.a}})},OJJl:function(t,n,e){"use strict";function i(t){e("lUB9")}var a=e("lMyd"),r=e("eGj8"),s=e("VU/8"),o=i,c=s(a.a,r.a,o,"data-v-dcc65642",null);n.a=c.exports},PPPy:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view"),t._v(" "),e("music-player")],1)},a=[],r={render:i,staticRenderFns:a};n.a=r},UjVw:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"playing",function(){return i}),e.d(n,"fullScreen",function(){return a});var i=function(t){return t.playing},a=function(t){return t.fullScreen}},YaEn:function(t,n,e){"use strict";var i=e("7+uW"),a=e("/ocq"),r=e("KWv7");i.default.use(a.a),n.a=new a.a({routes:r.a})},afG6:function(t,n,e){"use strict";var i=[{name:"理想三旬",singer:"陈鸿宇",album:"浓烟下的诗歌电台",duration:"210",poster:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002kvhDj0nU7Qo.jpg?max_age=2592000",src:"http://ws.stream.qqmusic.qq.com/102696799.m4a?fromtag=46"},{name:"数字人生",singer:"林子祥",album:"最爱",duration:"193",poster:"https://y.gtimg.cn/music/photo_new/T002R300x300M00000319JFQ0MLVMK.jpg?max_age=2592000",src:"http://ws.stream.qqmusic.qq.com/491693.m4a?fromtag=46"}];n.a=i},bY4T:function(t,n){},dXrS:function(t,n,e){"use strict";var i=e("7+uW"),a={};n.a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in a||(i.default.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(i.default.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,n=t.width,e=t.height;return Math.max(n,e)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(n){n.outerScale=t.normalizedScale});var n=0,e=0;this.$children.forEach(function(t){n=Math.max(n,t.width),e=Math.max(e,t.height)}),this.childrenWidth=n,this.childrenHeight=e,this.$children.forEach(function(t){t.x=(n-t.width)/2,t.y=(e-t.height)/2})}},register:function(t){for(var n in t){var e=t[n];e.paths||(e.paths=[]),e.d&&e.paths.push({d:e.d}),e.polygons||(e.polygons=[]),e.points&&e.polygons.push({points:e.points}),a[n]=e}},icons:a}},eGj8:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal_player_container"},[e("div",{staticClass:"musicPlay_big_container_bg",style:{"background-image":"url("+t.currentSong.poster+")"}},[e("div",{staticClass:"musicPlay_big_container_bg_blur",style:{"background-image":"url("+t.currentSong.poster+")"}})]),t._v(" "),e("div",{staticClass:"musicPlay_title"},[e("div",{staticClass:"music_title_left",on:{click:t.closeFullScreen}},[e("mu-icon",{attrs:{value:"chevron_left"}})],1),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"music_title_right"})]),t._v(" "),e("div",{staticClass:"music_content_container"},[e("div",{staticClass:"music_poster_container",class:{pause:!t.playing}},[e("img",{staticClass:"music_poster",attrs:{src:t.currentSong.poster}})])]),t._v(" "),e("div",{staticClass:"control_container"},[e("div",{staticClass:"music_time-line"},[e("div",{staticClass:"current-time"},[t._v(t._s(t._f("timeFormat")(t.currentTime)))]),t._v(" "),e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress-bg"},[e("div",{staticClass:"progress_played",style:{width:t.currentTime/t.currentSong.duration*100+"%"}},[e("div",{staticClass:"progress_touch_ball"})])])]),t._v(" "),e("div",{staticClass:"duration-time"},[t._v(t._s(t._f("timeFormat")(t.currentSong.duration)))])]),t._v(" "),e("div",{staticClass:"operators_container"},[e("div",{staticClass:"operators_left"},[e("mu-icon",{attrs:{value:"skip_previous"}})],1),t._v(" "),e("div",{staticClass:"operators_center"},[e("mu-icon",{attrs:{value:t.playing?"pause_circle_outline":"play_circle_outline"},on:{click:t.togglePlaying}})],1),t._v(" "),e("div",{staticClass:"operators_right"},[e("mu-icon",{attrs:{value:"skip_next"}})],1)])])]),t._v(" "),t.fullScreen?t._e():e("div",{staticClass:"mini_Player_container",on:{click:t.openFullScreen}},[e("img",{staticClass:"mini_music_poster",attrs:{src:t.currentSong.poster}})]),t._v(" "),e("audio",{ref:"audioRef",attrs:{src:t.currentSong.src},on:{timeupdate:t.timeupdate}},[t._v("Your browser does not support the audio element.")])])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"musicPlay_title_center"},[e("h1",{staticClass:"music_name"},[t._v("理想三旬")]),t._v(" "),e("p",{staticClass:"music_desc"},[t._v("陈鸿宇 - 浓烟下的诗歌电台")])])}],r={render:i,staticRenderFns:a};n.a=r},gwEq:function(t,n){},lMyd:function(t,n,e){"use strict";var i=e("Dd8w"),a=e.n(i),r=e("NYxO"),s=e("afG6");n.a={data:function(){return{currentSong:s.a[1],currentTime:0,durationTime:0}},computed:a()({},e.i(r.a)(["fullScreen","playing"])),filters:{timeFormat:function(t){if(null!=t){var n=Math.floor(t/60),e=Math.floor(t-60*n);return(n<10?"0"+n:n)+":"+(e<10?"0"+e:e)}return"00 : 00"}},methods:a()({},e.i(r.b)({setPlayingState:"SET_PLAYING_STATE",setFullScreen:"SET_FULL_SCREEN"}),{timeupdate:function(t){this.currentTime=t.target.currentTime},togglePlaying:function(){this.setPlayingState(!this.playing)},closeFullScreen:function(){this.setFullScreen(!1)},openFullScreen:function(){this.setFullScreen(!0)}}),watch:{playing:function(t){console.log(t);var n=this,e=n.$refs.audioRef;this.$nextTick(function(){t?e.play():e.pause()})}}}},lUB9:function(t,n){},lwq5:function(t,n,e){"use strict";var i={sequence:0,loop:1,random:2},a={playing:!1,fullScreen:!0,mode:i.sequence,currentSong:""};n.a=a},mUbh:function(t,n){},"rvl/":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(n){return e("path",t._b({},"path",n,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(n){return e("polygon",t._b({},"polygon",n,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[e("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},a=[],r={render:i,staticRenderFns:a};n.a=r},ukYY:function(t,n,e){"use strict";var i,a=e("bOdI"),r=e.n(a),s=e("Cpzh"),o=(i={},r()(i,s.a,function(t,n){t.playing=n}),r()(i,s.b,function(t,n){t.fullScreen=n}),i);n.a=o},xJD8:function(t,n,e){"use strict";var i=e("OJJl");n.a={components:{MusicPlayer:i.a}}}},["NHnr"]);
//# sourceMappingURL=app.aa5d874f4cfb1e86f3ee.js.map