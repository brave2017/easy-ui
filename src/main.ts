import "@/assets/icons/iconfont/iconfont.js";
import RenDeptTree from "@/components/easy-dept-tree";
import RenRadioGroup from "@/components/easy-radio-group";
import RenRegionTree from "@/components/easy-region-tree";
import RenSelect from "@/components/easy-select";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/display.css";
import "element-plus/theme-chalk/index.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import * as ElementPlusIcons from "@element-plus/icons-vue";
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import axios from "axios";

const app = createApp(App);
Object.keys(ElementPlusIcons).forEach((iconName) => {
  app.component(iconName, ElementPlusIcons[iconName as keyof typeof ElementPlusIcons]);
});

app
  .use(createPinia())
  .use(router)
  .use(RenRadioGroup)
  .use(RenSelect)
  .use(RenDeptTree)
  .use(RenRegionTree)
  .use(ElementPlus, { size: "default", locale:zhCn })
  .mount("#app");

window.axios = axios;
