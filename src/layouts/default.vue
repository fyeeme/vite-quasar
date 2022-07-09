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
        <template v-for="(item, index) in useRoutes">
          <!-- {{ item }} -->
          <div clickable :key="index" v-if="item.name != 'index'" class="flex-col">
            <template v-if="item.children">
              <div
                class="cursor-pointer py-2"
                @click="router.push({ name: subitem.name })"
                v-for="subitem in item.children">
                {{ subitem.name }}
              </div>
            </template>
            <div v-else class="cursor-pointer ml-4 py-2" @click="router.push({ name: item.name })">
              {{ item.name }}
            </div>
          </div>
        </template>
      </div>
    </q-drawer>

    <q-page-container>
      <div class="py-2 mx-auto text-center text-sm">[Default Layout]</div>
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { RouteRecordRaw } from '@vue-router'
  import { LocalStorage } from 'quasar'
  // import { useRouteInstances } from 'src/stores/route'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  // const useRoutes = useRouteInstances()
  // import generatedRoutes from '~pages'
  const router = useRouter()
  const useRoutes: RouteRecordRaw[] | null = LocalStorage.getItem('routes')

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
