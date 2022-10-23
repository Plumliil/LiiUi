import "@/packages/theme-chalk/components/badge.less";
import liiBadge from "./index.vue";

liiBadge.install = (app: any): void => {
  app.component('liiBadge', liiBadge);
};

export default liiBadge;
