import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // Import router

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);
app.use(router); // Sử dụng router
app.mount('#app');