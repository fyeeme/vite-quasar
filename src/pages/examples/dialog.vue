<template>
  <q-page class="q-ma-md">
    <!--  <q-btn label="Close Icon" color="primary" @click="icon = true" /> -->
    <q-btn label="打开对话框" color="primary" @click="dialogVisible = true" />

    <q-dialog v-model="dialogVisible" @hide="onHide">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Close icon</div>
          <q-space />
          <q-btn v-close-popup icon="close" flat round dense />
        </q-card-section>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate
          voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam
          exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  let dialogVisible = ref(false)

  function onHide() {
    dialogVisible.value = false
  }
</script>

<style></style>
