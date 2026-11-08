import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const pages = [
  'index',
  'artistica',
  'bodas',
  'comuniones',
  'eventos-espectaculos',
  'retrato',
  'tarifas',
  'viajes-street',
];
const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  esbuild: {
    jsx: 'automatic',
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((page) => [page, resolve(root, `${page}.html`)])),
    },
  },
});
