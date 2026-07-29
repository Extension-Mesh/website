import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://extension-mesh.github.io";
const base = process.env.SITE_BASE ?? "/website";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
