import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import path from 'path';
import { fileURLToPath } from 'url';
import { starlightSidebar } from './starlight-sidebar.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  output: 'static',
  base: '/WEB-Notas-de-Hacking',
  site: 'https://fravelz.github.io',

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },

  integrations: [
    // Para que funcione bien con MDX y resaltado de código,
    // mantenemos el orden recomendado: primero Starlight, luego el resto.
    starlight({
      title: 'Notas de Hacking',
      description: 'Guía completa para aprender o repasar ciberseguridad desde cero. Notas organizadas sobre hacking ético, pentesting, Linux, Python, redes y más.',
      sidebar: starlightSidebar,
      disable404Route: true,
      customCss: ['./src/styles/theme.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/FraVelz/WEB-Notas-de-Hacking',
        },
      ],
      head: [
        { tag: 'meta', attrs: { name: 'author', content: 'Fravelz' } },
        { tag: 'meta', attrs: { name: 'robots', content: 'index, follow' } },
        { tag: 'meta', attrs: { name: 'keywords', content: 'ciberseguridad, hacking ético, pentesting, Linux, Python, redes, OSINT, anonimato' } },
        { tag: 'meta', attrs: { 'http-equiv': 'Content-Language', content: 'es' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://fravelz.github.io/WEB-Notas-de-Hacking/screenshot.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://fravelz.github.io/WEB-Notas-de-Hacking/screenshot.png' } },
        { tag: 'meta', attrs: { name: 'twitter:image:alt', content: 'Notas de Hacking - Guía de ciberseguridad' } },
      ],
    }),
    react(),
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

