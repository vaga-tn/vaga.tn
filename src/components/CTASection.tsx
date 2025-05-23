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
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Prêt à Révolutionner Votre Gestion ?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Rejoignez les entreprises tunisiennes qui ont déjà fait le choix de VAGA pour leur croissance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleStartNow}
            className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105"
          >
            Commencer Maintenant
          </button>
          <button
            onClick={handleScheduleDemo}
            className="border border-black/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black/10 transition-all text-black"
          >
            Planifier une Démo
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-6">
          ✓ Essai gratuit de 3 jours • ✓ Pas de carte de crédit requise • ✓ Support en français
        </p>
      </div>
    </section>
  );
}