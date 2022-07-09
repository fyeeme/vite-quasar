import { RouteRecordRaw } from '@vue-router'
import { defineStore } from 'pinia'

export const useRouteInstances = defineStore({
  id: 'route',
  state: () => ({
    routes: [] as RouteRecordRaw[],
  }),
  actions: {
    setRoutes(routes: RouteRecordRaw[]) {
      this.routes = routes
    },
  },
})
