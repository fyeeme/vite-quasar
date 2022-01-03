<template>
  <div class="column flex-center pa-4">
    {{ locale }} - {{ availableLocales }}
    <div class="w-20%">
      <q-select v-model="locale" :options="availableLocales" label="choose your language" />
    </div>

    <div @click="toggleLocales">toggle locales</div>
    <img alt="Vue logo" src="/src/assets/img/logo.png" @click="getUser" />
    <HelloWorld :msg="t('index.msg')" />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
  import { useI18n } from 'vue-i18n'

  interface User {
    name: string
    age: number
  }
  import HelloWorld from '/src/components/HelloWorld.vue'
  import { userApi } from '/src/api/user'

  const { t, locale, availableLocales } = useI18n()
  const emit = defineEmits(['update'])

  const toggleLocales = () => {
    locale.value = 'en_US'
    console.log(26, locale.value)
  }
  const getUser = (): void => {
    userApi.get(2).then((res) => {
      const user: User = res.data
      emit('update', user)
    })
  }
</script>

<style lang="scss" scoped></style>
