'use client'

import { useState } from 'react'
import { apiRequest, ApiError, getClients, getInstallations, getProducts, getStats, me } from '@/src/lib/api'

type CheckStatus = 'pending' | 'success' | 'error'

type ApiCheck = {
  id: string
  name: string
  status: CheckStatus
  message: string
}

const initialChecks: ApiCheck[] = [
  { id: 'health', name: 'GET /api/health', status: 'pending', message: 'Not run yet.' },
  { id: 'products', name: 'GET /api/products', status: 'pending', message: 'Not run yet.' },
  { id: 'clients', name: 'GET /api/clients', status: 'pending', message: 'Not run yet.' },
  { id: 'installations', name: 'GET /api/installations', status: 'pending', message: 'Not run yet.' },
  { id: 'stats', name: 'GET /api/stats', status: 'pending', message: 'Not run yet.' },
  { id: 'auth-me', name: 'GET /api/auth/me', status: 'pending', message: 'Not run yet.' },
]

function isRequiresLogin(error: unknown) {
  if (!(error instanceof ApiError)) {
    return false
  }

  const message = error.message.toLowerCase()
  return error.status === 401 || error.status === 403 || message.includes('unauthorized')
}

function getSuccessMessage(data: unknown) {
  if (Array.isArray(data)) {
    return `Connected. Received ${data.length} item${data.length === 1 ? '' : 's'}.`
  }

  if (data && typeof data === 'object') {
    return 'Connected. Backend returned data.'
  }

  return 'Connected. Backend responded successfully.'
}

export default function ApiCheckPage() {
  const [checks, setChecks] = useState<ApiCheck[]>(initialChecks)
  const [isRunning, setIsRunning] = useState(false)

  const setCheck = (id: string, update: Partial<ApiCheck>) => {
    setChecks((current) =>
      current.map((check) => (check.id === id ? { ...check, ...update } : check))
    )
  }

  const runSingleCheck = async (
    id: string,
    request: () => Promise<unknown>,
    options: { authCheck?: boolean } = {}
  ) => {
    setCheck(id, { status: 'pending', message: 'Checking...' })

    try {
      const data = await request()
      setCheck(id, { status: 'success', message: getSuccessMessage(data) })
    } catch (error) {
      if (options.authCheck && isRequiresLogin(error)) {
        setCheck(id, {
          status: 'success',
          message: 'Backend reached. Requires login.',
        })
        return
      }

      if (isRequiresLogin(error)) {
        setCheck(id, {
          status: 'success',
          message: 'Backend reached. This endpoint requires login.',
        })
        return
      }

      const message = error instanceof Error ? error.message : 'Unknown API error.'
      setCheck(id, { status: 'error', message })
    }
  }

  const runChecks = async () => {
    setIsRunning(true)
    setChecks(initialChecks.map((check) => ({ ...check, status: 'pending', message: 'Queued...' })))

    const checksToRun = [
      runSingleCheck('health', () => apiRequest('/api/health')),
      runSingleCheck('products', () => getProducts()),
      runSingleCheck('clients', () => getClients()),
      runSingleCheck('installations', () => getInstallations()),
      runSingleCheck('stats', () => getStats()),
      runSingleCheck('auth-me', () => me(), { authCheck: true }),
    ]

    await Promise.all(checksToRun)
    setIsRunning(false)
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-24">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Local API Verification
            </p>
            <h1 className="mt-3 font-heading text-4xl font-black text-slate-950">
              Frontend to Backend API Check
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Confirms that the Next.js app can reach the local PHP API and send cookies
              with requests.
            </p>
          </div>

          <button
            type="button"
            onClick={runChecks}
            disabled={isRunning}
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isRunning ? 'Running...' : 'Run API Check'}
          </button>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-[1fr_140px_1.4fr] gap-4 border-b border-slate-200 bg-slate-100 px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
            <span>Endpoint</span>
            <span>Status</span>
            <span>Message</span>
          </div>

          <div className="divide-y divide-slate-100">
            {checks.map((check) => (
              <div
                key={check.id}
                className="grid grid-cols-1 gap-3 px-5 py-4 text-sm sm:grid-cols-[1fr_140px_1.4fr] sm:items-center sm:gap-4"
              >
                <span className="font-mono text-slate-800">{check.name}</span>
                <span
                  className={`w-max rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                    check.status === 'success'
                      ? 'bg-emerald-50 text-emerald-700'
                      : check.status === 'error'
                        ? 'bg-red-50 text-red-700'
                        : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {check.status}
                </span>
                <span className="text-slate-600">{check.message}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
