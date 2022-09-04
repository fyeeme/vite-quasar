import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(generatedRoutes),
})

router.beforeEach((_to, _from, next) => {
  next()
})
export default router
