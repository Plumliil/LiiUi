import "@/packages/theme-chalk/components/input.less";
import liiInput from "./index.vue";

liiInput.install = (app: any) => {
  app.component("liiInput", liiInput);
};

export default liiInput;
