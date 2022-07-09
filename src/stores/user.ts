import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  /**
   * Current named of the user.
   */
  const savedId = ref<string>()
  const previousIds = ref(new Set<string>())

  const userIds = computed(() => Array.from(previousIds.value))
  const otherIds = computed(() => userIds.value.filter((name) => name !== savedId.value))
  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param id - new name to set
   */
  function setNewId(id: string) {
    if (savedId.value) previousIds.value.add(savedId.value)

    savedId.value = id
  }

  return {
    setNewId,
    otherIds,
    savedId,
  }
})
