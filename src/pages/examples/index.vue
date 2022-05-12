<template>
  <q-page padding>
    <header>
      <div class="flex justify-between pt-8 px-8 text-white text-4xl">
        <span>left</span>
        <span>right</span>
      </div>
      <div class="text-white mt-60">
        <div class="text-center">
          <span class="tracking-43px text-6xl ml-8">outdoors</span>
        </div>
        <div class="text-center mt-4">
          <span class="text-center tracking-10px text-4xl">is where life happens</span>
        </div>
      </div>
      <div class="text-center mt-4">
        <button class="bg-white h-10 rounded-full text-dark-500 px-6">discover our tours</button>
      </div>
    </header>
  </q-page>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  header {
    height: 95vh;
    background: linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.8)),
      url('src/assets/img/kevin-schmid-6wPYGWEGUWY-unsplash.jpg');
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 160px), 0 100%);
  }
</style>
<route lang="yaml">
meta:
  layout: blank
</route>
