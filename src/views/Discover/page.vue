<template>
    <div>
      发现音乐
    </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    methods: {
      ...mapMutations({
        setTopNav: 'commoms/SET_TOP_NAV'
      })
    },
    created () {
      this.setTopNav('discover')
    }
  }
</script>
<style>
</style>
