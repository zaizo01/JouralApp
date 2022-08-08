import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/styles.scss";

// Install bootstrap
// npm install bootstrap
// npm i -D sass-loader@10 sass

createApp(App).use(router).mount("#app");
