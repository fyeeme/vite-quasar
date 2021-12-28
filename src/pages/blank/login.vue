<template>
  <q-page class="py-4 text-center bg-gray-100">
    <div>demonstration for login page</div>
    <div>
      <q-btn
        class="my-4 inline-block"
        color="primary"
        icon="check"
        label="Login"
        @click="onLogin" />
    </div>
    <router-link to="/">Back to home page</router-link>
  </q-page>
</template>

<script setup lang="ts">
  import { useQuasar } from 'quasar'
  import { userApi } from 'src/api/user'

  const $q = useQuasar()
  const onLogin = () => {
    userApi
      .create({})
      .then((res) => {
        console.log(22, res)
      })
      .catch((err) => {
        console.error(25, err.data)
      })
  }
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  layout: blank
</route>
