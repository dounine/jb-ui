import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Operator from '../views/Operator.vue'
import Handler from '../views/handle/Handler.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

  {
    path: '/operator/:platform',
    name: 'Operator',
    component: Operator,
    children: [
      {
        path: ':symbol',
        name: 'Handler',
        component: Handler
      }
    ]
  },
  { path: '', redirect: "/operator/virtual" }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
