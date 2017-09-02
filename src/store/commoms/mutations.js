import * as types from './mutations-type.js'

const mutations = {
  [types.SET_TOP_NAV] (state, flag) {
    state.topNav = flag
  }
}
export default mutations
