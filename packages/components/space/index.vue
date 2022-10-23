<template>
  <div class="lii-space"></div>
</template>

<script lang="ts">
import { h, ref, useSlots, computed, Ref } from "vue";
export default {
  name: "liiSpace",
  props: {
    inline: {
      type: Boolean,
      default: true,
    },
    size: {
      type: Array,
      default: [10, 10],
    },
  },
  setup(props) {
    const slots: any = useSlots();
    const slotList: Ref<any> = ref([]);
    const tStyle = computed(() => {
      return {
        display: props.inline ? "inline-flex" : "flex",
        gap: props.inline
          ? `${props.size[0]}px`
          : `${props.size[0]}px ${props.size[1]}px`,
        "flex-direction": props.inline ? "inherit" : "column",
      };
    });
    slots.default().forEach((item, index) => {
      slotList.value.push(
        h(
          "div",
          {
            className: "lii-space-item",
            style: 'width"100%',
          },
          item
        )
      );
    });
    return () => [
      h(
        "div",
        {
          className: "lii-space",
          style: tStyle.value,
        },
        slotList.value
      ),
    ];
  },
};
</script>
<style lang="less">
.lii-space {
  width: 100%;
  flex-wrap: wrap;
  gap: 10px 10px;
}
</style>
