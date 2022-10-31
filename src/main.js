import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './utils/RoutingGuard'
import videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css

const app = createApp(App)
    app.use(router)
    app.use(videoPlay)
    app.mount('#app')
