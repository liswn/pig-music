<template>
    <div>
      <div class="view_container">
        <router-view></router-view>
      </div>
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange" style="position: fixed;bottom: 0">
        <mu-bottom-nav-item value="" title="发现音乐" icon="hearing" to="/"/>
        <mu-bottom-nav-item value="myMusic" title="我的音乐" icon="music_note" to="/myMusic"/>
        <mu-bottom-nav-item value="friends" title="朋友" icon="supervisor_account" to="/friends"/>
        <mu-bottom-nav-item value="myself" title="自己" icon="accessibility"/>
      </mu-bottom-nav>
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
    height: 100%;
    overflow: scroll;
    padding-bottom: 66px;
    -webkit-overflow-scrolling: touch;
  }
</style>
