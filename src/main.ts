import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import LiiUi from "../index";

const app: any = createApp(App);
app.use(LiiUi);
app.mount("#app");
