'use client';

export default function CTASection() {
  const handleStartNow = () => {
    console.log('Starting now...');
    // Add your start now logic here
  };

  const handleScheduleDemo = () => {
    console.log('Scheduling demo...');
    // Add your demo scheduling logic here
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Prêt à Révolutionner Votre Gestion ?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Rejoignez les entreprises tunisiennes qui ont déjà fait le choix de VAGA pour leur croissance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleStartNow}
            className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            Commencer Maintenant
          </button>
          <button
            onClick={handleScheduleDemo}
            className="border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all text-white"
          >
            Planifier une Démo
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          ✓ Essai gratuit de 3 jours • ✓ Pas de carte de crédit requise • ✓ Support en français
        </p>
      </div>
    </section>
  );
}