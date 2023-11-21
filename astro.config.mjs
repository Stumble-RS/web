import { defineConfig, passthroughImageService } from 'astro/config';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  image: {
    service: passthroughImageService()
  },
  compressHTML: true,
  site: "https://getstumble.app",
  integrations: [compress(), sitemap({
    changefreq: 'daily',
    priority: 0.7
  }), tailwind()]
});