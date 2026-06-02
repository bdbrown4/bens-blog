// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Your production URL. For a GitHub Pages project site this is
  // https://<username>.github.io and the repo name goes in `base`.
  site: 'https://bdbrown4.github.io',
  base: '/bens-blog',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
