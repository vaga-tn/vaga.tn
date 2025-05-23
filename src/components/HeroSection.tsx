'use client';

import { useEffect } from 'react';

export default function HeroSection() {
  useEffect(() => {
    // Add parallax effect to floating shapes
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const shapes = document.querySelectorAll('.floating-shape');
      shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        (shape as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartTrial = () => {
    // Add your trial start logic here
    console.log('Starting trial...');
  };

  const handleViewDemo = () => {
    // Add your demo logic here
    console.log('Viewing demo...');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black Via-gray-900 to-black overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black animate-pulse-slow"></div>

      {/* Floating shapes */}
      <div className="absolute inset-0">
        <div className="floating-shape absolute w-20 h-20 bg-white/10 rounded-full blur-sm animate-float"
          style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
        <div className="floating-shape absolute w-32 h-32 bg-white/5 rounded-full blur-md animate-float"
          style={{ right: '15%', top: '10%', animationDelay: '2s' }}></div>
        <div className="floating-shape absolute w-16 h-16 bg-white/10 rounded-full blur-sm animate-float"
          style={{ left: '70%', top: '60%', animationDelay: '4s' }}></div>
        <div className="floating-shape absolute w-24 h-24 bg-white/5 rounded-full blur-md animate-float"
          style={{ left: '20%', bottom: '20%', animationDelay: '6s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
               linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
             `,
          backgroundSize: '50px 50px'
        }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Le Premier CRM<br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              100% Tunisien
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Solution complète de gestion client conçue par des Tunisiens, pour les entrepreneurs tunisiens.
            Vos données restent en Tunisie, votre croissance aussi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleStartTrial}
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg"
            >
              Commencer Gratuitement
            </button>
            <button
              onClick={handleViewDemo}
              className="border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all text-white backdrop-blur-sm"
            >
              Voir la Démo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-bounce-slow">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-gray-400">Tunisien</div>
          </div>
          <div className="text-center animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
          <div className="text-center animate-bounce-slow" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-white">3 Jours</div>
            <div className="text-gray-400">Essai Gratuit</div>
          </div>
          <div className="text-center animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
            <div className="text-3xl font-bold text-white">SSL</div>
            <div className="text-gray-400">Sécurisé</div>
          </div>
        </div>
      </div>
    </section>
  );
}