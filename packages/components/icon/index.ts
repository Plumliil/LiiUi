import "@/packages/theme-chalk/components/icon.less";
import liiIcon from './index.vue';

liiIcon.install = (app:any) => {
    app.component('liiIcon', liiIcon)
}

export default liiIcon;