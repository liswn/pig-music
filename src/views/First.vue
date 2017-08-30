<template>
    <div>
      <router-view></router-view>
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange" style="position: fixed;bottom: 0">
        <mu-bottom-nav-item value="DiscoverMusic" title="发现音乐" icon="hearing" to="/"/>
        <mu-bottom-nav-item value="myMusic" title="我的音乐" icon="music_note" to="/myMusic"/>
        <mu-bottom-nav-item value="friends" title="朋友" icon="books" to="/friends"/>
        <mu-bottom-nav-item value="myself" title="自己" icon="accessibility"/>
      </mu-bottom-nav>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        bottomNav: this.$route.path.replace('/', ''),
        bottomNavColor: this.$route.path.replace('/', '')
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
      }
    },
    mounted () {
      console.log(this.$route.path.replace('/', ''))
    }
  }
</script>
