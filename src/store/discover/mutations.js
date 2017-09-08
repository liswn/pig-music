import * as types from './mutations-type.js'

const mutations = {
  [types.SET_NEW_SONGS_RANK] (state, flag) {
    state.newSongsRank = flag
  }
}

export default mutations
