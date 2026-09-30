/**
 * ¿Qué cosas se pueden agregar aquí (src/content/)?
 * 
 * Colecciones de contenido estructuradas, tipadas y validadas con Zod:
 * 1. Definición de esquemas de colecciones (defineCollection, z) para validar el frontmatter de Markdown/MDX o datos JSON/YAML.
 * 2. Colección de Posts/Artículos (content/posts/*.md o *.mdx) para blogs o novedades.
 * 3. Colección de Autores/Miembros de equipo (content/authors/*.json) con biografía, avatar y redes.
 * 4. Colección de Proyectos/Portafolio (content/projects/*.md) con tecnologías, capturas y enlaces.
 * 5. Documentación y guías (content/docs/*.md) organizadas por secciones.
 * 6. Datos de configuración del sitio (content/site/*.json) como navegación, metadatos y enlaces sociales.
 */

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Admin'),
    tags: z.array(z.string()).default([]),
    topic: z.string(),
    image: z.string().optional(),
    readTime: z.number().default(0),
    avatar: z.string(),
    slug: z.string(),
    isTop: z.boolean().default(false),
  }),
});

export const collections = { news };
