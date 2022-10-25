import "@/packages/theme-chalk/components/select.less";
import liiSelect from "./index.vue";
liiSelect.install = (app: any) => {
  app.component("liiSelect", liiSelect);
};

export default liiSelect;
