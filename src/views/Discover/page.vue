<template>
    <div>
      发现音乐
    </div>
</template>
<script>
  import { mapMutations, mapActions } from 'vuex'
  export default {
    methods: {
      ...mapMutations({
        setTopNav: 'commoms/SET_TOP_NAV'
      }),
      ...mapActions({
        getNewSongsRank: 'discover/getNewSongsRank'
      })
    },
    created () {
      this.setTopNav('discover')
    },
    mounted () {
      this.getNewSongsRank()
    }
  }
</script>
<style>
</style>
