import { apiRequest } from './client'

export type Contact = Record<string, unknown>

export function submitContact(data: Record<string, unknown>) {
  return apiRequest<Contact>('/api/contact', {
    method: 'POST',
    body: data,
  })
}

export function getContacts() {
  return apiRequest<Contact[] | Record<string, unknown>>('/api/contact')
}

export function updateContactStatus(id: string | number, status: string) {
  return apiRequest<Contact>(`/api/contact/${id}/status`, {
    method: 'PUT',
    body: { status },
  })
}
