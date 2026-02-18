import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { BlogPostAttributes } from '@app/models/content.models';

@Component({
  selector: 'app-blog-index-page',
  standalone: true,
  imports: [RouterLink, DatePipe],
  template: `
    <div class="p-8 max-w-4xl mx-auto">
      <header class="mb-10">
        <h1 class="text-4xl font-bold text-gray-900">Blog</h1>
        <p class="mt-2 text-gray-500">Thoughts, updates, and announcements.</p>
      </header>

      @if (posts.length === 0) {
        <p class="text-gray-400">No posts published yet.</p>
      }

      <div class="grid gap-6 sm:grid-cols-2">
        @for (post of posts; track post.slug) {
          <a
            [routerLink]="['/blog', post.slug]"
            class="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <time class="text-xs text-gray-400 uppercase tracking-wide">
              {{ post.attributes.date | date: 'longDate' }}
            </time>
            <h2 class="mt-2 text-lg font-semibold text-gray-900 leading-snug">
              {{ post.attributes.title }}
            </h2>
            <p class="mt-2 text-sm text-gray-500 line-clamp-3">
              {{ post.attributes.description }}
            </p>
            <span
              class="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              Read more &rarr;
            </span>
          </a>
        }
      </div>
    </div>
  `,
})
export default class BlogIndexPageComponent {
  readonly posts = injectContentFiles<BlogPostAttributes>(
    (file) =>
      file.filename.includes('/content/blog/') && !file.attributes['draft'],
  ).sort(
    (a, b) =>
      new Date(b.attributes.date).getTime() -
      new Date(a.attributes.date).getTime(),
  );
}
