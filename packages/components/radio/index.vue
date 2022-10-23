<template>
  <div class="lii-radio">
    <div
      class="lii-radio__item"
      v-for="(item, index) in props.options"
      :key="index"
      @click="change(item, index)"
      :class="[
        { 'lii-radio__item--disabled': item.disabled },
        itemRadioState,
        { active: hasChecked === index && fontColor },
      ]"
    >
      <span :class="{ active: hasChecked === index }"></span>
      {{ item[filedLabel] }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref, Ref } from "vue";
const emits = defineEmits(["change"]);

const props: Readonly<any> = defineProps({
  options: {
    type: Array as any,
    default: () => [],
  },
  inline: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: "mid",
  },
  filedLabel: {
    type: String,
    default: "label",
  },
  filedValue: {
    type: String,
    default: "value",
  },
  // customColor: {
  //   type: String,
  //   default: "#409eff",
  // },
  fontColor: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Number,
    default: -1,
  },
});

const hasChecked: Ref<number> = ref(props.checked);
if (hasChecked.value > props.options.length + 1) {
  hasChecked.value = 0;
}
const itemRadioState: ComputedRef = computed(() => {
  return {
    "lii-radio__item--inline": props.inline,
    [`lii-radio__item--${props.size}`]: true,
  };
});
const change = (item: any, index: number): void => {
  if (!item.disabled) {
    hasChecked.value = index;
    emits("change", item);
  }
};
</script>
