<template>
  <div id="app">
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
