import * as VueRouter from 'vue-router'

const routes = [
  { path: '/', redirect: '/main' },
  {
    path: '/main',
    component: () => import('@/pages/index.vue'),
  },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})
