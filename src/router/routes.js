export default [
  {
    path: '/discover',
    name: 'discover',
    component: (resolve) => require(['../views/Discover/page.vue'], resolve)
  },
  {
    path: '/',
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
