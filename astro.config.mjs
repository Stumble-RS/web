import { defineConfig, passthroughImageService } from 'astro/config';
import compress from "astro-compress";
import vercel from '@astrojs/vercel/serverless';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    analytics: true,
    imagesConfig: {
      sizes: [400, 750],
      formats: ["avif", "webp", "jpeg"],
      minimumCacheTTL: 60 * 60 * 24,
    }
  }),
  image: {
    service: passthroughImageService(),
  },
  compressHTML: true,
  site: "https://getstumble.app",
  integrations: [compress(), sitemap({
    changefreq: 'daily',
    priority: 0.7
  }), tailwind()]
});