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
  fullScreen: true,
  // 播放模式
  mode: playMode.sequence,
  // 当前歌曲
  currentSong: ''
}

export default state
