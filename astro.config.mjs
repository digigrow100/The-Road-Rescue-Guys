import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://theroadrescueguys.co.uk',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
