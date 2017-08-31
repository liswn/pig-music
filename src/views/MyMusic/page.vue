<template>
  <div>
    <mu-list>
      <mu-list-item title="本地音乐">
        <mu-icon slot="left" value="get_app"/>
        <span slot="right">10</span>
      </mu-list-item>
      <mu-list-item title="最近播放">
        <mu-icon slot="left" value="query_builder"/>
        <span slot="right">10</span>
      </mu-list-item>
      <mu-list-item title="我的收藏">
        <mu-icon slot="left" value="book"/>
        <span slot="right">10</span>
      </mu-list-item>
      <mu-list-item title="听歌排行">
        <mu-icon slot="left" value="line_weight" color="#"/>
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-divider shallowInset/>
      <mu-sub-header >我创建的歌单 (2)</mu-sub-header>
      <mu-divider shallowInset/>
      <mu-list-item title="我喜欢的音乐" describeText="10000首" to="/myMusic/songlist/1">
        <mu-avatar src="https://img3.doubanio.com/icon/ul148010139-2.jpg" slot="leftAvatar"/>
      </mu-list-item>
      <mu-list-item title="精品歌单倾心推荐，给最懂音乐的你" describeText="101首" to="/myMusic/songlist/2">
        <mu-avatar src="https://img3.doubanio.com/icon/ul148010139-2.jpg" slot="leftAvatar"/>
      </mu-list-item>
    </mu-list>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
<style>
</style>
