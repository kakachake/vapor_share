import { createApp, vaporInteropPlugin } from 'vue'
import './style.css'
// import App from './demo1.vue'
// import App from './demo2.vue'
import App from './demo3.vue'

createApp(App).use(vaporInteropPlugin)
.mount('#app')
