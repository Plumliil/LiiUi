import "@/packages/theme-chalk/components/upload.less";
import liiUpload from './index.vue'
liiUpload.install = (app:any) => {
    app.component('liiUpload', liiUpload)
}

export default liiUpload;