import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind"
import node from "@astrojs/node";
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://Riverlytics-astro.web3templates.com/",
  integrations: [tailwind(), mdx(), sitemap(), clerk()],
  adapter: node({ mode: "standalone" }),
  output: "server",
});
