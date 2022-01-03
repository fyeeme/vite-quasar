/**
 * use vue-i18n-next and  vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 */

import { createI18n } from 'vue-i18n'
const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('/src/locales/*.ts')).map(([key, value]) => {
    console.log(key.slice(13, -4), value.default)
    return [key.slice(13, -3), value.default]
  })
)

export const install = (app: any) => {
  console.log(10, messages)
  const i18n = createI18n({
    locale: 'en',
    messages,
  })
  app.use(i18n)
}
// const msgs: any = { zh: {}, en: {} }
// Object.entries(import.meta.globEager('/src/locales/**/*.yml')).forEach((item) => {
//   const [key, value] = item
//   console.log(item, key.slice(13, 15), value.default)
//   msgs[key.slice(13, 15)] = { ...msgs[key.slice(13, 15)], ...value.default }
// })

// console.log(msgs)

// const msg = Object.fromEntries(
//   Object.entries(import.meta.globEager('/src/locales/*.ts')).map(([key, value]) => {
//     return [key.slice(13, -4), value.default]
//   })
// )

// console.log(36, msg)
