webpackJsonp([0],{"5o2x":function(e,t,n){var s=n("MNQZ");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n("rjj0")("326b8bfa",s,!0)},CUnU:function(e,t,n){"use strict";function s(e){n("5o2x")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("l6+n"),o=n("JnMZ"),i=n("VU/8"),a=s,l=i(r.a,o.a,a,null,null);t.default=l.exports},JnMZ:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mu-list",[e._l(e.songList,function(t,s){return[n("mu-list-item",{attrs:{shallowInset:""},on:{click:function(t){e.playSong(s)}}},[n("mu-icon",{directives:[{name:"show",rawName:"v-show",value:t.id===e.currentSong.id,expression:"item.id === currentSong.id"}],attrs:{value:"volume_up",color:"#7e57c2"},slot:"left"}),e._v(" "),n("mu-avatar",{directives:[{name:"show",rawName:"v-show",value:t.id!==e.currentSong.id,expression:"item.id !== currentSong.id"}],style:{"margin-left":"-8px"},attrs:{color:"#999",backgroundColor:"transparent"},slot:"leftAvatar"},[e._v(e._s(s+1))]),e._v(" "),n("div",{slot:"title"},[e._v(e._s(t.name))]),e._v(" "),n("div",{slot:"describe"},[e._v(e._s(t.singer)+" - "+e._s(t.album))])],1)]})],2)],1)},r=[],o={render:s,staticRenderFns:r};t.a=o},MNQZ:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"page.vue",sourceRoot:""}])},"l6+n":function(e,t,n){"use strict";var s=n("Dd8w"),r=n.n(s),o=n("NYxO"),i=n("afG6");t.a={data:function(){return{songList:i.a}},methods:r()({},n.i(o.c)({setTopNav:"commoms/SET_TOP_NAV",setPlayingState:"player/SET_PLAYING_STATE",setFullScreen:"player/SET_FULL_SCREEN",setCurrentIndex:"player/SET_CURRENT_SONG_INDEX"}),{playSong:function(e){this.setPlayingState(!0),this.setFullScreen(!0),this.setCurrentIndex(e)}}),computed:r()({},n.i(o.b)({currentSong:"player/currentSong"})),created:function(){this.setTopNav("myMusic")}}}});
//# sourceMappingURL=0.6b0a291879635500749e.js.map