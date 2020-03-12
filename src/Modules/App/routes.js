export default [
  {
    name: 'AppLogin',
    path: '/login',
    component: () => import('./AppLogin'),
    meta: {
      title: 'Giris',
      requireAuth: false
    }
  },
  {
    name: 'AppIndex',
    path: '/',
    component: () => import('./AppIndex'),
    meta: {
      title: 'Panel',
      requireAuth: true
    },
    children: [
      {
        path: '/user',
        name: 'UserIndex',
        components: {
          panel: () => import('../User/UserIndex')
        }
      }
    ]
  }
]
