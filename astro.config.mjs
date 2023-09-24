import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    // imageService: true,
    edgeMiddleware: true,
  }),
  vite:{
    ssr:{
      external:['svgo'],
    },
  },
  integrations: [compress()],
});
