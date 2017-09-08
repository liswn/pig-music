import state from './state.js'
import mutations from './mutations.js'
import * as actions from './actions.js'
import * as getters from './getters.js'

const discover = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default discover
