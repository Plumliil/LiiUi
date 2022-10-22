<template>
  <div class="lii-badge" ref="badge">
    <slot>customize default content</slot>
    <span
      v-show="!hidden"
      class="lii-badge__content"
      :class="[isDot && 'is-dot', $slots.default && 'is-fixed']"
      :style="{
        'background-color': color,
        width: validLen(value),
      }"
      >{{ isDot ? "" : validValue(value) }}</span
    >
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
export default {
  name: "liiBadge",
};
</script>
<script setup lang="ts">
const props: any = defineProps({
  value: [String, Number],
  max: Number,
  isDot: Boolean,
  hidden: Boolean,
  color: {
    type: String,
    default: "#f56c6c",
  },
  type: {
    type: String,
    validator(val: string) {
      return (
        ["primary", "success", "warning", "info", "danger"].indexOf(val) > -1
      );
    },
  },
});
const validValue = (value: number | string | undefined) => {
  let res: number | string | undefined;
  if (value && Number(value)) {
    res = value > props.max ? props.max + "+" : value;
  } else {
    res = value;
  }
  return res;
};
const validLen = (value: number | string | undefined) => {
  let res: number | string | undefined;
  let len: number = String(props.value).length;
  len = len > 2 ? len : 2;
  if (value && !props.isDot) {
    res = len * 9 + "px";
    return res;
  } else {
    return "8px";
  }
};
</script>

<style scoped lang="less">
.lii-badge {
  position: relative;
  display: block;
  box-sizing: border-box;
  .lii-badge__content {
    position: absolute;
    background-color: #f56c6c;
    color: aliceblue;
    width: 18px;
    height: 18px;
    right: -7.5px;
    top: -1px;
    font-size: 12px;
    border-radius: 9px;
    line-height: 18px;
    transform: translateX(100%) translateY(-50%);
    &.is-fixed {
      position: absolute;
      right: 10px;
      top: 0;
      transform: translateX(100%) translateY(-50%);
    }
    &.is-dot {
      right: 5px;
      width: 8px;
      height: 8px;
      padding: 0;
    }
  }
}
</style>
