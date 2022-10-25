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

<script>
export default {
  name: "liiCollapseItem",
};
</script>
<script setup>
import { ref } from "@vue/reactivity";
import { computed, inject, onMounted } from "@vue/runtime-core";
const props = defineProps({
  title: {
    type: String,
  },
  name: {
    type: [String, Number],
  },
});
const PARENT_PROVIDE = "parentProvide";
const parentProps = inject(PARENT_PROVIDE);
let isShow = ref(parentProps.value.indexOf(props.name) > -1 ? true : false);
const changeActive = (v) => {
  isShow.value = !isShow.value;
};
</script>
