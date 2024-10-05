import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNested from 'postcss-nested'
import { aliases } from './aliases';
import * as path from 'path';

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases()).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssNested()]
    }
  },
  server: {
    port: 3000
  },
  resolve: {
    alias: resolvedAliases,
  },
})
