// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // vuex
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import FastClick from 'fastclick'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false

// MuseUi 库
Vue.use(MuseUI)
// 字体图标
Vue.component('icon', Icon)

// vueg 转场动画
const vuegOptions = {
  duration: 0.3,
  shadow: false
}
Vue.use(vueg, router, vuegOptions)

/* 解决手机端300ms点击延迟 */
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
