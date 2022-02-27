<template>
  <q-page>
    <input
      :value="modelValue"
      @input="updateValue($event)"
      class="border border-gray-400 h-8 leading-8 min-w-32 p-0.5" />
  </q-page>
</template>

<script setup lang="ts">
  defineProps<{ modelValue: string | null }>()
  const emit = defineEmits<{
    (event: 'update:modelValue', value: string): string
  }>()
  const updateValue = (event: any) => {
    emit('update:modelValue', event.target.value)
  }
</script>

<style lang="scss" scoped></style>
