import { createSSRApp } from "vue";
// 1. 引入你需要的组件
import Vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from "./App.vue";
export function createApp() {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  const app = createSSRApp(App);
  app.use(Vant).use(pinia);
  return {
    app,
  };
}
