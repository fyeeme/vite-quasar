<template>
  <q-page class="pa-4">
    <button @click="isOpen = !isOpen">My Profile</button>

    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false">
      <div v-if="isOpen" class="drawer mt-8">
        <img src="/src/assets/img/logo.png" alt="avatar" />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </transition>
  </q-page>
</template>

<script lang="ts" setup>
  import Velocity from 'velocity-animate'
  import { ref } from 'vue'

  const isOpen = ref(false)
  const beforeEnter = (el: any) => {
    el.style.opacity = 0
    el.style.width = '0em'
  }
  const enter = (el: any, done: any) => {
    Velocity(
      el,
      { opacity: 1, width: '12em' },
      { duration: 1000, easing: '[100, 5]', complete: done }
    )
  }
  const leave = (el: any, done: any) => {
    Velocity(
      el,
      { opacity: 0, width: '0em' },
      { duration: 500, easing: 'easeInCubic', complete: done }
    )
  }
</script>

<style scoped>
  img {
    height: 2.5em;
    width: 2.5em;
    border-radius: 50%;
  }
  .drawer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20em;
    width: 12em;
    border-radius: 1%;
    background-color: #e0e0e0;
    box-shadow: 0.08em 0.03em 0.4em #ababab;
    padding-top: 0.7em;
  }
  .drawer div {
    height: 3.5em;
    width: 95%;
    margin-top: 0.6em;
    background-color: #f0f0f0;
    border: 0.02em solid #ababab;
    border-radius: 1%;
  }
</style>
