<template>
  <q-page class="p-md bg-gray-100 text-center pa-4">
    <div class="full-screen">404 not found!</div>
    <pre>Params - {{ all }}</pre>
    <router-link to="/">Back to home page</router-link>
  </q-page>
</template>
<script setup lang="ts">
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const { all } = route.params
</script>
