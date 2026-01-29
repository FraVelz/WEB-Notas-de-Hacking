import { defineCollection, z } from 'astro:content';

const seccionesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    route: z.string().optional(),
  }),
});

export const collections = {
  'secciones': seccionesCollection,
};
