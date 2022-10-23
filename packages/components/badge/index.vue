<template>
  <div class="lii-badge">
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
