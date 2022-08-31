import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import './assets/scss/main.scss';
import './index.css';
import 'atropos/atropos.min.css';

const app = createApp(App)
app
    .use(store)
    .use(router)
    .mount('#app')
