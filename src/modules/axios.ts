import router from 'src/router'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { LocalStorage, Notify } from 'quasar'

export interface HttpResponse<T = unknown> {
  data: T
  code: string
  status: string
  message?: string
}

// replace this with i18n
const lang: string[] = []
const parseError = (result: any) => {
  if (result.status === 401) {
    LocalStorage.set('lastUrl', router.currentRoute.fullPath)
    setTimeout(() => {
      router.push({
        name: 'login',
        params: { redirect: router.currentRoute.fullPath },
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

const api: AxiosInstance = axios.create({})

api.interceptors.request.use((req: AxiosRequestConfig) => {
  //Authorization should be processed here
  return req
})

api.interceptors.response.use(
  (res: AxiosResponse<HttpResponse>) => {
    if (res.data?.status === 'success') {
      return res.data
    }
    // business login error can be processed here
    parseError(res)
    return Promise.reject(res)
  },

  async (err) => {
    const response = err.response
    parseError(response.data)
    return Promise.reject(response)
  }
)

export { api, axios }
