import { createApp } from 'vue'
import App from './App.vue'

import 'uno.css'
import '@unocss/reset/tailwind.css'

const app = createApp(App)

// install all modules under `modules/`
Object.values(import.meta.globEager('./plugins/*.ts')).forEach((plugin) => plugin.install?.(app))

app.mount('#app')
