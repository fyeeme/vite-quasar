<template>
  <div class="m-4 p-4 min-h-100vh">
    <div class="flex gap-4 bg-gray-100">
      <div v-for="i in 20" :key="i" class="bg-sky-300 w-1/10 h-10"></div>
    </div>
    <div class="bg-slate-500 h-10 w-16 md:w-32 xl:w-48 my-4"></div>
    <div class="bg-pink-300 h-10 w-16 md:w-32 lg:w-48 mb-4"></div>
    <div class="bg-pink-300 h-10 w-16 lg:w-32 2xl:w-48"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
