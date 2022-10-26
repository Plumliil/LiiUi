import "@/packages/theme-chalk/components/drag.less";
import liiDrag from "./index.vue";

liiDrag.install = (app: any) => {
  app.component("liiDrag", liiDrag);
};

export default liiDrag;
