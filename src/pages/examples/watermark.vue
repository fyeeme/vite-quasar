<template>
  <div ref="body" class="body min-h-100vh" :style="{ 'background-image': 'url(' + imgData + ')' }">
    <span ref="text" id="text" class="text-base absolute -top-1000 -left-1000">
      企业培训平台 admin
    </span>
    <canvas ref="canvas" class="absolute -top-1000 -left-1000" style="border: 1px solid #cccccc">
      HTML5 Canvas not supported
    </canvas>
    <!-- <img ref="img" alt="" /> -->
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  const canvas = ref<HTMLCanvasElement>()
  const text = ref()
  const body = ref()
  const imgData = ref<any>(null)

  onMounted(() => {
    const textRect = text.value.getBoundingClientRect()
    console.log(textRect, text.value.innerText)
    if (!canvas.value) return
    canvas.value.width = Math.cos((Math.PI / 180) * 25) * (textRect.width + 80)
    canvas.value.height = canvas.value.width * 0.618 // Math.sin((Math.PI / 180) * 25) * (textRect.width + 30)
    const context = canvas.value?.getContext('2d')
    if (!context) return

    context.rotate((Math.PI / 180) * 25)
    context.font = '16px serif'
    context.fillStyle = '#EDF0F6'
    context.fillText(text.value.innerText, 10, 10)

    const data = canvas.value?.toDataURL('image/png')
    imgData.value = data
    console.log(34, data)
    canvas.value.remove()
    text.value.remove()

    // img.value.src = data

    // body.value.style =
  })
</script>

<style lang="scss" scoped>
  .body {
  }
</style>
