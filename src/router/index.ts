import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/demo'
  },
  {
    path: '/demo',
    name: 'Demo',
    component: (): Promise<any> => import('@/views/demo/Index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: (): Promise<any> => import('@/views/home/Index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
