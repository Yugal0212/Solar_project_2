import { apiRequest, type ApiQueryParams } from './client'

export type Client = Record<string, unknown>
export type ClientPayload = FormData | Record<string, unknown>

export function getClients(params?: ApiQueryParams) {
  return apiRequest<Client[] | Record<string, unknown>>('/api/clients', { params })
}

export function getClient(id: string | number) {
  return apiRequest<Client>(`/api/clients/${id}`)
}

export function createClient(data: ClientPayload) {
  return apiRequest<Client>('/api/clients', {
    method: 'POST',
    body: data,
  })
}

export function updateClient(id: string | number, data: ClientPayload) {
  return apiRequest<Client>(`/api/clients/${id}`, {
    method: 'PUT',
    body: data,
  })
}

export function deleteClient(id: string | number) {
  return apiRequest<null>(`/api/clients/${id}`, { method: 'DELETE' })
}
