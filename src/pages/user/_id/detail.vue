<template>
  <q-page class="pa-4 text-gray-500">
    <span> Current User: {{ id }}</span>

    <p class="text-sm mt-4">
     Other users
      <ul>
        <li class="cursor-pointer text-dark-100 px-4 py-2" v-for="item in user.otherIds" :key="item" @click="router.push({name:'user-id-detail', params:{id: item}})"> {{item}}</li>
      </ul>
    </p>
    
    </q-page>
</template>

<script setup="props" lang="ts">
  import { useUserStore } from 'src/stores/user'
  import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'

  const router = useRouter()
  const user = useUserStore()
  const props = defineProps<{ id: string }>()

  watchEffect(() => {
    user.setNewId(props.id)
  })
</script>

<style lang="scss" scoped></style>
