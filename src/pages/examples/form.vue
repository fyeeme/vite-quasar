<template>
  <q-page class="q-pa-md" style="max-width: 400px">
    <!--greedy alidate all fields in form -->
    <q-form
      ref="myFormRef"
      greedy
      class="q-gutter-md"
      @submit.prevent.stop="onSubmit"
      @reset="onReset"
    >
      <q-input
        v-model="form.name"
        outlined
        clearable
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :dense="dense"
        :rules="rules.name"
      >
        <template #label>
          <div><span class="text-red-5">*</span> Name</div>
        </template>
      </q-input>

      <q-input
        v-model="form.age"
        filled
        type="number"
        label="Your age *"
        lazy-rules
        :rules="rules.age"
      />

      <q-input v-model="form.time" filled type="time" hint="Native time" />

      <q-input v-model="form.time" filled mask="time" :rules="['time']">
        <template #append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="form.time">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup :label="$q.lang.label.close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input v-model="form.date" filled mask="date" :rules="['date']">
        <template #append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="form.date" minimal>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup :label="$q.lang.label.close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-field ref="fieldRef" filled stack-label :rules="rules.accept">
        <template #control>
          <q-toggle v-model="form.accept" label="I accept the license and terms" />
        </template>
      </q-field>

      <div>
        <q-btn label="提交" type="submit" color="primary" />
        <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </q-page>
</template>
<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { useQuasar } from 'quasar'

  const $q = useQuasar()
  const myFormRef = ref(null)
  const dense = ref<boolean>(true)
  const form = reactive({
    name: null,
    age: null,
    date: '2019/02/01',
    time: '10:56',
    accept: false,
  })
  const rules = {
    name: [
      (val: string) => (val && val.length > 0) || 'Please type something',
      'hexColor' || '请输入',
    ],
    // may this be more powerful
    // name: [
    //   { required: true, message: '请输入活动名称' },
    //   { min: 3, max: 5, message: '长度在 3 到 5 个字符' },
    //   { pattern: /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/ } //utils.regex.hexCOlor
    // ],

    age: [
      (val: number) => (val !== null && val > 0) || 'Please type your age',
      (val: number) => (val > 0 && val < 100) || 'Please type a real age',
    ],
    accept: [(val: boolean) => !!val || 'You need to accept the license and terms first'],
  }
  function onSubmit() {}
  function onReset() {}
</script>
<style lang="scss" scoped>
  .q-gutter-md {
    max-width: 400px;
  }
</style>
