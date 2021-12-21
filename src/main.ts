import { createApp } from 'vue'
import App from './App.vue'

import 'uno.css'

const app = createApp(App)

// install all modules under `modules/`
Object.values(import.meta.globEager('./plugins/*.ts')).map((plugin) => plugin.install?.(app))

app.mount('#app')
