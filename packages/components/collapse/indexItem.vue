<template>
  <div class="lii-collapse-item">
    <div class="header" @click="changeActive(name)">
      <h4 :class="[{ activeB: isShow }, { activeD: true }]">{{ title }}</h4>
    </div>
    <transition name="fade">
      <div :class="[{ wrap: true }]" v-show="isShow">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
const props = defineProps({
  title: {
    type: String,
  },
  name: {
    type: [String, Number],
  },
});
const PARENT_PROVIDE: string = "parentProvide";
const parentProps: any = inject(PARENT_PROVIDE);
let isShow = ref<boolean>(
  parentProps.value.indexOf(props.name) > -1 ? true : false
);
const changeActive = (v): void => {
  isShow.value = !isShow.value;
};
</script>

<!-- <style lang="less" scoped>
@import url("@/packages/theme-chalk/components/collapse.less");
</style> -->
