<template>
  <div ref="contentRef" class="min-h-150vh bg-stone-300 text-center">hello ,you</div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useEventListener } from 'src/composables'

  const contentRef = ref<HTMLDivElement>()
  onMounted(() => {
    useEventListener(contentRef, 'click', () => {
      console.log('show me something')
    })
    useEventListener(contentRef.value, 'scroll', () => {
      console.log('show me something')
    })
  })
</script>

<style lang="less" scoped></style>
