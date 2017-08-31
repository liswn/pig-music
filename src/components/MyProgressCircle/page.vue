<template>
    <div>
      <div class="my-progress-circle">
        <svg :width="radius" :height="radius" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" style="position:absolute;left: 50%; top: 50%;transform: translate(-50%,-50%)">
          <circle class="progress-background" cx="50" cy="50" r="50" fill="transparent"/>
          <circle class="progress-bar" cx="50" cy="50" r="50" fill="transparent" :stroke-dasharray="dasharray" :stroke-dashoffset="dashoffset"/>
        </svg>
      <slot></slot>
    </div>
    </div>
</template>
<script>
  export default {
    components: {},
    data () {
      return {
        dasharray: Math.PI * 100
      }
    },
    props: {
      percent: {
        type: Number,
        default: 0
      },
      radius: {
        type: Number,
        default: 32
      }
    },
    watch: {},
    filters: {},
    methods: {},
    computed: {
      dashoffset () {
        return (1 - this.percent) * this.dasharray
      }
    },
    created () {},
    mounted () {},
    destroyed () {}
  }
</script>

<style scoped>
  .my-progress-circle {
    position: relative;
    height: 60px;
    width: 50px;
  }
  .my-progress-circle circle {
    stroke-width: 8px;
    transform-origin: center;
  }
  .my-progress-circle circle,
  .my-progress-circle circle.progress-background
  {
    transform: scale(0.9);
    stroke: #f3f3f3;
  }
  .my-progress-circle circle,
  .my-progress-circle circle.progress-bar
  {
    transform: scale(0.9) rotate(-90deg);
    stroke: #7e57c2
  }
</style>
