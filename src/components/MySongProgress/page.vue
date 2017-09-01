<template>
    <div style="height: 30px;box-sizing: border-box" @click.shop="progressClick">
      <div ref="barRef" class="progress-bg">
        <div ref="progressRef" class="progress_played">
        </div>
        <div ref="btnRef" class="progress_touch_ball_container"
             @touchstart.prevent="progressTouchstart"
             @touchmove.prevent="progressTouchmove"
             @touchend="progressTouchend"
        >
          <div class="progress_touch_ball"></div>
        </div>
      </div>
    </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  const BTN_WIDTH = 0
  export default {
    props: {
      // 当前播放进度 [0, 1]
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
        setCurrentTimeAuto: 'player/SET_CURRENT_TIME_AUTO'
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
      // 拖动小球改变播放进度，小球滑动开始位置
      progressTouchstart (e) {
        this.touch.init = true
        // 开始滑动的位置
        this.touch.startX = e.touches[0].pageX
        // 当前偏移
        this.touch.left = this.$refs.progressRef.clientWidth
        // 禁止当前播放时间变化
        this.setCurrentTimeAuto(false)
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
        this.$emit('currentTimeChange', progressWidth / barWidth)
      },
      // 拖动小球改变播放进度，小球滑动结束
      progressTouchend () {
        this.touch.init = false
        this._percentChange()
        this.setCurrentTimeAuto(true)
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
        this.$emit('percentChange', newPercent)
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
    left: 0;
    transform: translateY(-50%);
    height: 2px;
    width: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: rgba(255,255,255,.5);
  }
  .progress_played
  {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #7e57c2;
    border-radius: 20px;
  }
  .progress_touch_ball_container
  {
    position: absolute;
    left: -20px;
    top: 50%;
    margin-top: -20px;
    height: 40px;
    width: 40px;
  }
  .progress_touch_ball
  {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 20px;
    width: 20px;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 50%;
    transform: translate(-50%,-50%);
  }

  .progress_touch_ball::after
  {
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    content: '';
    width: 3px;
    height: 3px;
    background-color: #7e57c2;
    border-radius: 50%;
    transform: translate(-50%,-50%);
  }
</style>
