import React from 'react'

export default function GuideSection() {
  return (
    <section className="bg-black text-white">
      <div className="border-l border-r border-white/20 max-w-customWidth mx-auto h-[700px] py-32 lg:px-12 px-4 flex flex-col gap-12">

        <header>
          <span>Apprenez</span>
          <h2 className="text-4xl font-thin antialiased uppercase">comment fonctionne le logiciel?</h2>
        </header>

        <div className=" border border-white w-full h-[500px] bg-black p-4">
          <iframe className="w-full h-full" src="https://www.loom.com/embed/2756350e547e4edab5eec8561de92a1c?sid=bf166667-a8c4-4d74-b881-782de94932d9" frameBorder="0" allowFullScreen></iframe>
        </div>

      </div>
    </section>
  )
}