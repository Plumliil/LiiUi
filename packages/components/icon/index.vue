<template>
  <component
    :is="iconName"
    role="img"
    :style="{ height: size + 'em', width: size + 'em', color: 'red' }"
    class="inline-block fill-current"
  />
</template>
<script setup lang="ts">
import { computed } from "vue";
import { icons } from "./src/icons";
const props = defineProps({
  name: {
    type: String,
    required: true,
    validator(value: string) {
      return Object.prototype.hasOwnProperty.call(icons, value);
    },
  },
  size: {
    type: Number || String,
    required: false,
    default: 2,
  },
});
let iconName = computed(() => {
  return icons[props.name];
});
</script>
