import React from 'react'

function SectionTitle({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className='pb-12 space-y-4'>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#1A2B3C" }}>
        {title}
      </h2>
      <p className="max-w-2xl text-lg text-zinc-500">
        {subtitle}
      </p>
    </div>
  )
}

export default SectionTitle