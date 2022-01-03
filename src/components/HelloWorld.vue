<script setup lang="ts">
  import { ref, toRefs } from 'vue'
  import { useRouter } from 'vue-router'
  const props = defineProps<{ msg: string }>()

  const count = ref(0)
  const { msg } = toRefs(props)

  const router = useRouter()
</script>

<template>
  <div class="text-2xl text-true-gray-600 py-20px">
    {{ msg }}
  </div>
  <div class="flex items-center">
    <q-btn
      rounded
      color="primary"
      class="m-1 bg-gray-100 cursor-auto"
      @click="
        router.push({
          name: 'user-id-detail',
          params: {
            id: 'John',
          },
        })
      ">
      John
    </q-btn>
    <q-btn
      rounded
      color="primary"
      class="m-1 bg-gray-200 cursor-auto"
      @click="
        router.push({
          name: 'user-id-detail',
          params: {
            id: 'Smith',
          },
        })
      ">
      Smith
    </q-btn>
    <q-btn
      rounded
      color="primary"
      class="m-3 bg-gray-300 cursor-auto"
      @click="
        router.push({
          name: 'user-id-detail',
          params: {
            id: 'Dav',
          },
        })
      ">
      Dav
    </q-btn>
  </div>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <q-btn color="primary my-2" icon="check" :label="'count is: ' + count" @click="count++" />
</template>

<style scoped>
  a {
    color: #42b983;
  }
</style>
