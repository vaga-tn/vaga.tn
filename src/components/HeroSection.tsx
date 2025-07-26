'use client';
import Link from 'next/link';

export default function HeroSection() {

  return (
    <section className="bg-white overflow-hidden relative max-w-customWidth h-screen z-10  mx-auto px-4 lg:px-0 text-center border-r border-l border-black flex items-center justify-center">

      <div className="py-24 md:py-24 lg:py-0">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black">
          Le Premier SAAS<br />
          <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            100% Tunisien
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
          Solution complète de gestion clients, inventaire, finance, conçue par des Tunisiens, pour les entrepreneurs tunisiens.
          Vos données restent en Tunisie, votre croissance aussi.
        </p>

        <Link
          href="https://cloud.vaga.tn"
          className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
        >
          Se Connecter
        </Link>
      </div>

    </section>
  );
}