import Vue from 'vue'
import Vuex from 'vuex'
import modulePlayer from './player/module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    player: modulePlayer
  }
})

export default store
