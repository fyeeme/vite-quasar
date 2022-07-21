<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white text-left">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <div bordered separator class="min-w-25 pa-4">
        <template v-for="(item, index) in routes">
          <div
            class="cursor-pointer ml-4 py-2 border-b border-stone-200"
            @click="router.push({ name: item.name })">
            {{ item.name }}
          </div>
        </template>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { LocalStorage } from 'quasar'
  import { useRouter } from 'vue-router'
  import { flatRoutes } from 'src/utils/util'

  const router = useRouter()
  const generatedRoutes: any = LocalStorage.getItem('routes')

  const routes = flatRoutes(generatedRoutes, [])
  console.log(routes)

  const leftDrawerOpen = ref<boolean>(false)
  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
</script>
<style lang="scss">
  .slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.2s ease;
  }

  .slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }
</style>
