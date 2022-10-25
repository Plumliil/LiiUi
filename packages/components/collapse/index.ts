import "@/packages/theme-chalk/components/collapse.less";
import liiCollapse from './index.vue'
import liiCollapseItem from './indexItem.vue'
liiCollapse.install = (app:any) => {
    app.component('liiCollapse', liiCollapse)
    app.component('liiCollapseItem', liiCollapseItem)
}

export default liiCollapse;