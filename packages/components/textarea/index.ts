import "@/packages/theme-chalk/components/textarea.less";
import liiTextarea from './index.vue';

liiTextarea.install = (app:any) => {
    app.component('liiTextarea', liiTextarea)
}

export default liiTextarea;