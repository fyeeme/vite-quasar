<template>
  <div class="m-4 bg-gray-200 py-4">
    <div id="span" class="text-sm p-4 bg-sky-300 inline-block text-pink-500">windicss</div>
    <div ref="boardRef" class="border border-gray-50 inline-block p-4 mx-2 bg-pink-400">border</div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref, watch } from 'vue'
  import { userApi } from 'src/api/user'
  import { useRoute, useRouter } from 'vue-router'
  import { useEventListener } from 'src/composables/event'
  import { useQuasar } from 'quasar'

  const q = useQuasar()
  const router = useRouter()
  const route = useRoute()

  const props = defineProps({
    role: Number,
  })
  const emits = defineEmits(['change', 'update'])
  const form = reactive({
    name: '',
  })
  const boardRef = ref<HTMLDivElement>()
  onMounted(() => {
    // route.query
    // router.push({})
    login()
    useEventListener(document, 'scroll', () => {
      q.notify('hello')
    })
    useEventListener(boardRef.value, 'click', () => {
      q.notify('hello, world')
    })
  })

  watch(form, () => {})

  const user = ref({})

  const login = () => {
    userApi.get(2).then((res) => {
      user.value = res.data
      emits('change')
    })
  }
</script>

<style lang="scss" scoped>
  .body {
    padding: 15px;
    margin: 20px;
    border: 1px solid #ffff;
    background-color: #000;
    width: 200px;
    height: 300px;
  }
</style>
