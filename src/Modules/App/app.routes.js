export default [
  {
    name: 'AppLogin',
    path: '/login',
    component: () => import('./AppLogin'),
    meta: {
      title: 'Giris',
      requireAuth: true
    }
  }
]
