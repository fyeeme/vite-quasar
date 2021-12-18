import { api } from 'src/plugins/axios'

export const userApi = {
  get: (id: number) => api.get(`/api/contents/${id}`),
  login: (obj: any) => api.post('/api/login', obj),
  create: (obj: any) => api.post('/api/contents', obj),
}
