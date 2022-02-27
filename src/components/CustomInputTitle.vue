<template>
  <input type="text" :value="title" @input="handleInput($event)" />
</template>
<script setup lang="ts">
  defineProps(['title'])
  const emit = defineEmits(['update:title'])
  const handleInput = (event: any) => {
    emit('update:title', event.target.value)
  }
  // usage
  //<CustomInputTitle v-model:title="bookTitle" />
</script>
