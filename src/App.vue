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
    height: 100%
  }
</style>
