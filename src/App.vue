<template>
  <div id="app">
    <div class="top">
      <div class="top_nav">
        <mu-bottom-nav :value="bottomNav" shift>
          <mu-bottom-nav-item value="discover" title="发现音乐" icon="hearing" to="/" exact/>
          <mu-bottom-nav-item value="myMusic" title="我的音乐" icon="music_note" to="/myMusic"/>
          <mu-bottom-nav-item value="songer" title="歌手" icon="supervisor_account" to="/songer"/>
          <mu-bottom-nav-item value="myself" title="自己" icon="accessibility"/>
        </mu-bottom-nav>
      </div>
    </div>
    <div class="center">
      <router-view></router-view>
    </div>
    <div :class="{'bottom':(playlist != null)}">
      <music-player></music-player>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'Vuex'
  import MusicPlayer from './components/MusicPlayer/page.vue'
  export default {
    components: {
      MusicPlayer
    },
    data () {
      return {
        bottomNavColor: this.$route.path.replace('/', '')
      }
    },
    computed: {
      ...mapGetters({
        playlist: 'player/playlist',
        bottomNav: 'commoms/topNav'
      })
    }
  }
</script>
<style>
  #app{
    position: relative;
    height: 100%;
    width: 375px;
    margin: 0 auto;
    overflow: hidden;
    background-color: #fff;
    display: flex;
    flex-flow: column;
  }
  .top
  {
    flex: 0 0 56px;
  }
  .top_nav
  {
    position: fixed;
    top:0;
    width: 375px;
  }
  .center
  {
    flex: 1 1 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .bottom
  {
    flex: 0 0 60px;
  }
  .router-link-active {
    -webkit-box-flex: 1.7;
    -webkit-flex: 1.7;
    -ms-flex: 1.7;
    flex: 1.7;
    min-width: 96px;
    max-width: 168px;
    padding-top: 6px;
    padding-bottom: 5px;
  }
</style>
