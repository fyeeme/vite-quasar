import { api } from 'src/modules/axios'

export const userApi = {
  get: (id: number) => api.get(`/api/users/${id}`),
  login: (obj: any) => api.post('/api/login', obj),
  create: (obj: any) => api.post('/api/users', obj),
  update: (obj: any) => api.put('/api/users', obj),
  remove: (id: number) => api.delete(`/api/users/${id}`),
}
