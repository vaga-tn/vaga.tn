import React from 'react'

export default function GuideSection() {
  return (
    <section className="bg-black text-white">
      <div className="border-l border-r border-white/20 max-w-customWidth mx-auto h-[900px] py-32 lg:px-12 px-4 flex flex-col gap-12">

        <header>
          <span>Apprenez</span>
          <h2 className="text-4xl font-thin antialiased uppercase">comment fonctionne le logiciel?</h2>
        </header>

        <div>
          <div className=" border border-white w-full h-[500px] bg-black p-4">
            <iframe className="w-full h-full" src="https://www.loom.com/embed/2756350e547e4edab5eec8561de92a1c?sid=bf166667-a8c4-4d74-b881-782de94932d9" frameBorder="0" allowFullScreen></iframe>
          </div>

          <div className='flex items-center justify-center gap-1'>
            <div className='bg-white w-full text-black p-4 flex border-collapse items-center gap-2 group cursor-pointer'>
              <span className='group-hover:underline'>VAGA / PME</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
            <div className='bg-white w-full text-black p-4 flex border-collapse items-center gap-2 group cursor-pointer'>
              <span className='group-hover:underline'>VAGA / Transportation</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}