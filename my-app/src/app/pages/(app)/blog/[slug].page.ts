import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { BlogPostAttributes } from '@app/models/content.models';

@Component({
  selector: 'app-blog-post-page',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterLink, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
      <article class="contentLayout">
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
export default class BlogPostPageComponent implements OnInit {
  private readonly metaService = inject(Meta);
  private readonly titleService = inject(Title);

  readonly post$ = injectContent<BlogPostAttributes>({
    param: 'slug',
    subdirectory: 'blog',
  });

  ngOnInit(): void {
    this.post$.subscribe((post) => {
      const { title, description, slug } = post.attributes;
      const pageTitle = `${title} — VAGA`;
      const pageUrl = `https://vaga.tn/blog/${slug}`;

      this.titleService.setTitle(pageTitle);

      this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.updateTag({ property: 'og:title', content: pageTitle });
      this.metaService.updateTag({ property: 'og:description', content: description });
      this.metaService.updateTag({ property: 'og:url', content: pageUrl });
      this.metaService.updateTag({ property: 'og:type', content: 'article' });
      this.metaService.updateTag({ name: 'twitter:title', content: pageTitle });
      this.metaService.updateTag({ name: 'twitter:description', content: description });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    });
  }
}
