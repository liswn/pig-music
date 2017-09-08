import axios from 'axios'

export const getNewSongsRank = function ({commit, state}) {
  axios({
    method: 'get',
    url: 'http://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(function (res) {
    console.log(res)
  }).catch(function (error) {
    console.log(error)
  })
}

