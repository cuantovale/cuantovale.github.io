import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://cuantovale.github.io/",
  base: "/",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
    },
  },
});
