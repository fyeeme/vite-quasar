<template>
  <q-page class="q-ma-md q-gutter-md">
    <q-avatar
      v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
      :key="size"
      :size="size"
      color="primary"
      text-color="white"
      icon="directions" />
    <div class="box q-pa-md q-ma-md">
      <div class="item q-mx-auto">title q-mx-auto</div>
      <div class="item q-ml-auto">title q-ml-auto</div>
      <div class="item q-mr-auto">title q-mr-auto</div>
      <div class="item q-mt-xs">title q-mt-xs</div>
      <div class="item q-mt-xs">title q-mt-xs</div>
      <div class="item q-mt-sm">title q-mt-sm</div>
      <div class="item q-mt-md">title q-mt-md</div>
      <div class="item q-mt-lg">title q-mt-lg</div>
      <div class="item q-mt-xl">title q-mt-xl</div>
    </div>

    <div class="box q-ma-md q-pa-xs">
      <div class="text-h6 text-left cursor-pointer">shadows#introduction</div>
      <div class="flex wrap q-pa-xs q-gutter-md">
        <div
          v-for="n in 24"
          :key="n"
          class="flex inline shadow-box flex-center"
          :class="`shadow-${n}`">
          .shadow-{{ n }}
        </div>
      </div>
      <pre>
xs	599px	Extra small sized window
sm	1023px	Small sized window
md	1439px	Medium-sized window
lg	1919px	Large sized window
xl	Infinite	Extra large sized window
      </pre>

      <div class="q-pa-md">
        <div class="row">
          <div class="col-12 col-md-8">.col-12 .col-md-8</div>
          <div class="col-12 col-md-4">.col-12 .col-md-4</div>
        </div>

        <div class="row">
          <div class="col-12 col-md">.col-12 .col-md</div>
          <div class="col-12 col-md">.col-12 .col-md</div>
          <div class="col-12 col-md">.col-12 .col-md</div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4">col-xs-12 col-sm-6 col-md-4</div>
          <div class="col-xs-12 col-sm-6 col-md-4">col-xs-12 col-sm-6 col-md-4</div>
          <div class="col-xs-12 col-sm-6 col-md-4">col-xs-12 col-sm-6 col-md-4</div>
        </div>
      </div>

      <q-btn class="q-mb-md" color="primary" label="Regenerate layout" @click="onClick" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const generateCells = () =>
    Array(24)
      .fill(null)
      .map((_, cell) =>
        Array(2 + Math.ceil(3 * Math.random()))
          .fill(null)
          .map((_, text) => `Cell ${cell + 1} - ${text + 1}`)
      )

  const cells = ref(generateCells())

  const onClick = () => {
    cells.value = generateCells()
  }
</script>

<style lang="scss" scoped>
  .box {
    .item {
      width: fit-content;
      height: 30px;
    }
    .shadow-box {
      width: 90px;
      height: 90px;
      border-radius: 50%;
    }
    .row > div {
      padding: 10px 15px;
      background: rgba(86, 61, 124, 0.15);
      border: 1px solid rgba(86, 61, 124, 0.2);
    }
    .row + .row {
      margin-top: 1rem;
    }

    .flex-break {
      flex: 1 0 100% !important;
      width: 0 !important;
    }
  }
</style>
