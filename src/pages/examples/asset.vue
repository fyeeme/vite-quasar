<template>
  <q-page class="pa-4 text-center">
    <div>动态加载图片</div>
    <div class="flex justify-center my-4">
      <q-btn class="mr-2" @click="loadAssetImg('img1')">加载默认图片</q-btn>
      <q-btn class="mr-2" @click="loadAssetImg('img2')">加载风景图片</q-btn>
      <q-btn class="mr-2" @click="loadAssetImg('img3')">加载美女图片</q-btn>
      <q-btn class="mr-2" @click="loadAssetImg('img4')">加载惊喜图片</q-btn>
    </div>

    <q-img v-if="imgType == 'img1'" class="img" src="/src/assets/img/img1.jpg" />
    <q-img v-if="imgType == 'img2'" class="img" src="/src/assets/img/img2.jpg" />
    <q-img v-if="imgType == 'img3'" class="img" src="/src/assets/img/img3.jpg" />
    <q-img v-if="imgType == 'img4'" class="img" src="/src/assets/img/img4.jpg" />
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const imgType = ref<string>('img1')
  const loadAssetImg = (path: any) => {
    imgType.value = path
  }
</script>

<style lang="scss" scoped>
  .img {
    max-width: 50%;
  }
</style>
