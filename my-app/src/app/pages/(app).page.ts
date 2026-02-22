import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="grid grid-cols-[100px,1fr] h-full">
      <!-- Left sidebar -->
      <aside class="sticky top-0 h-screen border-r border-gray-200 bg-white p-4 space-y-4 overflow-y-auto">
        <img [src]="'vaga_logo.png'" [alt]="'image'" [width]="30" class="mx-auto" />
        <nav class="flex flex-col gap-2">
          @for (item of routes; track $index) {
            <a
              [routerLink]="item.route"
              routerLinkActive="bg-gray-100 text-gray-900 font-medium"
              [routerLinkActiveOptions]="{ exact: true }"
              class="rounded-md p-2 hover:bg-gray-50 hover:text-gray-900 transition-colors flex flex-col gap-2 items-center justify-center"
            >
              <img [src]="item.icons" [alt]="'icon'" [width]="25" />
              <span class="text-xs text-gray-500">{{item.label}}</span>
            </a>
          }
        </nav>
      </aside>

      <!-- Main content -->
      <main class="h-screen overflow-y-auto bg-gray-50">
        <router-outlet />
      </main>
    </div>
  `,
})
export default class AppLayoutComponent {
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
