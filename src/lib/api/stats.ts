import { apiRequest } from './client'

export type Stat = Record<string, unknown>

export function getStats() {
  return apiRequest<Stat[] | Record<string, unknown>>('/api/stats')
}

export function createStat(data: Record<string, unknown>) {
  return apiRequest<Stat>('/api/stats', {
    method: 'POST',
    body: data,
  })
}

export function updateStat(id: string | number, data: Record<string, unknown>) {
  return apiRequest<Stat>(`/api/stats/${id}`, {
    method: 'PUT',
    body: data,
  })
}

export function deleteStat(id: string | number) {
  return apiRequest<null>(`/api/stats/${id}`, { method: 'DELETE' })
}
