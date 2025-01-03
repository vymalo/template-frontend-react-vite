import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ViteMinifyPlugin({}),
    legacy({
      targets: ['defaults'],
    }),
  ],
});