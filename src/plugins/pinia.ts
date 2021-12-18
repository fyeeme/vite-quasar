import { createPinia } from 'pinia'

export const install = (app: any) => {
  const pinia = createPinia()
  app.use(pinia)
}
