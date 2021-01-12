import { createApp } from "vue";

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from "./App.vue";
import router from "./router";
import store from "./store";

const Axios = axios.create({
  baseURL: 'http://127.0.0.1:9999',
});

const app = createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .use(VueAxios, Axios)
  .mount("#app");
