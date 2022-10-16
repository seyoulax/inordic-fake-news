import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//импортируем роутер
import router from './utils/router'
//после создания говорим что используем сам роутер
createApp(App).use(router).mount('#app')
