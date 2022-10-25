<template>
  <div :class="areaClass">
    <textarea
      name=""
      id=""
      @focus="focus"
      @blur="blur"
      @input="input"
      :cols="cols"
      :rows="rows"
      :resize="resize"
      v-model="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :style="tStyle"
    ></textarea>
    <div class="max-length-line" v-if="maxlength">
      {{ fontCount }}/{{ maxlength }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps({
  modelValue: String,
  placeholder: String,
  rows: {
    type: Number,
    default: 6,
  },
  cols: {
    type: Number,
    default: 40,
  },
  resize: {
    type: Boolean,
    default: true,
  },
  disabled: Boolean,
  readonly: Boolean,
  maxlength: {
    type: Number,
    default: 10,
  },
});
const emit = defineEmits(["update:modelValue", "focus", "blur"]);
const areaClass = computed(() => {
  return {
    "lii-textarea": true,
    "lii-textarea--disabled": props.disabled,
  };
});
const fontCount = ref<number>(0);
const tStyle: any = computed(() => {
  return {
    resize: props.resize ? "auto" : "none",
  };
});
const input = (e): void => {
  fontCount.value = e.target.value.length;
  if (fontCount.value > props.maxlength) {
    fontCount.value = props.maxlength;
  }

  console.log(e.target.value);
  emit("update:modelValue", e.target.value);
};
const focus = (e): void => {
  emit("focus", e);
};
const blur = (e): void => {
  emit("blur", e);
};
</script>
<style lang="less"></style>
