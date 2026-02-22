/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    cacheDir: `../node_modules/.vite`,
    build: {
      outDir: '../dist/./my-app/client',
      reportCompressedSize: true,
      target: ['es2020'],
    },
    server: {
      fs: {
        allow: ['.'],
      },
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss({ config: `${__dirname}/tailwind.config.js` }),
          autoprefixer(),
        ],
      },
    },
    plugins: [
      analog({
        content: {
          highlighter: 'prism',
        },
        prerender: {
          routes: async () => [
            '/',
            '/blog',
            '/docs',
            '/blog/hello-world',
            '/docs/getting-started',
          ],
        },
      }),
      nxViteTsPaths(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
  };
});
