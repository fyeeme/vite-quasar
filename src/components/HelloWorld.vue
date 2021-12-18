<script setup lang="ts">
  import { ref, toRefs } from 'vue'
  import { useRouter } from 'vue-router'
  const props = defineProps({
    msg: String,
  })

  const count = ref(0)
  const { msg } = toRefs(props)

  const router = useRouter()
</script>

<template>
  <div class="text-2xl text-pink-300 py-20px">{{ msg }}</div>

  <p
    class="m-1 p-1 bg-gray-100 cursor-auto"
    @click="
      router.push({
        name: 'user-id-detail',
        params: {
          id: 'John',
        },
      })
    ">
    John
  </p>
  <p
    class="m-2 p-2 bg-gray-200 cursor-auto"
    @click="
      router.push({
        name: 'user-id-detail',
        params: {
          id: 'Smith',
        },
      })
    ">
    Smith
  </p>
  <p
    class="m-3 p-3 bg-gray-300 cursor-auto"
    @click="
      router.push({
        name: 'user-id-detail',
        params: {
          id: 'Dav',
        },
      })
    ">
    Dav
  </p>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <q-btn color="primary mb-20px" icon="check" :label="'count is: ' + count" @click="count++" />
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
  a {
    color: #42b983;
  }
</style>
