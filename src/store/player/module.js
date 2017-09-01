import state from './state.js'
import mutations from './mutations.js'
import * as actions from './actions.js'
import * as getters from './getters.js'

const player = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default player
