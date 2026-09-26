import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kzuraw.com",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  markdown: { shikiConfig: { theme: "github-light" } },
  build: {
    inlineStylesheets: "always",
  },
});
