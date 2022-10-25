<template>
  <button type="button" class="lii-button" :class="liiClass">
    <slot>Default</slot>
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
const $attrs = useAttrs();
const props = defineProps({
  type: {
    type: String,
    validator(value: string | null) {
      const typeArr = ["primary", "success", "info", "warning", "danger"];
      return typeArr.includes(value as string);
    },
  },
});
const liiClass = computed(() => {
  let btnClassArr: string[] = ["lii-button--" + props.type];
  if ("size" in $attrs) btnClassArr.push(`lii-button--${$attrs.size}`);
  if ("disabled" in $attrs) btnClassArr.push("is-disabled");
  if ("plain" in $attrs) btnClassArr.push("is-plain");
  if ("round" in $attrs) btnClassArr.push("is-round");
  if ("circle" in $attrs) btnClassArr.push("is-circle");
  return btnClassArr;
});
</script>
