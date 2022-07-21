<template>
  <q-page class="pa-4">
    <ul class="mx-4">
      <li
        class="mb-4 border-b border-b-slate-200 pb-2"
        v-for="(item, index) in list"
        :key="index"
        v-active-style="[{ color: 'red' }, () => activeTab === index]"
        @click="toggleTab(index)">
        {{ item }}
      </li>
    </ul>

    <div
      class="p4 m4 border border-stone-300 rounded inline-block cursor-pointer"
      v-debounce-click:2000="formSubmit">
      debounce click
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { activeStyle, debounceClick } from 'src/directives'

  /**
   * Implement the custom directive
   * Make sure the list item text color changes to red when the `toggleTab` is toggled
   *
   */
  // const VActiveStyle = {
  //   created(el: HTMLElement, { value }: any) {
  //     const [style, fn] = value
  //     watchEffect(() => {
  //       Object.keys(style).forEach((key: any) => (el.style[key] = fn() ? style[key] : ''))
  //     })
  //   },
  // }

  const VActiveStyle = activeStyle
  const VDebounceClick = debounceClick

  const list = [1, 2, 3, 4, 5, 6, 7, 8]
  const activeTab = ref(0)
  const toggleTab = (index: number): void => {
    activeTab.value = index
    console.log(activeTab)
  }

  const formSubmit = () => {
    console.log(45, 'formSubmit')
  }
</script>
