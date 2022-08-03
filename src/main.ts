import { createApp } from 'vue'
import App from './App.vue'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import 'src/styles/main.css'

const app = createApp(App)
const modules = import.meta.glob<any>('/src/modules/*.ts', { eager: true })

// install all modules under `modules/`
Object.values(modules).forEach((module) => module.install?.(app))

app.mount('#app')
