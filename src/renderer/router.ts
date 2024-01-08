import * as VueRouter from 'vue-router'

const routes = [
  { path: '/', redirect: '/main/HelloWorld' },
  {
    path: '/main',
    component: () => import('./windows/main.vue'),
    children: [
      { path: 'HelloWorld', component: () => import('./windows/main/HelloWorld.vue') },
    ],
  },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})
