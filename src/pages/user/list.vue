<template>
  <q-page class="pa-4">
    <div class="text-base font-bold pb-4">demo for transition-group</div>
    <input type="text" v-model="newContact" placeholder="Name" />
    <button @click="addContact">Add Contact</button>
    <button @click="sortContacts">Sort</button>

    <transition-group name="slide-up" tag="ul" appear>
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </transition-group>
  </q-page>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  const newContact = ref<string>('')
  const contacts = reactive<string[]>(['Beau Thabeast', 'Cindy Rella', 'Alice Wunderlind'])

  const addContact = () => {
    contacts.push(newContact.value)
    newContact.value = ''
  }

  const sortContacts = () => {
    contacts.sort()
  }
</script>

<style lang="scss" scoped>
  .slide-up-enter {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-up-enter-active {
    transition: all 0.2s ease;
  }

  .slide-up-move {
    transition: transform 0.5s ease-out;
  }
</style>
