import { defineConfig } from 'astro/config';
import compress from "astro-compress";

import vercelEdge from '@astrojs/vercel/edge';

// https://astro.build/config
export default defineConfig({
  integrations: [compress()],
  output: "server",
  adapter: vercelEdge(),
  vite:{
    ssr:{
      external:['svgo'],
    },
  },
});
