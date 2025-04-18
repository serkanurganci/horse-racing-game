// main.js
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import i18n from "./i18n";
import "./style.css";

const app = createApp(App);

app.use(store);
app.use(i18n);
app.mount("#app");
