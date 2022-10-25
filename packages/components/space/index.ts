import liiSpace from "./index.vue";

liiSpace.install = (app: any) => {
  app.component('liiSpace', liiSpace);
};

export default liiSpace;
