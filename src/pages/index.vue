<template>
  <div class="column flex-center pa-4">
    <div class="before:content-['hello'] before:block ..."></div>
    <img alt="Vue logo" src="src/assets/img/logo.png" @click="getUser" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
  interface User {
    name: string
    age: number
  }
  import { userApi } from 'src/api/user'
  import { ref } from 'vue'
  import HelloWorld from 'src/components/HelloWorld.vue'

  const emit = defineEmits(['update'])
  const changed = ref(false)
  changed.value = true

  const getUser = (): void => {
    userApi.get(2).then((res) => {
      const user: User = res.data
      emit('update', user)
    })
  }
</script>

<style lang="scss" scoped></style>
