import { Component } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { BlogPostAttributes } from '@app/models/content.models';

@Component({
  selector: 'app-blog-post-page',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterLink, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
      <article class="p-8 max-w-3xl mx-auto">
        <a
          routerLink="/blog"
          class="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline mb-8"
        >
          &larr; Back to Blog
        </a>

        <header class="mb-8">
          <time class="text-xs text-gray-400 uppercase tracking-wide">
            {{ post.attributes.date | date: 'longDate' }}
          </time>
          <h1 class="mt-2 text-4xl font-bold text-gray-900 leading-tight">
            {{ post.attributes.title }}
          </h1>
          <p class="mt-3 text-lg text-gray-500">
            {{ post.attributes.description }}
          </p>
          @if (post.attributes.author) {
            <p class="mt-2 text-sm text-gray-400">
              By {{ post.attributes.author }}
            </p>
          }
        </header>

        <div class="md-content">
          <analog-markdown [content]="post.content" />
        </div>
      </article>
    }
  `,
})
export default class BlogPostPageComponent {
  readonly post$ = injectContent<BlogPostAttributes>({
    param: 'slug',
    subdirectory: 'blog',
  });
}
