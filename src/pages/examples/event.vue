<template>
  <div ref="contentRef" class="min-h-100vh bg-slate-300 text-center"></div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useEventListener } from 'src/composables'

  const contentRef = ref(null)

  //   useEventListener(contentRef.value, )
  useEventListener(contentRef, 'scroll', () => {
    console.log(13)
  })
</script>

<style lang="less" scoped></style>
