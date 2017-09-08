import Vue from 'vue'
import Vuex from 'vuex'
import moduleCommoms from './commoms/module'
import moduleDiscover from './discover/module'
import modulePlayer from './player/module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    commoms: moduleCommoms,
    discover: moduleDiscover,
    player: modulePlayer
  }
})

export default store
