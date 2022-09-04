<template>
  <div class='p-4 m-4'>
    <div class='border border-gray-200 inline-block'>
      <a class='px-8 py-4' :href='authorizeUrl'>点击进行授权</a>
    </div>
    <q-btn @click='refreshToken'>刷新授权</q-btn>
    <q-btn @click='getUserInfo'>用户信息</q-btn>
    <div class='my-2 p-1'>
      <q-input :model-value='authorizationTokenUrl' v-if='route.query.code' label='refresh_token url' />
      <q-input :model-value='authorizationTokenUrl' v-if='route.query.code' label='authorization_token url' />
      <q-input :model-value='authorizeUrl' label='authorize_code url' />
    </div>
    {{ oauthToken }}
  </div>
</template>

<script setup lang='ts'>
  import { api } from 'src/modules/axios'
  import { useRoute } from 'vue-router'
  import { onMounted, ref } from 'vue'
  import { useQuasar } from 'quasar'

  const storage = window.sessionStorage
  const authorizeUrl = ref<string>('')

  //TODO  将 getPkce 的生成逻辑放在 pkce.ts（或命名为 oauth.js) 中 ， 暴露出  generateAuthorizeUrl 和 generateTokenUrl两个方法

  const oauthToken = ref<Record<string, string>>({
    'access_token': '',
    'refresh_token': '',
    'scope': '',
    'id_token': '',
    'token_type': '',
    'expires_in': '',
  })
  onMounted(() => {
    authorizeUrl.value = generateAuthorizeUrl()
    console.log(39, authorizeUrl)
    const { code, state } = route.query
    if (code) {
      api
        .post(
          generateAuthorizationTokenUrl(),
          {},
          {
            headers: {
              //TODO config
              Authorization: `Basic ${btoa('messaging-client:secret')}`,
            },
          },
        )
        .then((res: any) => {
          storage.clear()
          oauthToken.value = res
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

    const params: Record<string, any> = {
      response_type: 'code',
      client_id: 'messaging-client',
      scope: 'openid message.read message.write',
      redirect_uri: 'http://127.0.0.1:3000/oauth2/authorized',
      code_challenge: code_challenge,
      code_challenge_method: 'S256',
      state: state,
    }
    return `http://localhost:9000/oauth2/authorize?${new URLSearchParams(params).toString()}`
  }

  function generateAuthorizationTokenUrl() {
    const state = storage.getItem('state')
    const code_verifier = storage.getItem('code_verifier')
    const params: Record<string, any> = {
      client_id: 'messaging-client',
      redirect_uri: 'http://127.0.0.1:3000/oauth2/authorized',
      grant_type: 'authorization_code',
      code: route.query.code,
      code_verifier: code_verifier,
      state: state,
    }
    // return `http://localhost:9000/oauth2/token?${params.toString()}`
    return `/v2/api/oauth2/token?${new URLSearchParams(params).toString()}`
  }

  const authorizationTokenUrl = ref(generateAuthorizationTokenUrl())

  function generateRefreshTokenUrl() {
    const params: Record<string, any> = {
      refresh_token: oauthToken.value.refresh_token,
      grant_type: 'refresh_token',
    }
    // return `http://localhost:9000/oauth2/token?${params.toString()}`
    return `/v2/api/oauth2/token?${new URLSearchParams(params).toString()}`

  }

  const $q = useQuasar()
  const refreshToken = () => {
    api.post(generateRefreshTokenUrl(), {},
      {
        headers: {
          //TODO config
          Authorization: `Basic ${btoa('messaging-client:secret')}`,
        },
      }).then((res: any) => {
      console.log(111, res)
      oauthToken.value = res
      $q.notify('刷新成功')
    })
  }

  const getUserInfo = () => {
    api.get('/v3/api/message/2', {
      headers: {
        //TODO config
        Authorization: `Bearer ${oauthToken.value.access_token}`,
      },
    }).then(res => {
      console.log(139, res)
    })
    api.get('/v3/api/users/oidc-principal', {
      headers: {
        //TODO config
        Authorization: `Bearer ${oauthToken.value.access_token}`,
      },
    }).then(res => {
      console.log(139, res)
    })

  }
</script>

<style scoped></style>

<route lang='yaml'>
meta:
layout: blank
</route>
