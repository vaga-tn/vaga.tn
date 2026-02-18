import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex min-h-screen">
      <!-- Left sidebar -->
      <aside class="w-56 shrink-0 border-r border-gray-200 bg-white px-4 py-8">
        <p class="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Navigation
        </p>
        <nav class="flex flex-col gap-1">
          <a
            routerLink="/"
            routerLinkActive="bg-gray-100 text-gray-900 font-medium"
            [routerLinkActiveOptions]="{ exact: true }"
            class="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            routerLink="/docs"
            routerLinkActive="bg-gray-100 text-gray-900 font-medium"
            class="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            Docs
          </a>
          <a
            routerLink="/blog"
            routerLinkActive="bg-gray-100 text-gray-900 font-medium"
            class="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            Blog
          </a>
          <a
            routerLink="/changelog"
            routerLinkActive="bg-gray-100 text-gray-900 font-medium"
            class="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            Changelog
          </a>
        </nav>
      </aside>

      <!-- Main content -->
      <main class="flex-1 bg-gray-50">
        <router-outlet />
      </main>
    </div>
  `,
})
export default class AppLayoutComponent {}
