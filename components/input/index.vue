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

<script lang="ts">
export default {
  name: "liiInput",
};
</script>
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
    ["lii-input-" + props.size]: true,
  };
  return iptClass;
});
const input = (e: any): void => {
  emits("update:modelValue", e.target.value);
};
</script>
<style lang="less" scoped>
@import url("../../common/styles/base.less");
.lii-input {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 250px;
  margin: 3px;
  cursor: pointer;
  &:hover {
    border-color: @info;
  }
  &:focus {
    border-color: @primary;
  }
  &::placeholder {
    font-size: 14px;
    color: #aeafb3;
  }
  &.lii-input-big {
    width: 300px;
    height: 48px;
    padding: 0 18px;
    font-size: 16.8px;
    &::placeholder {
      font-size: 16.8px;
    }
  }
  &.lii-input-mid {
    transform: scale(1);
  }
  &.lii-input-small {
    width: 175px;
    height: 28px;
    line-height: 20px;
    padding: 0 10.5px;
    font-size: 9.8px;

    &::placeholder {
      font-size: 9.8px;
    }
  }
}
.lii-input--disabled {
  &:hover {
    border-color: #dcdfe6;
  }
  cursor: no-drop;
}
</style>
