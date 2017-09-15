import * as types from './mutations-type.js'

const mutations = {
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_CURRENT_SONG_INDEX] (state, flag) {
    state.currentSongIndex = flag
  },
  [types.SET_CURRENT_TIME_AUTO] (state, flag) {
    state.currentTimeAuto = flag
  },
  [types.SET_VOLUME] (state, flag) {
    state.volume = flag
  }
}
export default mutations
