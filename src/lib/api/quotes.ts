import { apiRequest } from './client'

export type Quote = Record<string, unknown>

export function submitQuote(data: Record<string, unknown>) {
  return apiRequest<Quote>('/api/quotes', {
    method: 'POST',
    body: data,
  })
}

export function getQuotes() {
  return apiRequest<Quote[] | Record<string, unknown>>('/api/quotes')
}

export function updateQuoteStatus(id: string | number, status: string) {
  return apiRequest<Quote>(`/api/quotes/${id}/status`, {
    method: 'PUT',
    body: { status },
  })
}
