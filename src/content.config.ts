import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The blog collection loads every Markdown file in src/content/blog.
// Each post's filename (minus .md) becomes its URL slug.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
    colophon: z.string().nullable().default('Drafted by me, structured with Claude.'),
  }),
});

export const collections = { blog };
