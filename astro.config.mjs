// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vaga.tn',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
