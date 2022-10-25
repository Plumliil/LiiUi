<template>
  <input
    :class="liiInputClass"
    type="text"
    :value="modelValue"
    @input="input"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  disabled: Boolean,
  modelValue: [String, Number],
  placeholder: {
    type: String,
    default: "请输入...",
  },
  size: {
    type: String,
    default: "mid",
  },
});
interface liiInputType {
  "lii-input": boolean;
  "lii-input--disabled": boolean;
  [x: string]: boolean;
}
const emits = defineEmits(["update:modelValue"]);
const liiInputClass = computed(() => {
  let iptClass: liiInputType = {
    "lii-input": true,
    "lii-input--disabled": props.disabled,
    ["lii-input--" + props.size]: true,
  };
  return iptClass;
});
const input = (e: any): void => {
  emits("update:modelValue", e.target.value);
};
</script>

<!-- <style lang="less">
@import url('@liiui/packages/theme-chalk/components/input.less');
</style> -->
