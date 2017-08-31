<template>
    <div>
        <div class="normal_player_container" v-show="fullScreen">
          <div class="musicPlay_big_container_bg" :style="{'background-image': 'url('+currentSong.poster+')'}">
            <div class="musicPlay_big_container_bg_blur"  :style="{'background-image': 'url('+currentSong.poster+')'}"></div>
          </div>
          <div class="musicPlay_title">
            <div class="music_title_left" @click="closeFullScreen">
              <mu-icon value="chevron_left"/>
            </div>
            <div class="musicPlay_title_center">
              <h1 class="music_name">理想三旬</h1>
              <p class="music_desc">陈鸿宇 - 浓烟下的诗歌电台</p>
            </div>
            <div class="music_title_right"></div>
          </div>
          <div class="music_content_container">
            <div class="music_poster_container" :class="{'pause': !playing}">
              <img class="music_poster"  :src="currentSong.poster"/>
            </div>
          </div>
          <div class="control_container">
            <div class="music_time-line">
              <div class="current-time">{{currentTime | timeFormat}}</div>
              <div class="progress-bar">
                <div class="progress-bg">
                  <div class="progress_played" :style="{width: (currentTime/currentSong.duration * 100) + '%'}">
                    <div class="progress_touch_ball"></div>
                  </div>
                </div>
              </div>
              <div class="duration-time">{{currentSong.duration | timeFormat}}</div>
            </div>
            <div class="operators_container">
                <div class="operators_left">
                  <mu-icon value="skip_previous"></mu-icon>
                </div>
                <div class="operators_center">
                  <mu-icon :value="playing ? 'pause_circle_outline' : 'play_circle_outline'" @click="togglePlaying"></mu-icon>
                </div>
              <div class="operators_right">
                <mu-icon value="skip_next"></mu-icon>
              </div>
            </div>
          </div>
        </div>
      <div v-if="!fullScreen" class="mini_Player_container" @click="openFullScreen">
        <img class="mini_music_poster"  :src="currentSong.poster"/>
      </div>

      <audio ref="audioRef"
             @timeupdate="timeupdate"
             :src="currentSong.src"
      >Your browser does not support the audio element.</audio>
    </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex'
  import songList from '../../data/songList'
  export default {
    data () {
      return {
        currentSong: songList[1],
        currentTime: 0,
        durationTime: 0
      }
    },
    computed: {
      ...mapGetters(['fullScreen', 'playing'])
    },
    filters: {
      timeFormat (value) {
        if (value != null) {
          let minute = Math.floor(value / 60)
          let second = Math.floor(value - (minute * 60))
          return ((minute < 10) ? ('0' + minute) : minute) + ':' + ((second < 10) ? ('0' + second) : second)
        } else {
          return '00 : 00'
        }
      }
    },
    methods: {
      ...mapMutations({
        setPlayingState: 'SET_PLAYING_STATE',
        setFullScreen: 'SET_FULL_SCREEN'
      }),
      timeupdate (e) {
        this.currentTime = e.target.currentTime
      },
      togglePlaying () {
        this.setPlayingState(!this.playing)
      },
      closeFullScreen () {
        this.setFullScreen(false)
      },
      openFullScreen () {
        this.setFullScreen(true)
      }
    },
    watch: {
      playing (state) {
        console.log(state)
        const that = this
        const audio = that.$refs.audioRef
        this.$nextTick(() => {
          state ? audio.play() : audio.pause()
        })
      }
    }
  }
</script>
<style scoped>
  @import "style.css";
</style>
