import Vue from 'vue'
import VueRouter from 'vue-router'
import AppRoutes from '../Modules/App/routes'
import ArticleRoutes from '../Modules/Article/routes'

Vue.use(VueRouter)

AppRoutes[0].children.push(...ArticleRoutes)

const routes = [
  ...AppRoutes,
  {
    path: '/about',
    name: 'About',
    components: {
      panel: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. /* webpackChunkName: "about" */
    /* component: () =>
      import( '../views/About.vue') */
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
