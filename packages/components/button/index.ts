import "@/packages/theme-chalk/components/button.less";
import liiButton from './index.vue';

liiButton.install = (app:any) => {
    app.component('liiButton', liiButton)
}

export default liiButton;