import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'VAGA — Your headline goes here',
  meta: [
    {
      name: 'description',
      content:
        'A short description of what your product does and why people should care. Replace this with your real value proposition.',
    },
    { property: 'og:title', content: 'VAGA — Your headline goes here' },
    {
      property: 'og:description',
      content:
        'A short description of what your product does and why people should care.',
    },
    { property: 'og:url', content: 'https://vaga.tn/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'VAGA — Your headline goes here' },
    {
      name: 'twitter:description',
      content:
        'A short description of what your product does and why people should care.',
    },
    { name: 'robots', content: 'index, follow' },
  ],
};

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-white flex flex-col">

      <!-- Nav -->
      <header class="w-full border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <span class="font-semibold text-gray-900 text-lg tracking-tight">
          YourProduct
        </span>
        <nav class="flex items-center gap-6 text-sm text-gray-500">
          <a routerLink="/docs" class="hover:text-gray-900 transition-colors">Docs</a>
          <a routerLink="/blog" class="hover:text-gray-900 transition-colors">Blog</a>
          <a routerLink="/changelog" class="hover:text-gray-900 transition-colors">Changelog</a>
          <a
            routerLink="/docs"
            class="rounded-lg bg-gray-900 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Get Started
          </a>
        </nav>
      </header>

      <!-- Hero -->
      <main class="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <span class="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-600 uppercase tracking-widest">
          Now in beta
        </span>
        <h1 class="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight max-w-2xl">
          Your headline goes here
        </h1>
        <p class="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
          A short description of what your product does and why people should care.
          Replace this with your real value proposition.
        </p>
        <div class="mt-10 flex items-center gap-4 flex-wrap justify-center">
          <a
            routerLink="/docs/getting-started"
            class="rounded-lg bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-700 transition-colors"
          >
            Read the docs
          </a>
          <a
            routerLink="/blog"
            class="rounded-lg border border-gray-200 px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            See what's new
          </a>
        </div>
      </main>

      <!-- Footer -->
      <footer class="border-t border-gray-100 px-6 py-5 text-center text-xs text-gray-400">
        &copy; {{ year }} YourProduct. All rights reserved.
      </footer>

    </div>
  `,
})
export default class HomePageComponent {
  readonly year = new Date().getFullYear();
}
