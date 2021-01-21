import { createApp } from "vue";

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import VueAxios from 'vue-axios';

import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "./request";

const app = createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .use(VueAxios, Axios)
  .mount("#app");
