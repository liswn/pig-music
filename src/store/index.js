import Vue from 'vue'
import Vuex from 'vuex'
import moduleCommoms from './commoms/module'
import modulePlayer from './player/module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    commoms: moduleCommoms,
    player: modulePlayer
  }
})

export default store
