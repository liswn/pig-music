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
        name: '',
        component: (resolve) => require(['../views/MyMusic/page.vue'], resolve)
      },
      {
        path: '/friends',
        name: '',
        component: (resolve) => require(['../views/Friends/page.vue'], resolve)
      }
    ]
  }
]
