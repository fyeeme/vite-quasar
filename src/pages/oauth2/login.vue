<template>
  <div class='p-4 m4'>
    <q-btn @click='navToAuth'>Oauth 2 Login </q-btn>
  </div>
</template>
<script setup lang='ts'>

  import { onMounted } from 'vue'
  import getPkce from 'oauth-pkce'
  import { nanoid } from 'nanoid'
  import { useRouter } from 'vue-router'
  const router = useRouter();
  const storage = window.sessionStorage
  onMounted(() => {
    getPkce(43, (error, { verifier, challenge }) => {
      if (error) throw error
      console.log({ verifier, challenge })
      if (storage.getItem('code_verifier')) {
        console.warn('code_verifier exist')
      }
      storage.setItem('state', nanoid())
      storage.setItem('code_verifier', verifier)
      storage.setItem('code_challenge', challenge)


      console.log(39, verifier,challenge)
    })
  })
  const navToAuth  =()=>{
    router.push({name:'oauth2-authorized'})
  }
</script>
<route lang='yaml'>
meta:
layout: blank
</route>
