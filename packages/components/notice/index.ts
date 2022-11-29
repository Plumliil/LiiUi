// import { createVNode, render } from "vue";
import Notice from "./index.vue";
import "@/packages/theme-chalk/components/notice.less";
import { createVNode, render } from "vue";
// import { defineComponent } from "vue";
// import liiNotice from "./index.vue";
// liiNotice.install = (app: any) => {
//   app.component("liiNotice", liiNotice);
// };

let node = document.createElement("span");
node.style.opacity = "0";
let mountNode: Element | ShadowRoot = node;
export default (options: any) => {
  const duration = options.duration || 2000;
  if (mountNode == node) {
    document.body.removeChild(mountNode);
    mountNode = node;
  }
  // 将options参数传入,将notice组件转化为虚拟dom,赋值给app
  const app = createVNode(Notice, {
    ...options,
    duration,
    isShow: true,
  });
  let timer = setTimeout(() => {
    document.body.removeChild(mountNode);
    mountNode = node;
    clearTimeout(timer);
  }, duration);
  mountNode = document.createElement("div");
  render(app, mountNode);
  document.appendChild(mountNode);
};

// export default liiNotice;

// interface IOptions{

// }

// const app=createVNode(Notice,{

// })
// // const NoticeContructor = App.extend(Notice);
// export default function notice(options: any) {
//   // 1.实例化
//   const instacne = new NoticeContructor({
//     data: options,
//   });
//   // 2.手动挂载
//   instacne.$mount();
//   // 挂载到body
//   document.body.appendChild(instacne.$el);
//   let topNum: NodeListOf<Element> =
//     document.querySelectorAll(".lii_notification");
//   console.log(topNum);
//   console.log(topNum.length + 1);
//   topNum[topNum.length - 1].style.top = 120 * topNum.length + 20 + "px";
//   return instacne;
// }
