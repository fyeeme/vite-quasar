// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory, RouteRecordRaw } from '@vue-router'
import { LocalStorage } from 'quasar'
// import { useRouteInstances } from './stores/route'

// const useRoute = useRouteInstances()
// import generatedRoutes from '~pages'
// import { setupLayouts } from 'virtual:generated-layouts'

// const routes: RouteRecordRaw[] = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (generatedRoutes: RouteRecordRaw[]) => {
    // routes.find((r) => r.name === '/')!.meta = {}
    const routes: RouteRecordRaw[] = [
      {
        path: '/',
        component: () => import('~/layouts/default.vue'),
        children: generatedRoutes,
      },
    ]
    console.log(13, generatedRoutes)
    LocalStorage.set('routes', generatedRoutes)
    return generatedRoutes
  },
})

router.beforeEach((_to, _from, next) => {
  next()
})
export default router
