import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-zinc-600">
            Vous avez une question ou souhaitez une démonstration personnalisée ? Remplissez le formulaire ci-dessous et notre équipe vous recontactera rapidement.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Netlify Form setup */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/?success=true"
            className="space-y-6"
          >
            {/* Hidden inputs for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Ne pas remplir ce champ si vous êtes humain : <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-900">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="w-full flex h-10 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-900">
                  Email professionnel
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="nom@entreprise.com"
                  className="w-full flex h-10 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-semibold text-zinc-900">
                Sujet de votre demande
              </label>
              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
                className="w-full flex h-10 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
              >
                <option value="" disabled>Sélectionnez un sujet</option>
                <option value="demo">Demande de Démonstration</option>
                <option value="custom_dev">Développement Sur Mesure</option>
                <option value="support">Support Client / Technique</option>
                <option value="other">Autre demande</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-zinc-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Comment pouvons-nous vous aider ?"
                className="w-full flex rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all min-h-[120px] resize-y"
              ></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Envoyer la demande
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
