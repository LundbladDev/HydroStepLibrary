// Add a boat: npm run new-boat -- hs-30
// or duplicate a folder in src/content/boats/.
// Replace cover.png, drop extras in photos/, edit index.md.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const boats = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/boats' }),
  schema: ({ image }) =>
    z.object({
      model: z.string(),
      cover: image(),
      dummy: z.boolean().default(true),
      featured: z.boolean().default(false),
      owner: z.string().optional(),
      year: z.string().optional(),
      engine: z.string().optional(),
      location: z.string().optional(),
      note: z.string().optional(),
      captions: z.record(z.string(), z.string()).optional(),
    }),
});

export const collections = { boats };
