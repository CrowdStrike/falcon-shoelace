import { defineConfig } from 'vite';
import path from 'path';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src', 'style.css'),
      name: 'falcon-shoelace',
    },
    cssCodeSplit: true,
  },
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
});
