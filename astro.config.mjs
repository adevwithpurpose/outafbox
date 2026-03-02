// @ts-check
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});