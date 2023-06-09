import { defineConfig } from 'vite';
import path from 'path';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
          postcssNesting,
      ],
    },
  },
});
