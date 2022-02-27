<template>
  <q-page>
    <input
      :value="modelValue"
      @input="updateValue($event)"
      class="border border-gray-400 h-8 leading-8 min-w-32 p-0.5" />
  </q-page>
</template>

<script setup lang="ts">
  defineProps<{ modelValue: number | null }>()
  const emit = defineEmits<{
    (event: 'update:modelValue', value: number): number
  }>()
  const updateValue = (event: any) => {
    emit('update:modelValue', event.target.value)
  }
</script>

<style lang="scss" scoped></style>
