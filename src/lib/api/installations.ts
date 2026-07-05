import { apiRequest, type ApiQueryParams } from './client'

export type Installation = Record<string, unknown>

export function getInstallations(params?: ApiQueryParams) {
  return apiRequest<Installation[] | Record<string, unknown>>('/api/installations', {
    params,
  })
}

export function getInstallation(id: string | number) {
  return apiRequest<Installation>(`/api/installations/${id}`)
}

export function createInstallation(formData: FormData) {
  return apiRequest<Installation>('/api/installations', {
    method: 'POST',
    body: formData,
  })
}

export function updateInstallation(id: string | number, formData: FormData) {
  return apiRequest<Installation>(`/api/installations/${id}`, {
    method: 'PUT',
    body: formData,
  })
}

export function deleteInstallation(id: string | number) {
  return apiRequest<null>(`/api/installations/${id}`, { method: 'DELETE' })
}
