import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'VAGA - Logiciel Gestion Commerciale | ERP Tunisie Sousse',
  meta: [
    {
      name: 'description',
      content:
        'Solutions ERP professionnelles pour entreprises à Sousse, Tunisie. Logiciel de gestion commerciale, facturation électronique, immobilier et automobile par MAAK CORP.',
    },
    { property: 'og:title', content: 'VAGA - Logiciel Gestion Commerciale | ERP Tunisie Sousse' },
    {
      property: 'og:description',
      content:
        'Solutions ERP professionnelles pour entreprises à Sousse, Tunisie. Logiciel de gestion commerciale, facturation électronique, immobilier et automobile par MAAK CORP.',
    },
    { property: 'og:url', content: 'https://vaga.tn/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'VAGA - Logiciel Gestion Commerciale | ERP Tunisie Sousse' },
    {
      name: 'twitter:description',
      content:
        'Solutions ERP professionnelles pour entreprises à Sousse, Tunisie. Logiciel de gestion commerciale, facturation électronique, immobilier et automobile par MAAK CORP.',
    },
    { name: 'robots', content: 'index, follow' },
  ],
};

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './index.page.html'
})
export default class HomePageComponent {
  readonly year = new Date().getFullYear();

  protected readonly routes = [
    {
      label: 'Home',
      route: '/',
      icons: 'icons/home.svg',
    },
    {
      label: 'Blog',
      route: '/blog',
      icons: 'icons/lightning.svg',
    },
    {
      label: 'Docs',
      route: '/docs',
      icons: 'icons/books.svg',
    },
    {
      label: 'Changelog',
      route: '/',
      icons: 'icons/keyboard.svg',
    },
  ]
}
