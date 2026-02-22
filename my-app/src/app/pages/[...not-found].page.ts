import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      <p class="text-6xl font-bold text-gray-200">404</p>
      <h1 class="mt-4 text-2xl font-semibold text-gray-900">Page not found</h1>
      <p class="mt-2 text-gray-500">The page you're looking for doesn't exist.</p>
      <a
        routerLink="/"
        class="mt-8 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
      >
        Go home
      </a>
    </div>
  `,
})
export default class NotFoundPageComponent {}
