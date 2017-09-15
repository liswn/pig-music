
export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const currentSongIndex = state => state.currentSongIndex

export const playlist = (state) => state.playlist

export const currentSong = (state) => state.playlist[state.currentSongIndex] || {}

export const mode = (state) => state.mode

export const currentTimeAuto = (state) => state.currentTimeAuto

export const volume = (state) => state.volume
