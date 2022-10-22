<template>
  <div class="app">
    <div>
      <lii-input size="small" />
      <lii-input size="mid" />
      <lii-input size="big" />
    </div>
    <div>
      <lii-badge class="item" :isDot="true"></lii-badge>
      <lii-badge value="hot" class="item" type="primary">
        <button class="btn">query</button>
      </lii-badge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped lang="less">
.app {
  height: 800px;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .btn {
    width: 70px;
    border: 1px solid black;
  }
  .item {
    width: 70px;
    height: 30px;
    line-height: 30px;
    background-color: aquamarine;
    margin-top: 10px;
  }
}
</style>
