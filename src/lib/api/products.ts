import { apiRequest, type ApiQueryParams } from './client'

export type Product = Record<string, unknown>

export function getProducts(params?: ApiQueryParams) {
  return apiRequest<Product[] | Record<string, unknown>>('/api/products', { params })
}

export function getProduct(id: string | number) {
  return apiRequest<Product>(`/api/products/${id}`)
}

export function createProduct(formData: FormData) {
  return apiRequest<Product>('/api/products', {
    method: 'POST',
    body: formData,
  })
}

export function updateProduct(id: string | number, formData: FormData) {
  return apiRequest<Product>(`/api/products/${id}`, {
    method: 'PUT',
    body: formData,
  })
}

export function deleteProduct(id: string | number) {
  return apiRequest<null>(`/api/products/${id}`, { method: 'DELETE' })
}
