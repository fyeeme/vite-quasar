<template>
  <q-page class="pa-4 text-center">
    <q-icon name="account_circle" size="md" color="primary"></q-icon>
    <q-icon name="font_download" class="text-primary" style="font-size: 32px" />
    <q-icon name="warning" class="text-red" style="font-size: 4rem" />
    <q-icon name="format_size" style="color: #ccc; font-size: 1.4em" />
    <q-icon name="print" class="text-teal" style="font-size: 4.4em" />
    <q-icon name="today" class="text-orange" style="font-size: 2em" />
    <q-icon name="style" style="font-size: 3em" />
    <q-icon :name="matLockOpen" class="text-pink-400 text-2xl" />
  </q-page>
</template>

<script setup lang="ts">
  import { matLockOpen } from '@quasar/extras/material-icons'
</script>

<style lang="scss" scoped></style>
