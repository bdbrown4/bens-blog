# Ben's Blog

A fast, content-focused blog built with [Astro](https://astro.build) and deployed
free on **GitHub Pages**. Every push to `main` rebuilds and redeploys the site
automatically via GitHub Actions.

**Live site:** https://bdbrown4.github.io/bens-blog

## Features

- 📝 Markdown posts with type-checked frontmatter (content collections)
- 🏷️ Tags / topic pages
- 🌗 Light + dark mode (remembers your choice)
- ⏱️ Automatic reading-time estimates
- 📰 RSS feed + sitemap
- ⚡ Ships zero JavaScript by default — just fast HTML and CSS

## Writing a new post

Create a Markdown file in `src/content/blog/`. The filename becomes the URL
(`my-first-post.md` → `/blog/my-first-post/`). Start it with frontmatter:

```markdown
---
title: "My first post"
description: "A one-line summary used in listings and previews."
pubDate: 2026-06-01
tags: ["astro", "notes"]
---

Your post content goes here, written in Markdown.
```

Set `draft: true` in the frontmatter to keep a post out of the build while you
work on it. Commit and push, and it goes live within a couple of minutes.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18.20+ (or 20.3+ / 22+).

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server at http://localhost:4321/bens-blog
npm run build    # build the production site into dist/
npm run preview  # preview the production build locally
```

## Project structure

```text
src/
├── components/   # Header, Footer, PostCard, ThemeToggle, ...
├── layouts/      # BaseLayout + BlogPost shells
├── content/blog/ # your Markdown posts
├── pages/        # routes (index, blog, tags, about, 404, rss.xml)
├── styles/       # global.css (theme + layout)
├── utils/        # base-path + reading-time helpers
├── consts.ts     # site title, description, links
└── content.config.ts  # blog collection schema
public/           # static assets (favicon, robots.txt)
.github/workflows/deploy.yml  # GitHub Pages deploy
astro.config.mjs  # site URL + base path + integrations
```

## Deployment notes

This is a GitHub Pages **project site**, so `astro.config.mjs` sets:

- `site: 'https://bdbrown4.github.io'`
- `base: '/bens-blog'`

Because of the `base`, internal links are built with the `href()` helper in
`src/utils/path.ts` so they always point at the right place. If you later move
to a custom domain, update `site`, drop `base`, and simplify those links.

For GitHub Actions deploys to work, enable Pages once in the repository settings:

1. Open `Settings` → `Pages`
2. Under `Build and deployment`, set `Source` to `GitHub Actions`

The workflow intentionally does not try to auto-enable Pages from CI, because
that requires a Personal Access Token or GitHub App admin permissions that the
default `GITHUB_TOKEN` does not have.
