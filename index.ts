import {components} from './components'
import {directives} from './directives'
import {plugins} from './plugins/'

console.log(components);


const install = (app: any): void => {
  components.forEach((component:any) => {
    app.use(component);
  });
  directives.forEach((directive:any) => {});
  plugins.forEach((plugin:any) => {});

};
const LiiUi = {
  install,
};

export default LiiUi
