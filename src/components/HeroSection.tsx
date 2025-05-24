'use client';

export default function HeroSection() {
  const handleStartTrial = () => {
    // Add your trial start logic here
    console.log('Starting trial...');
  };

  const handleViewDemo = () => {
    // Add your demo logic here
    console.log('Viewing demo...');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Static background shapes - no animation */}
      <div className="absolute inset-0">
        <div className="absolute w-20 h-20 bg-black/5 rounded-full blur-sm"
          style={{ left: '10%', top: '20%' }}></div>
        <div className="absolute w-32 h-32 bg-black/10 rounded-full blur-md"
          style={{ right: '15%', top: '10%' }}></div>
        <div className="absolute w-16 h-16 bg-black/5 rounded-full blur-sm"
          style={{ left: '70%', top: '60%' }}></div>
        <div className="absolute w-24 h-24 bg-black/10 rounded-full blur-md"
          style={{ left: '20%', bottom: '20%' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
               linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px)
             `,
          backgroundSize: '50px 50px'
        }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="py-24 md:py-24 lg:py-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black">
            Le Premier CRM<br />
            <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              100% Tunisien
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Solution complète de gestion client conçue par des Tunisiens, pour les entrepreneurs tunisiens.
            Vos données restent en Tunisie, votre croissance aussi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleStartTrial}
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Commencer Gratuitement
            </button>
            <button
              onClick={handleViewDemo}
              className="border border-black/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black/10 transition-all text-black backdrop-blur-sm"
            >
              Voir la Démo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-black">100%</div>
            <div className="text-gray-600">Tunisien</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">3 Jours</div>
            <div className="text-gray-600">Essai Gratuit</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">SSL</div>
            <div className="text-gray-600">Sécurisé</div>
          </div>
        </div>
      </div>
    </section>
  );
}