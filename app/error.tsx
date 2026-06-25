'use client'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-3xl font-extrabold text-slate-900">Something went wrong</h1>
        <button
          onClick={reset}
          className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
        >
          Try again
        </button>
      </div>
    </main>
  )
}
