<template>
  <div class="lii_notification right" v-if="show" ref="notice">
    <div class="lii_notification_group">
      <h3 class="lii_notification_title" v-text="title"></h3>
      <div class="lii_notification_content">
        <p v-html="message"></p>
      </div>
      <div class="lii_notification_closeBtn" @click.stop="hide"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { time } from "console";
import { onMounted, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    requied: false,
    default: "Notice",
  },
  message: {
    type: String,
    // required: true,
  },
  duration: {
    type: Number,
    required: false,
    default: 2000,
  },
  isShow: {
    type: Boolean,
    required: false,
    default: true,
  },
});
const show = ref(props.isShow);
const notice = ref<null | HTMLElement>(null);
let timer = setTimeout(() => {
  show.value = false;
  let topNum = document.querySelectorAll(
    ".liiNotice"
  ) as NodeListOf<HTMLElement>;

  topNum.forEach((el) => {
    if (el.innerHTML === "<!--v-if-->") {
      document.body.removeChild(el);
      console.log("el.innerHTML-<!--v-if-->", el.innerHTML);
    }
  });
  // topNum[topNum.length - 1].style.top = 120 * topNum.length + 20 + "px";
  clearTimeout(timer);
}, props.duration);
onMounted(() => {});
onMounted(() => {
  let topNum = document.querySelectorAll(
    ".liiNotice"
  ) as NodeListOf<HTMLElement>;
  if (topNum.length > 0) {
    topNum[topNum.length - 1].style.position='fixed'
    topNum[topNum.length - 1].style.top = 120 * topNum.length + 20 + "px";
  }
  console.log(notice.value);
  if (notice.value) {
    notice.value.style.backgroundColor = "red";
  }
});
const hide = () => {
  show.value = false;
};
</script>
