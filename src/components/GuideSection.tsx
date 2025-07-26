import React from 'react'

export default function GuideSection() {
  return (
    <section className="bg-black text-white">
      <div className="border-l border-r border-white max-w-customWidth mx-auto h-[700px] py-32 lg:px-12 px-4 flex flex-col gap-12">

        <header>
          <span>Apprenez</span>
          <h2 className="text-4xl font-thin antialiased uppercase">comment fonctionne le logiciel?</h2>
        </header>

        <div className=" border border-white w-full h-[500px] bg-black p-4">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EkCrP1rv4ag?si=sjHYaIgMnfLz2ymn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>
    </section>
  )
}