<template>
  <div class="lii-upload">
    <input
      type="file"
      :multiple="multiple"
      ref="inpRef"
      class="file-input"
      @change="inpChange"
    />
    <lii-button
      v-if="type === 'button'"
      class="lii-upload-button"
      @click="fileChange"
      :type="btnType"
      >{{ label }}</lii-button
    >
    <div
      v-if="type === 'box'"
      class="area-box"
      @click="fileChange"
      ref="areaRef"
      :class="{ activeArea: isActive }"
    ></div>
    <div class="fileList-box" v-show="fileList.length!==0">
      <li v-for="(item, index) in fileList" :key="index">
        <lii-icon name="file" size="1" />
        <span class="imgUrl">{{ item.name }}</span>
        <span class="delete-span" @click="deleteFile(item, index)">x</span>
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";
import liiButton from "../button/index.vue";
import { onMounted } from "@vue/runtime-core";
const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "选择文件",
  },
  btnType: {
    type: String,
    default: "primary",
  },
  type: {
    type: String,
    default: "button",
  },
});
const emits = defineEmits(["change", "remove", "update:fileList"]);
const fileList = reactive<any>([]);
const inpRef = ref<any>(null);
const areaRef = ref(null);
const isActive = ref(false);
const fileChange = () => {
  inpRef.value.click();
};
const inpChange = (e: any) => {
  fileList.unshift(...e.target.files);
  emits("change", fileList);
};
const deleteFile = (item, index) => {
  fileList.splice(index, 1);
  emits("remove", { delete: item, fileList });
};
onMounted(() => {
  console.log(areaRef.value);
  if (props.type === "box") {
    let dropArea: any = areaRef.value;
    dropArea.addEventListener(
      "drop",
      (e) => {
        e.stopPropagation();
        e.preventDefault();
        fileList.unshift(...e.dataTransfer.files);
        console.log(e.dataTransfer.files);
        isActive.value = false;
      },
      false
    );
    dropArea.addEventListener(
      "dragleave",
      (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("经过");
        isActive.value = false;
      },
      false
    );
    dropArea.addEventListener(
      "dragenter",
      (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("进入");
        isActive.value = true;
      },
      false
    );
    dropArea.addEventListener(
      "dragover",
      (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("完成");
        isActive.value = true;
      },
      false
    );
  }
});
</script>

<style lang="less" scoped>

</style>
