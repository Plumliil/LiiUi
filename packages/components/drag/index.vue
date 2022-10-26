<template>
  <div class="lii-drag">
    <div class="lii-drag-item" v-for="(item,index) in data">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
    require: true,
  },
});
console.log(props.data);
</script>

<style lang="less" scoped>
.lii-drag {
  background-color: pink;
  width: 800px;
  height: 400px;
}
</style>
