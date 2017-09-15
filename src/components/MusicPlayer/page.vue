<template>
    <div>
        <transition name="normalPlayerShow">
          <div class="normal_player_container" v-show="fullScreen">
            <div class="musicPlay_big_container_bg" :style="{'background-image': 'url('+currentSong.poster+')'}">
              <div class="musicPlay_big_container_bg_blur"  :style="{'background-image': 'url('+currentSong.poster+')'}"></div>
            </div>
            <div class="musicPlay_title" @click="closeFullScreen">
              <div class="music_title_left">
                <mu-icon value="reply"/>
              </div>
              <div class="musicPlay_title_center">
                <h1 class="music_name">{{currentSong.name}}</h1>
                <p class="music_desc">{{currentSong.singer}} - {{currentSong.album}}</p>
              </div>
              <div class="music_title_right"></div>
            </div>
            <div class="music_content_container">
              <music-volume :percent="musicVolume" @volumeChange="volumeChange"></music-volume>
              <div class="music_poster_container play" :class="{'pause': !playing}">
                <img class="music_poster"  :src="currentSong.poster"/>
              </div>
            </div>
            <div class="control_container">
              <div class="music_time-line">
                <div class="current-time">{{currentTime | timeFormat}}</div>
                <div class="progress-bar">
                  <my-song-progress :percent="(currentTime/currentSong.duration)" @percentChange="percentChange" @currentTimeChange="currentTimeChange"></my-song-progress>
                </div>
                <div class="duration-time">{{currentSong.duration | timeFormat}}</div>
              </div>
              <div class="operators_container">
                <div class="operators_left">
                  <mu-icon value="skip_previous" @click="prevSong"></mu-icon>
                </div>
                <div class="operators_center">
                  <mu-icon :value="playing ? 'pause_circle_outline' : 'play_circle_outline'" @click="togglePlaying"></mu-icon>
                </div>
                <div class="operators_right">
                  <mu-icon value="skip_next" @click="nextSong"></mu-icon>
                </div>
              </div>
            </div>
          </div>
        </transition>
      <!--最小化-->
      <div v-if="!fullScreen && currentSong" class="mini_Player_container">
        <div class="mini_music_poster_container" @click="openFullScreen" >
          <img class="mini_music_poster" :class="{'pause': !playing}"  :src="currentSong.poster"/>
        </div>
        <div class="mini_music_center" @click="openFullScreen" >
          <h1 class="mini_music_name">{{currentSong.name}}</h1>
          <p class="mini_music_desc">{{currentSong.singer}} - {{currentSong.album}}</p>
        </div>
        <div class="mini_music_playing">
          <my-progress-circle :percent="(currentTime/currentSong.duration)" :radius="40">
            <mu-icon :value="playing ? 'pause' : 'play_arrow'" @click="togglePlaying" style="position: absolute;left: 0;top: 0;text-align: center;font-size: 30px;width: 50px;"></mu-icon>
          </my-progress-circle>
        </div>
        <div class="mini_music_playing">
          <mu-icon value="skip_next" @click="nextSong"></mu-icon>
        </div>
      </div>

      <audio ref="audioRef"
             @loadeddata="loadeddata"
             @timeupdate="timeupdate"
             @ended="ended"
             :src="currentSong.src"
      >Your browser does not support the audio element.</audio>
    </div>
</template>
<script>
  import { mapGetters, mapMutations, mapState } from 'vuex'
  import MySongProgress from '../MySongProgress/page.vue'
  import MyProgressCircle from '../MyProgressCircle/page.vue'
  import MusicVolume from '../MusicVolume/page.vue'

  export default {
    components: {
      MySongProgress,
      MyProgressCircle,
      MusicVolume
    },
    data () {
      return {
        currentTime: 0
      }
    },
    computed: {
      ...mapState('player', {
        playing: state => state.playing
      }),
      ...mapGetters({
        fullScreen: 'player/fullScreen',
        playlist: 'player/playlist',
        currentSong: 'player/currentSong',
        currentSongIndex: 'player/currentSongIndex',
        mode: 'player/mode',
        currentTimeAuto: 'player/currentTimeAuto',
        musicVolume: 'player/volume'
      })
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
        setPlayingState: 'player/SET_PLAYING_STATE',
        setFullScreen: 'player/SET_FULL_SCREEN',
        setCurrentSongIndex: 'player/SET_CURRENT_SONG_INDEX',
        setVolume: 'player/SET_VOLUME'
      }),
      loadeddata (e) {
        const that = this
        const audio = that.$refs.audioRef
        that.currentSong.duration = audio.duration
        audio.volume = this.musicVolume
      },
      timeupdate (e) {
        if (this.currentTimeAuto) {
          this.currentTime = e.target.currentTime
        }
      },
      togglePlaying () {
        this.setPlayingState(!this.playing)
      },
      closeFullScreen () {
        this.setFullScreen(false)
      },
      openFullScreen () {
        this.setFullScreen(true)
      },
      // audio API ended  当前歌曲播放完毕
      ended () {
        if (this.mode === 1) {
          // 单曲循环模式
        } else {
          this.nextSong()
        }
      },
      // 上一首
      prevSong () {
        let index = this.currentSongIndex - 1
        if (index < 0) {
          index = this.playlist.length - 1
        }
        this.setCurrentSongIndex(index)
        if (!this.playing) {
          this.togglePlaying()
        }
      },
      // 下一首
      nextSong () {
        if (this.playlist.length === 1) {
          this.loopSong()
        } else {
          let index = this.currentSongIndex + 1
          if (index === this.playlist.length) {
            index = 0
          }
          this.setCurrentSongIndex(index)
          if (!this.playing) {
            this.togglePlaying()
          }
        }
      },
      percentChange (newPercent) {
        let currentTime = this.currentSong.duration * newPercent
        this.$refs.audioRef.currentTime = currentTime
        // 进度改变后自动播放
        if (!this.playing) {
          this.togglePlaying()
        }
      },
      currentTimeChange (newVal) {
        this.currentTime = this.currentSong.duration * newVal
      },
      volumeChange (newVal) {
        this.setVolume(newVal)
      }
    },
    watch: {
      playing (state) {
        const that = this
        const audio = that.$refs.audioRef
        this.$nextTick(() => {
          state ? audio.play() : audio.pause()
        })
      },
      currentSong (newVal, oldVal) {
        if (!newVal.id || (newVal.id === oldVal.id)) {
          return
        }
        this.currentTime = 0
        // DOM 更新了
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$refs.audioRef.play()
        }, 1000)
      },
      musicVolume (newVal, oldVal) {
        this.$refs.audioRef.volume = newVal
      }
    }
  }
</script>
<style scoped>
  @import "style.css";
</style>
