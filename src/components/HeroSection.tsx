'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {

  return (
    <section className="theSharedSectionClasses flex items-center justify-between gap-20 py-40">

      <div className='space-y-8 lg:max-w-[500px]'>

        <h1 className="text-5xl font-bold leading-none text-black uppercase">
          Prenez le contrôle<br />
          <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            de votre entrepris
          </span>
        </h1>

        <p className="text-xl  text-gray-700 w-full mx-auto">
          Solution complète de gestion clients, inventaire, finance, conçue par des Tunisiens, pour les entrepreneurs tunisiens.
          Vos données restent en Tunisie, votre croissance aussi.
        </p>

        <div>
          <Link
            href="https://cloud.vaga.tn"
            className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Se Connecter
          </Link>
        </div>

      </div>

      <div>
        <Image src={"/preview.png"} alt='vaga preview' width={550} height={1} className='pointer-events-none' />
      </div>

    </section>
  );
}