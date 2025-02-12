import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './routers';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
