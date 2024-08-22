import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import { MotionPlugin } from '@vueuse/motion'
import router from './router';

const app = createApp(App);
app.use(ArcoVue);
app.use(MotionPlugin)
app.use(router);
app.mount('#app');