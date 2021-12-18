import router from 'src/router'
import axios from 'axios'
import lang from 'src/lang/en_US'
import { LocalStorage, Notify } from 'quasar'

const parseError = (result: any) => {
  if (result.status === 401) {
    //fixme router.currentRoute.fullPath
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
      message: lang[result.message] || lang[result.code] || lang['defaultErrorMessage'],
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
    parseError(response)
    return Promise.reject(response)
  }
)

export { api, axios }
