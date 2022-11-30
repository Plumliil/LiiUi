// import { createVNode, render } from "vue";
import Notice from "./index.vue";
import "@/packages/theme-chalk/components/notice.less";
import { createVNode, render } from "vue";

function sleep(delay: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, delay)
  );
}
let node: Element | HTMLDivElement | null = null;
const liiNotice = (options: any) => {
  const duration = options.duration || 2000;
  // 将options参数传入,将notice组件转化为虚拟dom,赋值给app
  const app = createVNode(Notice, {
    ...options,
    duration,
    isShow: true,
  });
  node = document.createElement("div");
  node.className = "liiNotice";

  render(app, node);

  // let topNum = document.querySelectorAll(
  //   ".liiNotice"
  // ) as NodeListOf<HTMLElement>;
  // if (topNum.length - 1 >= 0) {
  //   console.log(topNum);
    
  //   topNum[topNum.length - 1].style.top = 120 * topNum.length + 20 + "px";
  //   topNum[topNum.length - 1].style.color = "pink";
  //   topNum[topNum.length - 1].style.position = "fixed";
  //   console.log(120 * topNum.length + 20);
  // }
  // console.log(topNum[topNum.length - 1]);
  document.body.appendChild(node);
  // if (topNum.length - 1 > 0) {
  //   console.log(topNum[length-1].style);
    
  //   topNum[topNum.length - 1].style.top = 120 * topNum.length + 20 + "px";
  //   topNum[topNum.length - 1].style.color = "pink";
  //   console.log(120 * topNum.length + 20);
  // }
};

export default liiNotice;
