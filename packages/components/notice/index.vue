<template>
  <div class="lii_notification right" v-if="show">
    <div class="lii_notification_group">
      <h3 class="lii_notification_title" v-text="title"></h3>
      <div class="lii_notification_content">
        <p v-html="message"></p>
      </div>
      <div class="lii_notification_closeBtn" @click.stop="hide"></div>
    </div>
  </div>
</template>

<script lang="ts">
// mounted() {
//   this.isShow = true;
//   if (this.duration !== 0) {
//     setTimeout(() => {
//       this.isShow = false;
//     }, this.duration);
//   }
// },
// methods: {
//   hide() {
//     this.isShow = false;
//   },
// },
</script>

<script lang="ts" setup>
import { ref } from "vue";
// interface Props {
//   title: string;
//   message: string;
//   duration: number;
//   isShow: boolean;
// }
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
// setTimeout(() => {
//   show.value = false;
// }, props.duration);
const hide = () => {
  show.value = false;
};
</script>
