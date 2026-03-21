import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VAGA ERP & Gestion Commerciale',
    short_name: 'VAGA',
    description: 'L\'alternative moderne et pas chère de logiciel de gestion d\'entreprise et facturation à Sousse, Tunisie.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon_dark.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon_light.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
