import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kratuwu.github.io',
  base: '/kratuwu',
  integrations: [mdx()]
});
