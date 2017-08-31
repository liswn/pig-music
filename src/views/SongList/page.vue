<template>
    <div>
      <mu-list>
        <template v-for="(item, index) in songList">
          <mu-list-item :title="item.name" :describeText="item.singer + '-' + item.album" shallowInset @click="playSong(index)">
            <mu-icon value="more_horiz" slot="right"/>
          </mu-list-item>
          <mu-divider shallowInset/>
        </template>
      </mu-list>
    </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  import songList from '../../data/songList'
  export default {
    data () {
      return {
        songList: songList
      }
    },
    methods: {
      ...mapMutations({
        setPlayingState: 'SET_PLAYING_STATE',
        setFullScreen: 'SET_FULL_SCREEN',
        setCurrentIndex: 'SET_CURRENT_SONG_INDEX'
      }),
      playSong (index) {
        this.setPlayingState(true)
        this.setFullScreen(true)
        this.setCurrentIndex(index)
      }
    },
    computed: {
    }
  }
</script>
<style>
</style>
