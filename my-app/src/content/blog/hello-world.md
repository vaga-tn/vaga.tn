---
title: Hello World
date: 2026-02-18
description: The first blog post — an introduction to this blog.
slug: hello-world
author: Your Name
tags:
  - general
  - introduction
---

# Hello World

Welcome to the blog. This is the first post.

## What is this?

This blog is powered by [AnalogJS](https://analogjs.org) — the full-stack Angular meta-framework with file-based routing, markdown content, and SSR built in.

## Code Example

Here is a quick TypeScript snippet:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>Hello, Analog!</h1>`,
})
export class AppComponent {}
```

## What's Next?

More posts coming soon. To add a new post, create a new `.md` file in `src/content/blog/` with the same frontmatter shape and it will automatically appear in the listing.
