<template>
  <div class="lii-collapse" :ref="liiCollapse">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, provide, ref } from "@vue/runtime-core";
const props = defineProps({
  value: {
    type: Array,
    default: () => [],
  },
});
const PARENT_PROVIDE = "parentProvide";
provide(PARENT_PROVIDE, props);
const liiCollapse=ref('');
</script>

<style lang="less" scoped>
@import url('@/packages/theme-chalk/common/base.less');
.lii-collapse {
  padding: 0;
  margin: 0;
  border-top: @lii-border;
}
</style>
