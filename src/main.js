import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/styles.scss";
import store from "./store";

// Install bootstrap
// npm install bootstrap
// npm i -D sass-loader@10 sass

createApp(App).use(store).use(router).mount("#app");
