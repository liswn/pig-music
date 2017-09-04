import songList from '../../data/songList'
// 播放模式
const playMode = {
  sequence: 0, // 顺序播放
  loop: 1, // 单曲循环
  random: 2 // 随机播放
}
const state = {
  // 播放器状态
  playing: false,
  // 播放器全屏模式
  fullScreen: false,
  // 播放模式
  mode: playMode.sequence,
  // 播放列表
  playlist: songList,
  // 当前歌曲索引
  currentSongIndex: -1,
  currentTimeAuto: true
}

export default state
