// Temporary placeholder shown on scaffolded routes until real content/UI is
// built. Server component (no interactivity). Renders the page H1 plus a clear
// TODO marker so every route is navigable and verifiable during this phase.

export default function PagePlaceholder({
  title,
  eyebrow,
  note,
}: {
  title: string
  eyebrow?: string
  note?: string
}) {
  return (
    <main className="section-pad">
      <div className="max-w-5xl mx-auto px-4 py-24">
        {eyebrow && (
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-600 mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading font-black text-4xl lg:text-5xl text-slate-900">
          {title}
        </h1>
        <p className="mt-6 text-slate-500">
          {/* TODO: replace with real content + UI */}
          {note ?? 'Page scaffolded — content coming soon.'}
        </p>
      </div>
    </main>
  )
}
