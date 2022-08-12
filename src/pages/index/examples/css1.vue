<template>
  <div class="w-80 h-60 bg-gray-200 main">
    <!-- //m-auto 可以在 水平垂直方向居中 ，简化 flex的属性设置 -->
    <div class="m-auto bg-[#58a]">2222</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .main {
    &:hover {
      width: 160px;
      background: pink;
      transition: width 1s, 1s background-color;
    }
  }
</style>
