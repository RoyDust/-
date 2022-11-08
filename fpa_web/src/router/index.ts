import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../404-notFound.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
