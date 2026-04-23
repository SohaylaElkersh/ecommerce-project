import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/styles/main.scss'
import router from '@/router'
import { createPinia } from 'pinia'
import axios from 'axios'

const app = createApp(App)

app.config.globalProperties.$http = axios

app.use(createPinia())
app.use(router)

app.mount('#app')