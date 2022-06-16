<template>
  <div class="m-4 bg-gray-200 py-4">
    <span class="text-sm px-4">windicss</span>
    <div class="border-b-2 border-dark-200 border-dashed">border</div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref, watch } from 'vue'
  import { userApi } from 'src/api/user'
  import { useRoute, useRouter } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  const props = defineProps({
    role: Number,
  })
  const emits = defineEmits(['change', 'update'])
  const form = reactive({
    name: '',
  })
  onMounted(() => {
    // route.query
    // router.push({})
    login()
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
