import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import vercel from '@astrojs/vercel/serverless';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  }),
  site: "https://getstumble.app",
  integrations: [compress(), sitemap({
    changefreq: 'daily',
    priority: 0.7
  }), tailwind()]
});