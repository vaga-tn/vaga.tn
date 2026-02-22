import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import { DocPageAttributes } from '@app/models/content.models';

export const routeMeta: RouteMeta = {
  title: 'Documentation — VAGA',
  meta: [
    {
      name: 'description',
      content:
        'Everything you need to get started with VAGA and go further.',
    },
    { property: 'og:title', content: 'Documentation — VAGA' },
    {
      property: 'og:description',
      content: 'Everything you need to get started with VAGA and go further.',
    },
    { property: 'og:url', content: 'https://vaga.tn/docs' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Documentation — VAGA' },
    {
      name: 'twitter:description',
      content: 'Everything you need to get started with VAGA and go further.',
    },
    { name: 'robots', content: 'index, follow' },
  ],
};

@Component({
  selector: 'app-docs-index-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="contentLayout">
      <header class="mb-10">
        <h1 class="text-4xl font-bold text-gray-900">Documentation</h1>
        <p class="mt-2 text-gray-500">
          Everything you need to get started and go further.
        </p>
      </header>

      @if (docs.length === 0) {
        <p class="text-gray-400">No documentation pages yet.</p>
      }

      <nav aria-label="Documentation pages">
        <ul class="space-y-3">
          @for (doc of docs; track doc.slug) {
            <li>
              <a
                [routerLink]="['/docs', doc.slug]"
                class="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-5 py-4 hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <div class="flex-1">
                  <p class="font-medium text-gray-900">
                    {{ doc.attributes.title }}
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    {{ doc.attributes.description }}
                  </p>
                </div>
                <span class="text-gray-400 text-sm">&rarr;</span>
              </a>
            </li>
          }
        </ul>
      </nav>
    </div>
  `,
})
export default class DocsIndexPageComponent {
  readonly docs = injectContentFiles<DocPageAttributes>(
    (file) =>
      file.filename.includes('/content/docs/') && !file.attributes['draft'],
  ).sort((a, b) => (a.attributes.order ?? 99) - (b.attributes.order ?? 99));
}
