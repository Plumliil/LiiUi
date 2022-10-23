import "@/packages/theme-chalk/components/radio.less";
import liiRadio from "./index.vue";

liiRadio.install = (app: any) => {
  app.component("liiRadio", liiRadio);
};

export default liiRadio;
