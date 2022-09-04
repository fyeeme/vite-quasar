<template>
  <q-page class="q-ma-md">
    <q-ajax-bar ref="bar" position="bottom" color="accent" size="6px" skip-hijack />
    <q-btn @click="getContent">Get content</q-btn>
    <q-list v-if="content.id" bordered separator class="q-mt-md">
      <q-item>
        <q-item-section>id: {{ content.id }}</q-item-section>
      </q-item>
      <q-item>
        <q-item-section> name: {{ content.name }}</q-item-section>
      </q-item>
      <q-item>
        <q-item-section> createdTime: {{ createdTime }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
  import { userApi } from 'src/api/user'
  import { reactive, ref, toRef } from 'vue'
  let state = reactive({ content: {}, createdTime: null })

  const bar = ref<any>({})

  let content = ref<any>({})
  const getContent = () => {
    bar.value.start()
    userApi.get(1).then((res) => {
      // content.value = res.data
      state.content = res.data
      state.createdTime = res.data.createdTime
      const barRef = bar.value
      if (barRef) {
        barRef.stop()
      }
    })
  }
  const createdTime = toRef(state, 'createdTime') //get single property from state
</script>
