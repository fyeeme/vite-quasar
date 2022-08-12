<template>
  <q-table :rows="rows" :columns="columns" row-key="name">
    <template #body-cell-drag-handle="props">
      <q-td :props="props">
        <q-icon name="drag_handle" class="drag-handle" />
      </q-td>
    </template>
  </q-table>
</template>

<script lang="ts">
  import Sortable from 'sortablejs'
  import { defineComponent, ref, getCurrentInstance, onMounted, onUnmounted } from 'vue'
  import { moveItemInArray } from '~/utils/move'
  const columns = [
    {
      name: 'drag-handle',
      align: 'left',
    },
    {
      name: 'name',
      align: 'left',
      label: 'Name',
      field: 'name',
    },
  ]
  export default defineComponent({
    name: 'QTableDndShowcase',
    setup() {
      const rows = ref([
        { name: 'Frozen Yogurt' },
        { name: 'Ice cream sandwich' },
        { name: 'Eclair' },
      ])
      let sortable: Sortable
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const instance = getCurrentInstance()!.proxy!
      onMounted(() => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const tableBody = (instance.$el as HTMLElement).querySelector<HTMLElement>(
          '.q-table > tbody'
        )!
        // Check out other options at https://github.com/SortableJS/Sortable#options
        sortable = Sortable.create(tableBody, {
          handle: '.drag-handle',
          animation: 150,
          onUpdate({ oldIndex, newIndex }) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            moveItemInArray(rows.value, oldIndex!, newIndex!)
          },
        })
      })
      onUnmounted(() => {
        sortable.destroy()
      })
      return {
        columns,
        rows,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .drag-handle {
    cursor: move;
    // stylelint-disable-next-line value-no-vendor-prefix
    cursor: -webkit-grabbing;
  }
</style>
