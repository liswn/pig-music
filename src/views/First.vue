<template>
    <div>
      <div
        class="view_container">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        bottomNav: '',
        bottomNavColor: this.$route.path.replace('/', '')
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
      },
      InItBottomNav () {
        const that = this
        var path = this.$route.path.replace('/', '')
        var listIndex = path.indexOf('/')
        if (listIndex > 0) {
          that.bottomNav = path.substr(0, listIndex)
        } else {
          that.bottomNav = path
        }
      }
    },
    mounted () {
      this.InItBottomNav()
    }
  }
</script>
<style scoped>
  .view_container
  {
    padding-top: 66px;
    padding-bottom: 66px;
  }
</style>
