import Image from "next/image";

export default function NicheSection() {

  return (
    <section className="theSharedSectionClasses flex items-center justify-center  py-20">

      <div className="space-y-4">
        <p>Des modules spécialisés pour répondre aux besoins spécifiques de votre industrie</p>

        <div className='w-full bg-[#EDEDF0] rounded-3xl p-18 grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-6'>

          <div className="space-y-3">
            <div className="h-12">
              <Image src={"/plyvalent.png"} width={100} height={1} alt="icon" />
            </div>
            <h2 className="font-semibold text-2xl uppercase">Commerce Général</h2>
            <p className="text-sm">
              Solution complète pour magasins, supermarchés et commerces de détail
            </p>
          </div>

          <div className="space-y-3">
            <div className="h-12">
              <Image src={"/plyvalent.png"} width={100} height={1} alt="icon" />
            </div>
            <h2 className="font-semibold text-2xl uppercase">Transport</h2>
            <p className="text-sm">
              Gestion de flotte, itinéraires et maintenance véhicules
            </p>
          </div>

          <div className="space-y-3">
            <div className="h-12">
              <Image src={"/plyvalent.png"} width={100} height={1} alt="icon" />
            </div>
            <h2 className="font-semibold text-2xl uppercase">Livraison</h2>
            <p className="text-sm">
              Suivi colis, optimisation tournées et gestion livreurs
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}