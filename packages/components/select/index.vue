<template>
  <div class="lii-select" v-clickOutside>
    <input
      :value="selectVal"
      type="text"
      :placeholder="placeholder"
      :class="{ 'lii-input--focus': isInputFocus }"
      readonly
      disabled
    />
    <transition name="slide-fade">
      <div class="lii-position-box" v-if="positionShow">
        <li
          v-for="(item, index) in props.options"
          :key="index"
          @click="change(item, index)"
          :class="{
            'item-disabled-li': item.disabled,
            'item-active-li': activeIndex == index,
          }"
          class="item-li"
        >
          {{ item[props.filedLabel] }}
        </li>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "liiSelect",
};
</script>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["change", "update:modelValue"]);
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "请选择",
  },
  options: {
    type: Array,
    default: () => [],
  },
  filedLabel: {
    type: String,
    default: "label",
  },
  filedValue: {
    type: String,
    default: "value",
  },
  modelValue: String,
});
const positionShow = ref(false);
const selectVal = ref(props.modelValue);
const isInputFocus = ref(false);
const activeIndex = ref(-1);
props.options.forEach((item, index) => {
  if (item[props.filedValue] == props.modelValue) {
    selectVal.value = item[props.filedLabel];
    activeIndex.value = index;
  }
});

const vClickOutside = {
  beforeMount(el) {
    let hindler = (e) => {
      if (!props.disabled) {
        if (
          el.contains(e.target) &&
          e.target.className.indexOf("item-li") == -1
        ) {
          positionShow.value = true;
          isInputFocus.value = true;
        } else {
          if (e.target.className.indexOf("item-disabled-li") == -1) {
            positionShow.value = false;
            isInputFocus.value = false;
          }
        }
      }
    };
    document.addEventListener("click", hindler);
  },
};
const change = (item, index) => {
  if (!item.disabled) {
    selectVal.value = item[props.filedLabel];
    positionShow.value = false;
    activeIndex.value = index;
    emit("change", item);
    emit("update:modelValue", item[props.filedLabel]);
  }
};
</script>
