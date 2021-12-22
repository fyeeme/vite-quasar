import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes: RouteRecordRaw[] = setupLayouts(generatedRoutes)

// import mainLayout from 'src/layouts/default.vue'
// import blankLayout from 'src/layouts/blank.vue'

// const routes: RouteRecordRaw[] = [
// {
//   path: '/',
//   component: mainLayout,
//   children: generatedRoutes,
// },
// {
//   path: '/',
//   component: blankLayout,
//   children: [
//     {
//       name: 'all',
//       path: ':all(.*)*',
//       component: () => import('src/pages/blank/404.vue'),
//     },
//     {
//       name: 'login',
//       path: 'login',
//       component: () => import('src/pages/blank/login.vue'),
//     },
//     {
//       name: 'register',
//       path: 'register',
//       component: () => import('src/pages/blank/register.vue'),
//     },
//   ],
// },
// ]
console.log(routes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  console.log('router beforeEach', router.currentRoute.value.fullPath)
  next()
})
export default router
