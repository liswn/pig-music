webpackJsonp([4],{"/r98":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"my-progress-circle"},[n("svg",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"},attrs:{width:t.radius,height:t.radius,viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{staticClass:"progress-background",attrs:{cx:"50",cy:"50",r:"50",fill:"transparent"}}),t._v(" "),n("circle",{staticClass:"progress-bar",attrs:{cx:"50",cy:"50",r:"50",fill:"transparent","stroke-dasharray":t.dasharray,"stroke-dashoffset":t.dashoffset}})]),t._v(" "),t._t("default")],2)])},r=[],s={render:i,staticRenderFns:r};e.a=s},"0AWi":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i="SET_TOP_NAV"},"8+/i":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"newSongsRank",function(){return i});var i=function(t){return t.newSongsRank}},"9OUQ":function(t,e,n){"use strict";var i={topNav:""};e.a=i},"9l82":function(t,e,n){"use strict";var i=n("Dd8w"),r=n.n(i),s=n("NYxO");e.a={props:{percent:{type:Number,default:0}},watch:{percent:function(t){if(t>=0&&!this.touch.init){var e=this.$refs.barRef.clientWidth-0,n=t*e;this._move(n)}}},methods:r()({},n.i(s.c)({setVolume:"player/SET_VOLUME"}),{progressClick:function(t){var e=this.$refs.barRef.getBoundingClientRect().left,n=t.pageX-e;this._move(n),this._percentChange()},progressTouchstart:function(t){this.touch.init=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progressRef.clientWidth},progressTouchmove:function(t){if(this.touch.init){var e=t.touches[0].pageX-this.touch.startX,n=Math.min(this.$refs.barRef.clientWidth-0,Math.max(0,this.touch.left+e));this._move(n);var i=this.$refs.barRef.clientWidth,r=this.$refs.progressRef.clientWidth;this.$emit("volumeChange",r/i)}},progressTouchend:function(){this.touch.init=!1,this._percentChange()},_move:function(t){this.$refs.progressRef.style.width=t+"px",this.$refs.btnRef.style.webkitTransform="translate3d("+t+"px, 0, 0)",this.$refs.btnRef.style.transform="translate3d("+t+"px, 0, 0)"},_percentChange:function(){var t=this.$refs.barRef.clientWidth-0,e=this.$refs.progressRef.clientWidth/t;this.$emit("volumeChange",e)},closeMusic:function(){this.$emit("volumeChange",0)}}),created:function(){this.touch={}}}},AT5V:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return o});var i="SET_PLAYING_STATE",r="SET_FULL_SCREEN",s="SET_CURRENT_SONG_INDEX",a="SET_CURRENT_TIME_AUTO",o="SET_VOLUME"},ApX1:function(t,e,n){"use strict";var i=n("bOdI"),r=n.n(i),s=n("0AWi"),a=r()({},s.a,function(t,e){t.topNav=e});e.a=a},CVKR:function(t,e){},D4uH:function(t,e,n){"use strict";function i(t){n("gwEq")}var r=n("dXrS"),s=n("rvl/"),a=n("VU/8"),o=i,c=a(r.a,s.a,o,null,null);e.a=c.exports},E51W:function(t,e){},FItV:function(t,e,n){"use strict";var i=n("UgkK"),r=n("Xd9C"),s=n("uJwX"),a=n("8+/i"),o={namespaced:!0,state:i.a,mutations:r.a,actions:s,getters:a};e.a=o},IcnI:function(t,e,n){"use strict";var i=n("7+uW"),r=n("NYxO"),s=n("UQa9"),a=n("FItV"),o=n("c3No");i.default.use(r.d);var c=new r.d.Store({modules:{commoms:s.a,discover:a.a,player:o.a}});e.a=c},KWv7:function(t,e,n){"use strict";e.a=[{path:"/discover",name:"discover",component:function(t){return n.e(2).then(function(){var e=[n("rHKG")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/",name:"myMusic",component:function(t){return n.e(0).then(function(){var e=[n("CUnU")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/songer",name:"songer",component:function(t){return n.e(1).then(function(){var e=[n("hFfa")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/myMusic/songlist/:id",name:"songlist",component:function(t){return n.e(0).then(function(){var e=[n("CUnU")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},M93x:function(t,e,n){"use strict";function i(t){n("Mn2G")}var r=n("xJD8"),s=n("PPPy"),a=n("VU/8"),o=i,c=a(r.a,s.a,o,null,null);e.a=c.exports},Mn2G:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r=n("M93x"),s=n("YaEn"),a=n("IcnI"),o=(n("oD7Z"),n("D/PP"),n("D4uH")),c=n("v5o6"),u=n.n(c),l=n("u64Q"),h=n.n(l),f=n("E51W");n.n(f);i.default.config.productionTip=!1,i.default.use(h.a),i.default.component("icon",o.a),"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){u.a.attach(document.body)},!1),new i.default({el:"#app",router:s.a,store:a.a,template:"<App/>",components:{App:r.a}})},O6HQ:function(t,e,n){"use strict";function i(t){n("CVKR")}var r=n("S5jw"),s=n("iqkV"),a=n("VU/8"),o=i,c=a(r.a,s.a,o,"data-v-0d209d4e",null);e.a=c.exports},OJJl:function(t,e,n){"use strict";function i(t){n("lUB9")}var r=n("lMyd"),s=n("eGj8"),a=n("VU/8"),o=i,c=a(r.a,s.a,o,"data-v-dcc65642",null);e.a=c.exports},OOCF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"topNav",function(){return i});var i=function(t){return t.topNav}},PPPy:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"center"},[n("router-view")],1),t._v(" "),n("div",{class:{bottom:null!=t.playlist}},[n("music-player")],1)])},r=[],s={render:i,staticRenderFns:r};e.a=s},S5jw:function(t,e,n){"use strict";var i=n("Dd8w"),r=n.n(i),s=n("NYxO");e.a={props:{percent:{type:Number,default:0}},watch:{percent:function(t){if(t>=0&&!this.touch.init){var e=this.$refs.barRef.clientWidth-0,n=t*e;this._move(n)}}},methods:r()({},n.i(s.c)({setCurrentTimeAuto:"player/SET_CURRENT_TIME_AUTO"}),{progressClick:function(t){var e=this.$refs.barRef.getBoundingClientRect().left,n=t.pageX-e;this._move(n),this._percentChange()},progressTouchstart:function(t){this.touch.init=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progressRef.clientWidth,this.setCurrentTimeAuto(!1)},progressTouchmove:function(t){if(this.touch.init){var e=t.touches[0].pageX-this.touch.startX,n=Math.min(this.$refs.barRef.clientWidth-0,Math.max(0,this.touch.left+e));this._move(n);var i=this.$refs.barRef.clientWidth,r=this.$refs.progressRef.clientWidth;this.$emit("currentTimeChange",r/i)}},progressTouchend:function(){this.touch.init=!1,this._percentChange(),this.setCurrentTimeAuto(!0)},_move:function(t){this.$refs.progressRef.style.width=t+"px",this.$refs.btnRef.style.webkitTransform="translate3d("+t+"px, 0, 0)",this.$refs.btnRef.style.transform="translate3d("+t+"px, 0, 0)"},_percentChange:function(){var t=this.$refs.barRef.clientWidth-0,e=this.$refs.progressRef.clientWidth/t;this.$emit("percentChange",e)}}),created:function(){this.touch={}}}},SUtI:function(t,e,n){"use strict";function i(t){n("z72g")}var r=n("9l82"),s=n("r4F6"),a=n("VU/8"),o=i,c=a(r.a,s.a,o,"data-v-9abf8e74",null);e.a=c.exports},UQa9:function(t,e,n){"use strict";var i=n("9OUQ"),r=n("ApX1"),s=n("ar2z"),a=(n.n(s),n("OOCF")),o={namespaced:!0,state:i.a,mutations:r.a,actions:s,getters:a};e.a=o},UgkK:function(t,e,n){"use strict";var i={newSongsRank:{}};e.a=i},VciE:function(t,e,n){"use strict";e.a={components:{},data:function(){return{dasharray:100*Math.PI}},props:{percent:{type:Number,default:0},radius:{type:Number,default:32}},watch:{},filters:{},methods:{},computed:{dashoffset:function(){return(1-this.percent)*this.dasharray}},created:function(){},mounted:function(){},destroyed:function(){}}},Vdew:function(t,e,n){"use strict";var i,r=n("bOdI"),s=n.n(r),a=n("AT5V"),o=(i={},s()(i,a.a,function(t,e){t.playing=e}),s()(i,a.b,function(t,e){t.fullScreen=e}),s()(i,a.c,function(t,e){t.currentSongIndex=e}),s()(i,a.d,function(t,e){t.currentTimeAuto=e}),s()(i,a.e,function(t,e){t.volume=e}),i);e.a=o},XCta:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"playing",function(){return i}),n.d(e,"fullScreen",function(){return r}),n.d(e,"currentSongIndex",function(){return s}),n.d(e,"playlist",function(){return a}),n.d(e,"currentSong",function(){return o}),n.d(e,"mode",function(){return c}),n.d(e,"currentTimeAuto",function(){return u}),n.d(e,"volume",function(){return l});var i=function(t){return t.playing},r=function(t){return t.fullScreen},s=function(t){return t.currentSongIndex},a=function(t){return t.playlist},o=function(t){return t.playlist[t.currentSongIndex]||{}},c=function(t){return t.mode},u=function(t){return t.currentTimeAuto},l=function(t){return t.volume}},Xd9C:function(t,e,n){"use strict";var i=n("bOdI"),r=n.n(i),s=n("hEuF"),a=r()({},s.a,function(t,e){t.newSongsRank=e});e.a=a},YaEn:function(t,e,n){"use strict";var i=n("7+uW"),r=n("/ocq"),s=n("KWv7");i.default.use(r.a),e.a=new r.a({routes:s.a,mode:"history",activeClass:"mu-bottom-item-active"})},afG6:function(t,e,n){"use strict";var i=[{id:"1",name:"理想三旬",singer:"陈鸿宇",album:"浓烟下的诗歌电台",duration:"210",poster:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002kvhDj0nU7Qo.jpg?max_age=2592000",src:"http://ws.stream.qqmusic.qq.com/102696799.m4a?fromtag=46"},{id:"2",name:"数字人生",singer:"林子祥",album:"最爱",duration:"194",poster:"https://y.gtimg.cn/music/photo_new/T002R300x300M00000319JFQ0MLVMK.jpg?max_age=2592000",src:"http://ws.stream.qqmusic.qq.com/491693.m4a?fromtag=46"},{id:"3",name:"崂山道士",singer:"马维斯",album:"P.E.I.Vol",duration:"244",poster:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000004Q5Or0rIkX0.jpg?max_age=2592000",src:"http://ws.stream.qqmusic.qq.com/102177658.m4a?fromtag=46"},{id:"4",name:"小半",singer:"陈粒",album:"小梦大半",duration:"397",poster:"https://y.gtimg.cn/music/photo_new/T002R300x300M000004fAhFe0fdHYF.jpg?max_age=2592000",src:"http://ws.stream.qqmusic.qq.com/107762070.m4a?fromtag=46"},{id:"5",name:"南方姑娘",singer:"赵雷",album:"赵小雷",duration:"332",poster:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001sKd2l0dVkXa.jpg?max_age=2592000",src:"http://ws.stream.qqmusic.qq.com/2480942.m4a?fromtag=46"},{id:"6",name:"極楽浄土",singer:"GARNiDELiA",album:"Promise code-",duration:"0",poster:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000005RQ5a1fWTfs.jpg?max_age=2592000",src:"http://ws.stream.qqmusic.qq.com/109493978.m4a?fromtag=46"},{id:"7",name:"吉姆餐厅",singer:"赵雷",album:"吉姆餐厅",duration:"0",poster:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000007ujpB2dTrlW.jpg?max_age=2592000",src:"http://ws.stream.qqmusic.qq.com/100641065.m4a?fromtag=46"},{id:"8",name:"Talk Dirty",singer:"Jason DeRulo",album:"Talk Dirty",duration:"0",poster:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000049ZfG22UN3Gt.jpg?max_age=2592000",src:"http://ws.stream.qqmusic.qq.com/5004950.m4a?fromtag=46"}];e.a=i},ar2z:function(t,e){},c3No:function(t,e,n){"use strict";var i=n("xN8q"),r=n("Vdew"),s=n("ebvh"),a=(n.n(s),n("XCta")),o={namespaced:!0,state:i.a,mutations:r.a,actions:s,getters:a};e.a=o},dXrS:function(t,e,n){"use strict";var i=n("7+uW"),r={};e.a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in r||(i.default.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(i.default.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?r[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),r[e]=n}},icons:r}},eGj8:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"normalPlayerShow"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal_player_container"},[n("div",{staticClass:"musicPlay_big_container_bg",style:{"background-image":"url("+t.currentSong.poster+")"}},[n("div",{staticClass:"musicPlay_big_container_bg_blur",style:{"background-image":"url("+t.currentSong.poster+")"}})]),t._v(" "),n("div",{staticClass:"musicPlay_title",on:{click:t.closeFullScreen}},[n("div",{staticClass:"music_title_left"},[n("mu-icon",{attrs:{value:"reply"}})],1),t._v(" "),n("div",{staticClass:"musicPlay_title_center"},[n("h1",{staticClass:"music_name"},[t._v(t._s(t.currentSong.name))]),t._v(" "),n("p",{staticClass:"music_desc"},[t._v(t._s(t.currentSong.singer)+" - "+t._s(t.currentSong.album))])]),t._v(" "),n("div",{staticClass:"music_title_right"})]),t._v(" "),n("div",{staticClass:"music_content_container"},[n("music-volume",{attrs:{percent:t.musicVolume},on:{volumeChange:t.volumeChange}}),t._v(" "),n("div",{staticClass:"music_poster_container play",class:{pause:!t.playing}},[n("img",{staticClass:"music_poster",attrs:{src:t.currentSong.poster}})])],1),t._v(" "),n("div",{staticClass:"control_container"},[n("div",{staticClass:"music_time-line"},[n("div",{staticClass:"current-time"},[t._v(t._s(t._f("timeFormat")(t.currentTime)))]),t._v(" "),n("div",{staticClass:"progress-bar"},[n("my-song-progress",{attrs:{percent:t.currentTime/t.currentSong.duration},on:{percentChange:t.percentChange,currentTimeChange:t.currentTimeChange}})],1),t._v(" "),n("div",{staticClass:"duration-time"},[t._v(t._s(t._f("timeFormat")(t.currentSong.duration)))])]),t._v(" "),n("div",{staticClass:"operators_container"},[n("div",{staticClass:"operators_left"},[n("mu-icon",{attrs:{value:"skip_previous"},on:{click:t.prevSong}})],1),t._v(" "),n("div",{staticClass:"operators_center"},[n("mu-icon",{attrs:{value:t.playing?"pause_circle_outline":"play_circle_outline"},on:{click:t.togglePlaying}})],1),t._v(" "),n("div",{staticClass:"operators_right"},[n("mu-icon",{attrs:{value:"skip_next"},on:{click:t.nextSong}})],1)])])])]),t._v(" "),!t.fullScreen&&t.currentSong?n("div",{staticClass:"mini_Player_container"},[n("div",{staticClass:"mini_music_poster_container",on:{click:t.openFullScreen}},[n("img",{staticClass:"mini_music_poster",class:{pause:!t.playing},attrs:{src:t.currentSong.poster}})]),t._v(" "),n("div",{staticClass:"mini_music_center",on:{click:t.openFullScreen}},[n("h1",{staticClass:"mini_music_name"},[t._v(t._s(t.currentSong.name))]),t._v(" "),n("p",{staticClass:"mini_music_desc"},[t._v(t._s(t.currentSong.singer)+" - "+t._s(t.currentSong.album))])]),t._v(" "),n("div",{staticClass:"mini_music_playing"},[n("my-progress-circle",{attrs:{percent:t.currentTime/t.currentSong.duration,radius:40}},[n("mu-icon",{staticStyle:{position:"absolute",left:"0",top:"0","text-align":"center","font-size":"30px",width:"50px"},attrs:{value:t.playing?"pause":"play_arrow"},on:{click:t.togglePlaying}})],1)],1),t._v(" "),n("div",{staticClass:"mini_music_playing"},[n("mu-icon",{attrs:{value:"skip_next"},on:{click:t.nextSong}})],1)]):t._e(),t._v(" "),n("audio",{ref:"audioRef",attrs:{src:t.currentSong.src},on:{loadeddata:t.loadeddata,timeupdate:t.timeupdate,ended:t.ended}},[t._v("Your browser does not support the audio element.")])],1)},r=[],s={render:i,staticRenderFns:r};e.a=s},ebvh:function(t,e){},gwEq:function(t,e){},hEuF:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i="SET_NEW_SONGS_RANK"},iqkV:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"30px","box-sizing":"border-box"},on:{click:function(e){e.stopPropagation(),t.progressClick(e)}}},[n("div",{ref:"barRef",staticClass:"progress-bg"},[n("div",{ref:"progressRef",staticClass:"progress_played"}),t._v(" "),n("div",{ref:"btnRef",staticClass:"progress_touch_ball_container",on:{touchstart:function(e){e.preventDefault(),t.progressTouchstart(e)},touchmove:function(e){e.preventDefault(),t.progressTouchmove(e)},touchend:t.progressTouchend}},[n("div",{staticClass:"progress_touch_ball"})])])])},r=[],s={render:i,staticRenderFns:r};e.a=s},ksAj:function(t,e){},ktcU:function(t,e,n){"use strict";function i(t){n("ksAj")}var r=n("VciE"),s=n("/r98"),a=n("VU/8"),o=i,c=a(r.a,s.a,o,"data-v-20a5277e",null);e.a=c.exports},lMyd:function(t,e,n){"use strict";var i=n("Dd8w"),r=n.n(i),s=n("NYxO"),a=n("O6HQ"),o=n("ktcU"),c=n("SUtI");e.a={components:{MySongProgress:a.a,MyProgressCircle:o.a,MusicVolume:c.a},data:function(){return{currentTime:0}},computed:r()({},n.i(s.a)("player",{playing:function(t){return t.playing}}),n.i(s.b)({fullScreen:"player/fullScreen",playlist:"player/playlist",currentSong:"player/currentSong",currentSongIndex:"player/currentSongIndex",mode:"player/mode",currentTimeAuto:"player/currentTimeAuto",musicVolume:"player/volume"})),filters:{timeFormat:function(t){if(null!=t){var e=Math.floor(t/60),n=Math.floor(t-60*e);return(e<10?"0"+e:e)+":"+(n<10?"0"+n:n)}return"00 : 00"}},methods:r()({},n.i(s.c)({setPlayingState:"player/SET_PLAYING_STATE",setFullScreen:"player/SET_FULL_SCREEN",setCurrentSongIndex:"player/SET_CURRENT_SONG_INDEX",setVolume:"player/SET_VOLUME"}),{loadeddata:function(t){var e=this,n=e.$refs.audioRef;e.currentSong.duration=n.duration,n.volume=this.musicVolume},timeupdate:function(t){this.currentTimeAuto&&(this.currentTime=t.target.currentTime)},togglePlaying:function(){this.setPlayingState(!this.playing)},closeFullScreen:function(){this.setFullScreen(!1)},openFullScreen:function(){this.setFullScreen(!0)},ended:function(){1===this.mode||this.nextSong()},prevSong:function(){var t=this.currentSongIndex-1;t<0&&(t=this.playlist.length-1),this.setCurrentSongIndex(t),this.playing||this.togglePlaying()},nextSong:function(){if(1===this.playlist.length)this.loopSong();else{var t=this.currentSongIndex+1;t===this.playlist.length&&(t=0),this.setCurrentSongIndex(t),this.playing||this.togglePlaying()}},percentChange:function(t){var e=this.currentSong.duration*t;this.$refs.audioRef.currentTime=e,this.playing||this.togglePlaying()},currentTimeChange:function(t){this.currentTime=this.currentSong.duration*t},volumeChange:function(t){this.setVolume(t)}}),watch:{playing:function(t){var e=this,n=e.$refs.audioRef;this.$nextTick(function(){t?n.play():n.pause()})},currentSong:function(t,e){var n=this;t.id&&t.id!==e.id&&(this.currentTime=0,clearTimeout(this.timer),this.timer=setTimeout(function(){n.$refs.audioRef.play()},1e3))},musicVolume:function(t,e){this.$refs.audioRef.volume=t}}}},lUB9:function(t,e){},r4F6:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"30px","box-sizing":"border-box",position:"relative",margin:"0 60px 0 90px","z-index":"99999"},on:{click:function(e){e.stopPropagation(),t.progressClick(e)}}},[n("mu-icon",{staticClass:"volume_icon",class:{volumeMute:t.percent},attrs:{value:t.percent?"volume_down":"volume_mute"},on:{click:function(e){e.stopPropagation(),t.closeMusic(e)}}}),t._v(" "),n("div",{ref:"barRef",staticClass:"progress-bg"},[n("div",{ref:"progressRef",staticClass:"progress_played",style:{width:100*t.percent+"%"}}),t._v(" "),n("div",{ref:"btnRef",staticClass:"progress_touch_ball_container",style:{transform:"translate3d("+100*t.percent+"%, 0, 0)"},on:{touchstart:function(e){e.preventDefault(),t.progressTouchstart(e)},touchmove:function(e){e.preventDefault(),t.progressTouchmove(e)},touchend:t.progressTouchend}})])],1)},r=[],s={render:i,staticRenderFns:r};e.a=s},"rvl/":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return n("path",t._b({},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return n("polygon",t._b({},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},r=[],s={render:i,staticRenderFns:r};e.a=s},uJwX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"getNewSongsRank",function(){return s});var i=n("mtWM"),r=n.n(i),s=function(t){t.commit,t.state;r()({method:"get",url:"http://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},xJD8:function(t,e,n){"use strict";var i=n("Dd8w"),r=n.n(i),s=n("uUlv"),a=n("OJJl");e.a={components:{MusicPlayer:a.a},data:function(){return{}},computed:r()({},n.i(s.a)({playlist:"player/playlist",bottomNav:"commoms/topNav"}))}},xN8q:function(t,e,n){"use strict";var i=n("afG6"),r={sequence:0,loop:1,random:2},s={playing:!1,fullScreen:!1,mode:r.sequence,playlist:i.a,volume:.2,currentSongIndex:0,currentTimeAuto:!0};e.a=s},z72g:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b382d4c346c04dc8f41e.js.map