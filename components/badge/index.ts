import liiBadge from "./index.vue";
liiBadge.install = (app: any): void => {
  app.component(liiBadge.name, liiBadge);
};

export default liiBadge;
