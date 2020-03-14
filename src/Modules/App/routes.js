import AppIndex from './AppIndex'
import AppLogin from './AppLogin'

export default [
  {
    path: '/',
    name: 'AppIndex',
    component: AppIndex,
    children: [
      {
        name: 'AppLogin',
        path: 'login',
        component: AppLogin,
        meta: {
          title: 'Giris',
          requireAuth: false
        }
      }
    ]
  }
  /* {
    name: 'AppIndex',
    path: '/app',
    component: () => import('./AppIndex'),
    meta: {
      title: 'Panel',
      requireAuth: true
    },
    children: [
      {
        path: 'user',
        name: 'UserIndex',
        components: {
          panel: () => import('../User/UserIndex')
        }
      }
    ]
  } */
]
