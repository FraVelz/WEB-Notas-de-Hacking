import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import path from 'path';
import { fileURLToPath } from 'url';

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
      disable404Route: true,
      customCss: ['./src/styles/theme.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/FraVelz/WEB-Notas-de-Hacking',
        },
      ],
    }),
    react(),
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

