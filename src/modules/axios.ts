import router from 'src/router'
import axios from 'axios'
import { LocalStorage, Notify } from 'quasar'

// replace this with i18n
const lang: string[] = []
const parseError = (result: any) => {
  if (result.status === 401) {
    LocalStorage.set('lastUrl', router.currentRoute.value.fullPath)
    setTimeout(() => {
      router.push({
        name: 'login',
        params: { redirect: router.currentRoute.value.fullPath },
      })
    }, 350)
  } else {
    Notify.create({
      type: 'warning',
      position: 'top',
      message: lang[result.data] || lang[result.code] || result.message,
    })
  }
}

const api = axios.create({})

api.interceptors.request.use((req) => {
  //Authorization should be processed here
  return req
})

/**
 *  {
 *   code : 200
 *   data: {}
 *  }
 */
api.interceptors.response.use(
  (res) => {
    console.log('interceptors response', res)
    return res.data
  },
  async (err) => {
    //login info 401,can be processed here
    const response = err.response
    parseError(response.data)
    return Promise.reject(response)
  }
)

export { api, axios }
