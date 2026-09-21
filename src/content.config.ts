// Add a boat: duplicate a folder in src/content/boats/, replace cover.png
// and files in photos/, then edit index.md. The wall reads only model + cover.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const boats = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/boats' }),
  schema: ({ image }) =>
    z.object({
      model: z.string(),
      cover: image(),
      dummy: z.boolean().default(true),
      owner: z.string(),
      year: z.string(),
      location: z.string(),
      note: z.string(),
      wall: z.object({
        x: z.number(),
        y: z.number(),
        w: z.number(),
        h: z.number(),
        rotate: z.number(),
        featured: z.boolean().optional(),
      }),
    }),
});

export const collections = { boats };
