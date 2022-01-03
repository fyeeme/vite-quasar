/**
 * use vue-i18n-next and  vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 */

import { createI18n } from 'vue-i18n'
const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('/src/locales/*.ts')).map(([key, value]) => {
    return [key.slice(13, -3), value.default]
  })
)

export const install = (app: any) => {
  const i18n = createI18n({
    locale: 'en',
    messages,
  })
  app.use(i18n)
}
