---
title: "Getting started with Astro"
description: "A quick tour of how an Astro project is laid out and why it's a nice fit for a blog."
pubDate: 2026-05-12
tags: ["astro", "web", "guide"]
---

If you're curious how this site is put together, here's the short version.

## The shape of a project

An Astro project keeps things in a few predictable folders:

- `src/pages/` — every file here becomes a route. `about.astro` → `/about`.
- `src/layouts/` — reusable page shells that wrap your content.
- `src/components/` — smaller pieces you compose pages from.
- `src/content/` — your Markdown, validated against a schema.
- `public/` — static files copied as-is (favicons, images, `robots.txt`).

## Content collections

Instead of loading Markdown by hand, Astro has *content collections*. You define
a schema once and every post is type-checked against it:

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

Now a typo like `pubDate: "not a date"` fails the build instead of shipping a
broken page. That safety net is most of why I reach for Astro on content sites.

## Building and previewing

Three commands cover almost everything:

```bash
npm run dev      # local dev server with hot reload
npm run build    # output a static site to dist/
npm run preview  # serve the built site locally
```

That's the whole loop. Write Markdown, run `dev`, and watch it update.
