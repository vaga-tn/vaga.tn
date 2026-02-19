import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { injectContent, injectContentFiles, MarkdownComponent } from '@analogjs/content';
import { DocPageAttributes } from '@app/models/content.models';

@Component({
  selector: 'app-doc-detail-page',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive, MarkdownComponent],
  template: `
    <div class="flex min-h-full">
      <!-- Docs sidebar -->
      <aside class="w-56 shrink-0 border-r border-gray-200 bg-white px-4 py-8">
        <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Documentation
        </p>
        <nav class="flex flex-col gap-1">
          @for (doc of docs; track doc.slug) {
            <a
              [routerLink]="['/docs', doc.slug]"
              routerLinkActive="bg-blue-50 text-blue-700 font-medium"
              class="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              {{ doc.attributes.title }}
            </a>
          }
        </nav>
      </aside>

      <!-- Doc content -->
      <main class="flex-1 overflow-auto">
        @if (doc$ | async; as doc) {
          <article class="contentLayout">
            <header class="mb-8">
              <h1 class="text-4xl font-bold text-gray-900">
                {{ doc.attributes.title }}
              </h1>
              <p class="mt-2 text-gray-500">{{ doc.attributes.description }}</p>
            </header>

            <div class="md-content">
              <analog-markdown [content]="doc.content" />
            </div>
          </article>
        }
      </main>
    </div>
  `,
})
export default class DocDetailPageComponent {
  readonly docs = injectContentFiles<DocPageAttributes>(
    (file) =>
      file.filename.includes('/content/docs/') && !file.attributes['draft'],
  ).sort((a, b) => (a.attributes.order ?? 99) - (b.attributes.order ?? 99));

  readonly doc$ = injectContent<DocPageAttributes>({
    param: 'slug',
    subdirectory: 'docs',
  });
}
