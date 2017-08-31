export default [
  {
    path: '',
    component: (resolve) => require(['../views/First.vue'], resolve),
    children: [
      {
        path: '/',
        name: '',
        component: (resolve) => require(['../views/Discover/page.vue'], resolve)
      },
      {
        path: '/myMusic',
        name: 'myMusic',
        component: (resolve) => require(['../views/SongList/page.vue'], resolve)
      },
      {
        path: '/friends',
        name: 'friends',
        component: (resolve) => require(['../views/Friends/page.vue'], resolve)
      },
      {
        path: '/myMusic/songlist/:id',
        name: 'songlist',
        component: (resolve) => require(['../views/SongList/page.vue'], resolve)
      }
    ]
  }
]
