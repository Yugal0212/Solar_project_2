import InnerPageHero from './InnerPageHero'
import SectionHeader from './SectionHeader'

export default function PagePlaceholder({
  title,
  eyebrow,
  note,
  breadcrumbs,
}: {
  title: string
  eyebrow?: string
  note?: string
  breadcrumbs?: { label: string; path?: string }[]
}) {
  return (
    <main>
      <InnerPageHero
        label={eyebrow || 'LGPSM SOLAR'}
        title={title}
        highlightWords={title.split(' ')} // Highlight words in the title for a premium effect
        subtitle="Premium Engineering & Deployment"
        description={note ?? 'Detailed content for this section is currently being finalized by our engineering team.'}
        imagePath="/hero-bg.png"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <SectionHeader
            eyebrow="OVERVIEW"
            title={title}
            subtitle="Content Coming Soon"
            description={note ?? 'This page has been successfully scaffolded and will be updated with real content, diagrams, and deployment specifications shortly.'}
          />
        </div>
      </section>
    </main>
  )
}
