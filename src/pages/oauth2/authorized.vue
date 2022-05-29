<template>
  <div class="p-4 m-4">
    <div class="border border-gray-200 inline-block">
      <a class="px-8 py-4" :href="authorizeUrl">登录</a>
    </div>
    <div class="my-2 p-1">
      <q-input :model-value="route.query.code" />
      <q-input :model-value="tokenUrl" v-if="route.query.code" />
      <q-input :model-value="authorizeUrl" />
    </div>
  </div>
</template>

<script setup>
  import { api } from 'src/modules/axios'
  import { useRoute } from 'vue-router'
  import { onMounted, ref } from 'vue'
  import { nanoid } from 'nanoid'
  import getPkce from 'oauth-pkce'

  const storage = window.sessionStorage
  const authorizeUrl = ref(null)

  //TODO  将 getPkce 的生成逻辑放在 pkce.js（或命名为 oauth.js) 中 ， 暴露出  generateAuthorizeUrl 和 generateTokenUrl两个方法
  onMounted(() => {
    getPkce(43, (error, { verifier, challenge }) => {
      if (error) throw error
      console.log({ verifier, challenge })
      if (storage.getItem('code_verifier')) {
        console.warn('code_verifier exist')
        return
      }
      storage.setItem('state', nanoid())
      storage.setItem('code_verifier', verifier)
      storage.setItem('code_challenge', challenge)

      authorizeUrl.value = generateAuthorizeUrl()
      console.log(39, authorizeUrl)
    })

    const { code, state } = route.query
    if (code) {
      api
        .post(
          generateTokenUrl(),
          {},
          {
            headers: {
              //TODO config
              Authorization: `Basic ${btoa('messaging-client:secret')}`,
            },
          }
        )
        .then((res) => {
          storage.clear()
          console.log(50, res)
        })
    }
  })

  const route = useRoute()

  //generate
  // https://www.valentinog.com/blog/challenge/
  // https://www.appsdeveloperblog.com/pkce-code-verifier-and-code-challenge-in-java/
  // https://stackoverflow.com/questions/55616883/what-is-the-significance-of-code-verifier-in-pkce-oauth-2-0

  //pkce
  //Understanding OAuth 2 with PKCE in Single-Page Applications (2020)
  //https://www.valentinog.com/blog/oauth2/
  //https://coolgk.medium.com/oauth-pkce-generate-code-verifier-and-code-challenge-in-ie11-and-modern-browsers-e0b8864956ed

  // code_challenge 与 code_verifier 在上面的连接生成，否则会报错

  function generateAuthorizeUrl() {
    const state = storage.getItem('state')
    const code_challenge = storage.getItem('code_challenge')

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: 'messaging-client',
      scope: 'openid',
      redirect_uri: 'http://127.0.0.1:3000/oauth2/authorized',
      code_challenge: code_challenge,
      code_challenge_method: 'S256',
      state: state,
    })
    return `http://localhost:9000/oauth2/authorize?${params.toString()}`
  }

  function generateTokenUrl() {
    const state = storage.getItem('state')
    const code_verifier = storage.getItem('code_verifier')
    const params = new URLSearchParams({
      client_id: 'messaging-client',
      redirect_uri: 'http://127.0.0.1:3000/oauth2/authorized',
      grant_type: 'authorization_code',
      code: route.query.code,
      code_verifier: code_verifier,
      state: state,
    })
    // return `http://localhost:9000/oauth2/token?${params.toString()}`
    return `/v2/api/oauth2/token?${params.toString()}`
  }

  const tokenUrl = ref(generateTokenUrl())
  const refreshTokenUrl = ref(
    `http://localhost:9000/oauth2/token?client_id=messaging-client&redirect_uri=http://127.0.0.1:3000/oauth2/authorized&grant_type=refresh_token&code=${route.query.code}&code_verifier=qPsH306-ZDDaOE8DFzVn05TkN3ZZoVmI_6x4LsVglQI`
  )
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: blank
</route>
