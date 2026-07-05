export type ApiQueryParams = Record<
  string,
  string | number | boolean | null | undefined
>

export type ApiRequestOptions = Omit<RequestInit, 'body'> & {
  body?: BodyInit | Record<string, unknown> | null
  params?: ApiQueryParams
}

type ApiEnvelope<T> = {
  success: boolean
  message: string
  data: T
}

export class ApiError extends Error {
  status: number
  data: unknown

  constructor(message: string, status: number, data?: unknown) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

function getBaseUrl() {
  if (!API_BASE_URL) {
    throw new Error('NEXT_PUBLIC_API_BASE_URL is not configured.')
  }

  return API_BASE_URL.replace(/\/+$/, '')
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !(value instanceof FormData) &&
    !(value instanceof Blob) &&
    !(value instanceof ArrayBuffer) &&
    !(value instanceof URLSearchParams)
  )
}

function buildUrl(path: string, params?: ApiQueryParams) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const url = new URL(`${getBaseUrl()}${normalizedPath}`)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, String(value))
      }
    })
  }

  return url.toString()
}

export async function apiRequest<T>(
  path: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const { body, headers, params, ...init } = options
  const requestHeaders = new Headers(headers)
  let requestBody = body as BodyInit | null | undefined

  if (isPlainObject(body)) {
    requestHeaders.set('Content-Type', 'application/json')
    requestHeaders.set('Accept', 'application/json')
    requestBody = JSON.stringify(body)
  } else if (!requestHeaders.has('Accept')) {
    requestHeaders.set('Accept', 'application/json')
  }

  let response: Response

  try {
    response = await fetch(buildUrl(path, params), {
      ...init,
      body: requestBody,
      headers: requestHeaders,
      credentials: 'include',
    })
  } catch (error) {
    const detail = error instanceof Error ? error.message : 'Unknown network error'
    throw new ApiError(`Network request failed: ${detail}`, 0)
  }

  let payload: ApiEnvelope<T> | null = null

  try {
    payload = (await response.json()) as ApiEnvelope<T>
  } catch {
    throw new ApiError(
      `Backend returned a non-JSON response (${response.status} ${response.statusText}).`,
      response.status
    )
  }

  if (!response.ok || !payload.success) {
    throw new ApiError(
      payload.message || `Request failed with status ${response.status}.`,
      response.status,
      payload.data
    )
  }

  return payload.data
}
