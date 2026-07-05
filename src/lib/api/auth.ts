import { apiRequest } from './client'

export type LoginResponse = Record<string, unknown>
export type CurrentUser = Record<string, unknown> | null

export function login(email: string, password: string) {
  return apiRequest<LoginResponse>('/api/auth/login', {
    method: 'POST',
    body: { email, password },
  })
}

export function logout() {
  return apiRequest<null>('/api/auth/logout', { method: 'POST' })
}

export function me() {
  return apiRequest<CurrentUser>('/api/auth/me')
}
