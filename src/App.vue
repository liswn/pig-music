<template>
  <div id="app" style="">
    <router-view></router-view>
    <music-player></music-player>
  </div>
</template>
<script>
  import MusicPlayer from './components/MusicPlayer/page.vue'
  export default {
    components: {
      MusicPlayer
    }
  }
</script>
<style>
  #app{
    height: 100%;
    width: 375px;
    margin: 0 auto;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
