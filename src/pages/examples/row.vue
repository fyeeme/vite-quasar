<template>
  <q-page class="q-pa-md">
    <div class="row section">
      <div class="col col-12 col-md-5">.col</div>
      <div class="col">.col</div>
    </div>

    <div class="row">
      <div class="col">.col</div>
      <div class="col">.col</div>
      <div class="col">.col</div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .section {
    margin: 0 auto;
    max-width: 1080px; //使用max-width 避免通过媒体选择器处理屏幕宽度小于 1080的尺寸
  }

  .row > div {
    padding: 10px 15px;
    background: rgba(86, 61, 124, 0.15);
    border: 1px solid rgba(86, 61, 124, 0.2);
  }

  .row + .row {
    margin-top: 1rem;
  }
</style>
