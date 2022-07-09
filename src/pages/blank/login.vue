<template>
  <q-page class="py-4 text-center bg-gray-100">
    <div>demonstration for login page</div>
    <div class="text-gray-500">
      as <a class="text-primary" href="https://netlify.app">netlify.app</a> does not support api
      publish, you should down
      <a class="text-primary" href="https://github.com/fyeeme/vite-quasar-api">vite-quasar-api</a>
      to your local machine
    </div>
    <div>
      <q-btn
        class="my-4 inline-block"
        color="primary"
        icon="check"
        label="Login"
        @click="onLogin" />
    </div>
    <router-link to="/" class="text-light-blue-500">Back to home page</router-link>
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
