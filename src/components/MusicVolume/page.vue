<template>
  <div style="height: 30px;box-sizing: border-box;position: relative;margin: 0 60px 0 90px;z-index: 99999;" @click.stop="progressClick">
    <mu-icon :value="percent ? 'volume_down': 'volume_mute'" :class="{volumeMute: percent}" class="volume_icon" @click.stop="closeMusic"></mu-icon>
    <div ref="barRef" class="progress-bg">
      <div ref="progressRef" class="progress_played" :style="{width: percent * 100 +'%'}" >
      </div>
      <div ref="btnRef" class="progress_touch_ball_container"
           @touchstart.prevent="progressTouchstart"
           @touchmove.prevent="progressTouchmove"
           @touchend="progressTouchend"
           :style="{transform: 'translate3d(' + percent*100 + '%, 0, 0)'}"
      >
      </div>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  const BTN_WIDTH = 0
  export default {
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    watch: {
      // 播放进度
      percent (newVal) {
        // 拖动的时候不要 watch
        if (newVal >= 0 && !this.touch.init) {
          let barWidth = this.$refs.barRef.clientWidth - BTN_WIDTH
          let offsetWidth = newVal * barWidth
          this._move(offsetWidth)
        }
      }
    },
    methods: {
      ...mapMutations({
        setVolume: 'player/SET_VOLUME'
      }),
      // 点击进度条改变播放进度
      progressClick (e) {
        // 返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离。
        let rectLeft = this.$refs.barRef.getBoundingClientRect().left
        let offsetWidth = e.pageX - rectLeft
        // this._move(e.offsetX) // 这样的话，点小球的时候数据不对，弃
        this._move(offsetWidth)
        this._percentChange()
      },
      // 拖动小球改变声音，小球滑动开始位置
      progressTouchstart (e) {
        this.touch.init = true
        // 开始滑动的位置
        this.touch.startX = e.touches[0].pageX
        // 当前偏移
        this.touch.left = this.$refs.progressRef.clientWidth
      },
      // 拖动小球改变播放进度，小球滑动过程中
      progressTouchmove (e) {
        if (!this.touch.init) {
          return
        }
        // 滑动的差值
        let deltaX = e.touches[0].pageX - this.touch.startX
        // 进度条的差值，大于0，小于总长度
        let offsetWidth = Math.min(this.$refs.barRef.clientWidth - BTN_WIDTH, Math.max(0, this.touch.left + deltaX))
        this._move(offsetWidth)
        let barWidth = this.$refs.barRef.clientWidth
        let progressWidth = this.$refs.progressRef.clientWidth
        this.$emit('volumeChange', progressWidth / barWidth)
      },
      // 拖动小球改变播放进度，小球滑动结束
      progressTouchend () {
        this.touch.init = false
        this._percentChange()
      },
      // 进度条前进 + 小球前进
      _move (offsetWidth) {
        this.$refs.progressRef.style.width = `${offsetWidth}px`
        this.$refs.btnRef.style['webkitTransform'] = `translate3d(${offsetWidth}px, 0, 0)`
        this.$refs.btnRef.style['transform'] = `translate3d(${offsetWidth}px, 0, 0)`
      },
      // events up,改变 props percent,不能(也不应该)直接在子组件中改变 props
      _percentChange () {
        let barWidth = this.$refs.barRef.clientWidth - BTN_WIDTH
        let newPercent = this.$refs.progressRef.clientWidth / barWidth
        this.$emit('volumeChange', newPercent)
      },
      closeMusic () {
        this.$emit('volumeChange', 0)
      }
    },
    created () {
      // 共享 touch 状态
      this.touch = {}
    }
  }
</script>
<style scoped>
  .progress-bg
  {
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    height: 2px;
    width: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: rgba(255,255,255,.2);
  }
  .volume_icon
  {
    position: absolute;
    left: -25px;
    top: 0;
    line-height: 30px;
    color: rgba(255,255,255,.5);
  }
  .volumeMute
  {
    color: rgba(255,255,255,1);
  }
  .progress_played
  {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: rgba(255,255,255,1);
    border-radius: 20px;
  }
  .progress_touch_ball_container
  {
    position: absolute;
    left: -20px;
    top: 50%;
    margin-top: -20px;
    height: 40px;
    width: 100%;
  }
</style>
