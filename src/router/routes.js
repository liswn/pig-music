export default [
  {
    path: '/',
    name: 'discover',
    component: (resolve) => require(['../views/Discover/page.vue'], resolve)
  },
  {
    path: '/myMusic',
    name: 'myMusic',
    component: (resolve) => require(['../views/SongList/page.vue'], resolve)
  },
  {
    path: '/songer',
    name: 'songer',
    component: (resolve) => require(['../views/Songer/page.vue'], resolve)
  },
  {
    path: '/myMusic/songlist/:id',
    name: 'songlist',
    component: (resolve) => require(['../views/SongList/page.vue'], resolve)
  }
]
