import liiInput from "./index.vue";

liiInput.install = (app: any) => {
  app.component(liiInput.name, liiInput);
};

export default liiInput;
