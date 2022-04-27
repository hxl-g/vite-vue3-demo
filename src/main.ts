import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import ElementPlus from 'element-plus'
import { registerStore } from '@/store'
import router from '@/router/index'

import '@/style/variables.scss'
import 'element-plus/dist/index.css'

const app: any = createApp(App) // 创建Vue应用实例app
const pinia: any = createPinia() // 实例化 Pinia

app.use(pinia) // 注册 Pinia
app.use(ElementPlus) // 安装 ElementPlus
app.use(router) // 将路由挂载到Vue实例上
registerStore() // 注册状态库

app.mount('#app')
