<template>
    <div>
      <mu-list>
        <template v-for="(item, index) in songList">
          <mu-list-item shallowInset>
            <mu-icon v-show="item.id === currentSong.id" value="volume_up" slot="left" color="#7e57c2" @click="playSong(index)"/>
            <mu-avatar v-show="item.id !== currentSong.id" color="#999" :style="{'margin-left': '-8px'}" backgroundColor="transparent" slot="leftAvatar" @click="playSong(index)">{{index + 1}}</mu-avatar>
            <div slot="title" @click="playSong(index)">{{item.name}}</div>
            <div slot="describe" @click="playSong(index)">{{item.singer}} - {{item.album}}</div>
          </mu-list-item>
        </template>
      </mu-list>
    </div>
</template>
<script>
  import { mapMutations, mapGetters } from 'vuex'
  import songList from '../../data/songList'
  export default {
    data () {
      return {
        songList: songList
      }
    },
    methods: {
      ...mapMutations({
        setTopNav: 'commoms/SET_TOP_NAV',
        setPlayingState: 'player/SET_PLAYING_STATE',
        setFullScreen: 'player/SET_FULL_SCREEN',
        setCurrentIndex: 'player/SET_CURRENT_SONG_INDEX'
      }),
      playSong (index) {
        this.setPlayingState(true)
        this.setFullScreen(true)
        this.setCurrentIndex(index)
      }
    },
    computed: {
      ...mapGetters({
        'currentSong': 'player/currentSong'
      })
    },
    created () {
      this.setTopNav('myMusic')
    }
  }
</script>
<style>
</style>
