import { createApp } from 'vue';
import App from './App.vue';
import './assets';
import router from './routers';
import store from './stores';
import i18n from './i18n';
const app = createApp(App);
app.use(store).use(router).use(i18n).mount('#app');
