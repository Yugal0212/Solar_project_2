interface BlueprintGridProps {
  light?: boolean;
  opacity?: number;
}

export default function BlueprintGrid({ light = false, opacity = 0.35 }: BlueprintGridProps) {
  const line = light ? 'rgba(255,255,255,0.2)' : 'rgba(34,197,94,0.1)'
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Generated AI Green Abstract Background Image */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'url(/images/ui/green-abstract.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      {/* Subtle Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity,
          backgroundImage: `
            linear-gradient(to right, ${line} 1px, transparent 1px),
            linear-gradient(to bottom, ${line} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}
